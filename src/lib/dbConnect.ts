import mongoose from "mongoose";

/**
 * Extend the global object to store a cached mongoose connection.
 * 
 * IMPORTANT:
 * - This MUST be `var`, not `let` or `const`
 * - `var` attaches to the global scope and survives hot reloads
 *   in Next.js development mode.
 */
declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var mongoose: any;
}

/**
 * Use a global cache so that:
 * - We don't create a new MongoDB connection on every request
 * - The connection survives Next.js hot reloads
 *
 * cached = {
 *   conn:   the active mongoose connection (once connected)
 *   promise: the ongoing connection promise (while connecting)
 * }
 */
let cached = global.mongoose;

// Initialize the cache if it doesn't exist yet
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

/**
 * Connect to MongoDB and reuse the same connection across requests.
 *
 * Why this exists:
 * - Next.js API routes / server actions can run many times
 * - Creating a new DB connection each time is slow and dangerous
 * - This function ensures ONLY ONE connection is created
 */
async function dbConnect() {
  // Read MongoDB URI from environment variables
  const MONGODB_URI = process.env.MONGODB_URI!;

  // Fail fast if the URI is missing
  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local",
    );
  }

  /**
   * If we already have an active connection,
   * reuse it immediately (no new connection).
   */
  if (cached.conn) {
    return cached.conn;
  }

  /**
   * If no connection is in progress,
   * start one and store the PROMISE.
   *
   * Storing the promise allows multiple requests
   * to wait for the same connection instead of
   * creating multiple connections.
   */
  if (!cached.promise) {
    const opts = {
      // Disable mongoose buffering:
      // If MongoDB is not connected, fail immediately
      // instead of queueing commands in memory.
      bufferCommands: false,
    };

    // Start connecting and store the promise (NOT the resolved value)
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    /**
     * Wait for the connection to finish.
     * Once resolved, store the actual connection.
     */
    cached.conn = await cached.promise;
  } catch (e) {
    /**
     * If connection fails:
     * - Reset the promise so future attempts can retry
     * - Rethrow the error for proper handling
     */
    cached.promise = null;
    throw e;
  }

  // Return the active mongoose connection
  return cached.conn;
}

export default dbConnect;
