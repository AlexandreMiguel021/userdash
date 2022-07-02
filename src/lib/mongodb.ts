import { MongoClient, Db, ObjectId } from 'mongodb'

const uri = process.env.MONGODB_URI
const dbName = process.env.MONGODB_DB

let cachedClient: MongoClient
let cachedDb: Db

if (!uri) {
	throw new Error('Please add your Mongo URI to .env.local')
}

if (!dbName) {
	throw new Error('Please add your Mongo name to .env.local')
}

export default async function connectToDatabase() {
	if (cachedClient && cachedDb) {
		return { client: cachedClient, db: cachedDb }
	}

	const client = await MongoClient.connect(uri)

	const db = client.db(dbName)

	cachedClient = client
	cachedDb = db

	return { client, db, ObjectId }
}
