import { MongoClient, Db } from "mongodb";

const MONGODB_URI = "mongodb+srv://samrat:samrat2468@cluster0.nvus0ae.mongodb.net";
const MONGODB_DB = "Cluster0";

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;
let connectionAttempts = 0;
const MAX_ATTEMPTS = 3;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    try {
      // Verify connection is still alive
      await cachedDb.admin().ping();
      return { client: cachedClient, db: cachedDb };
    } catch (error) {
      console.log('Cached connection is stale, reconnecting...');
      cachedClient = null;
      cachedDb = null;
    }
  }

  if (connectionAttempts >= MAX_ATTEMPTS) {
    throw new Error('MongoDB connection failed after maximum retry attempts. Please check IP whitelist in MongoDB Atlas.');
  }

  connectionAttempts++;

  try {
    const client = new MongoClient(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      retryWrites: true,
      w: 'majority',
    });

    console.log('Attempting MongoDB connection...');
    await client.connect();
    
    // Test the connection
    await client.db(MONGODB_DB).admin().ping();
    
    const db = client.db(MONGODB_DB);

    cachedClient = client;
    cachedDb = db;
    connectionAttempts = 0;

    console.log('MongoDB connected successfully');
    return { client, db };
  } catch (error) {
    connectionAttempts = 0;
    console.error('MongoDB connection error:', error);
    throw new Error(
      `Failed to connect to MongoDB. Error: ${error instanceof Error ? error.message : 'Unknown error'}. ` +
      `Please ensure: 1) Your IP is whitelisted in MongoDB Atlas, 2) Connection string is correct, 3) Network connectivity.`
    );
  }
}

export function generateApplicationId(): string {
  const now = new Date();
  const year = now.getFullYear();
  const random = Math.floor(Math.random() * 100000).toString().padStart(5, '0');
  return `BWH-${year}-${random}`;
}
