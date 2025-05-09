import { users, predictions, type User, type InsertUser, type Prediction, type InsertPrediction } from "@shared/schema";
import { db, isDatabaseAvailable } from "./db";
import { eq, desc } from "drizzle-orm";

// Interface with CRUD methods
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Prediction methods
  createPrediction(prediction: InsertPrediction): Promise<Prediction>;
  getPredictions(limit?: number): Promise<Prediction[]>;
  getPrediction(id: number): Promise<Prediction | undefined>;
}

// Database implementation of storage
export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    if (!db) throw new Error("Database not available");
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    if (!db) throw new Error("Database not available");
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    if (!db) throw new Error("Database not available");
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  // Prediction methods
  async createPrediction(prediction: InsertPrediction): Promise<Prediction> {
    if (!db) throw new Error("Database not available");
    const [newPrediction] = await db.insert(predictions).values(prediction).returning();
    return newPrediction;
  }

  async getPredictions(limit = 10): Promise<Prediction[]> {
    if (!db) throw new Error("Database not available");
    return await db.select()
      .from(predictions)
      .limit(limit)
      .orderBy(desc(predictions.id));
  }

  async getPrediction(id: number): Promise<Prediction | undefined> {
    if (!db) throw new Error("Database not available");
    const [prediction] = await db.select().from(predictions).where(eq(predictions.id, id));
    return prediction || undefined;
  }
}

// In-memory storage fallback for development
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private predictionsMap: Map<number, Prediction>;
  userCurrentId: number;
  predictionCurrentId: number;

  constructor() {
    this.users = new Map();
    this.predictionsMap = new Map();
    this.userCurrentId = 1;
    this.predictionCurrentId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Prediction methods
  async createPrediction(insertPrediction: InsertPrediction): Promise<Prediction> {
    const id = this.predictionCurrentId++;
    const prediction: Prediction = { ...insertPrediction, id };
    this.predictionsMap.set(id, prediction);
    return prediction;
  }

  async getPredictions(limit = 10): Promise<Prediction[]> {
    return Array.from(this.predictionsMap.values())
      .sort((a, b) => b.id - a.id)
      .slice(0, limit);
  }

  async getPrediction(id: number): Promise<Prediction | undefined> {
    return this.predictionsMap.get(id);
  }
}

// Use database storage if DATABASE_URL is available, otherwise use in-memory storage
export const storage = process.env.DATABASE_URL 
  ? new DatabaseStorage() 
  : new MemStorage();
