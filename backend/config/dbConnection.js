import mongoose from 'mongoose';

const dbConnection = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGODB_COMPASS || process.env.MONGODB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log(`Connected to mongodb: ${conn.connection.host}`);
  } catch (error) {
    console.log('mongoError', error.message);
  }
};

export default dbConnection;
