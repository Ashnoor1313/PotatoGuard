import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

// Configure Neon to use web sockets
neonConfig.webSocketConstructor = ws;

// Create a database connection pool
const createPool = () => {
  if (!process.env.DATABASE_URL) {
    console.warn("DATABASE_URL not set, database features will be limited");
    return null;
  }
  
  try {
    return new Pool({ connectionString: process.env.DATABASE_URL });
  } catch (error) {
    console.error("Failed to create database pool:", error);
    return null;
  }
};

// Create Drizzle instance from the pool
export const pool = createPool();
export const db = pool ? drizzle(pool, { schema }) : null;

// Helper function to check if database is available
export const isDatabaseAvailable = () => !!db;