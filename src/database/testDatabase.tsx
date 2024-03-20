"use server"

import { connectDatabase, getDatabase, disconnectDatabase } from './db';

async function testDatabaseConnection() {
  try {
    // 连接数据库
    console.log("进入测试");
    await connectDatabase();

    // 获取数据库实例
    const db = getDatabase();

    // 检验数据库是否连接成功，例如：插入一条记录并查询
    const collection = db.collection('testCollection');
    await collection.insertOne({ test: 'value' });
    const result = await collection.findOne({ test: 'value' });
    console.log('Database access successful:', result);
    
    // 关闭数据库连接
    await disconnectDatabase();
  } catch (error) {
    console.error('Failed to connect to database:', error);
  }
}

export default testDatabaseConnection;