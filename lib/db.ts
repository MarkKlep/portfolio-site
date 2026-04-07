export async function connectDB() {
  if ((global as any).mongoose?.conn) {
    return (global as any).mongoose.conn;
  }

  try {
    const mongoose = await import('mongoose');
    const conn = await mongoose.default.connect(process.env.MONGODB_URI || '', {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
    });

    (global as any).mongoose = { conn, promise: Promise.resolve(conn) };
    console.log('✅ MongoDB connected');
    return conn;
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    throw error;
  }
}

export default connectDB;
