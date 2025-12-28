// server/utils/mongoose.ts
import mongoose from "mongoose";

if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI is missing");
const uri = process.env.MONGODB_URI;

interface MongooseGlobal {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: MongooseGlobal | undefined;
}

const cached: MongooseGlobal = global.mongoose ?? { conn: null, promise: null };
global.mongoose = cached;

export async function connectMongo() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(uri, {
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 10000,
        connectTimeoutMS: 10000,
      })
      .then((m) => m);
  }

  cached.conn = await cached.promise;
  console.log({
    message: "MongoDB connected",
    con: cached.conn.connection.name,
  });
  return cached.conn;
}
