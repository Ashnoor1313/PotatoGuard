import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User model (from original file)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Predictions model for potato disease classifier
export const predictions = pgTable("predictions", {
  id: serial("id").primaryKey(),
  imageFilename: text("image_filename").notNull(),
  primaryClass: text("primary_class").notNull(),
  primaryConfidence: text("primary_confidence").notNull(),
  allPredictions: text("all_predictions").notNull(), // JSON string of all prediction classes and scores
  timestamp: text("timestamp").notNull(),
});

export const insertPredictionSchema = createInsertSchema(predictions).omit({
  id: true,
});

export type InsertPrediction = z.infer<typeof insertPredictionSchema>;
export type Prediction = typeof predictions.$inferSelect;

// Schema validation for API requests
export const imageUploadSchema = z.object({
  file: z.any().refine((file) => file !== undefined, {
    message: "Image file is required",
  }),
});

// Schema validation for prediction results
export const predictionResultSchema = z.object({
  class: z.string(),
  confidence: z.number().min(0).max(1),
});

export const predictionResponseSchema = z.object({
  success: z.boolean(),
  predictions: z.array(predictionResultSchema),
});

export type PredictionResult = z.infer<typeof predictionResultSchema>;
export type PredictionResponse = z.infer<typeof predictionResponseSchema>;
