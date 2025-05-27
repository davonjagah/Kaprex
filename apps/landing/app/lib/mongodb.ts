import { MongoClient } from "mongodb";

export const dbName = process.env.NEXT_PUBLIC_MONGODB_NAME!;

const uri = process.env.NEXT_PUBLIC_MONGODB_URI!;
const options = {};

declare global {
  let _mongoClientPromise: Promise<MongoClient>;
}

if (!process.env.NEXT_PUBLIC_MONGODB_URI) {
  throw new Error("Please add MONGODB_URI to .env");
}

const client = new MongoClient(uri, options);
const clientPromise = client.connect();

export default clientPromise;
