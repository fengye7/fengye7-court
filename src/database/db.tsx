import { MongoClient, Db } from 'mongodb';

let client: MongoClient;
let db: Db;

export async function connectDatabase() {
    if (!client) {
        const url = "mongodb://user1:123456@localhost:27017/"; // MongoDB 连接字符串
        const dbName = process.env.MONGODB_DBNAME || 'fengye7CourtDB'; // 数据库名称
        const username = process.env.MONGODB_USERNAME || 'fengye7'; // 用户名
        const password = process.env.MONGODB_PASSWORD || '135790zcjZCJ'; // 密码
    
        client = new MongoClient(url);
        try {
            await client.connect();
            db = client.db(dbName);
            console.log('Connected to MongoDB successfully.');
          } catch (error) {
            console.error('Failed to connect to MongoDB:', error);
          }
      }
}

export function getDatabase() {
  if (!db) {
    throw new Error('Database not initialized');
  }
  return db;
}

export async function disconnectDatabase() {
    try {
      if (client) {
        await client.close();
        console.log('Disconnected from database.');
      }
    } catch (error) {
      console.error('Failed to disconnect from database:', error);
    }
  }