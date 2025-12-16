const mongoose = require('mongoose');

let isConnected = false;

async function connectToMongoDB() {
  if (isConnected) return;

  const MONGO_URL =
    process.env.MONGO_URL || 'mongodb://10.12.13.100:27017/nodeDB';

  try {
    await mongoose.connect(MONGO_URL);
    isConnected = true;
    console.log('Connected to MongoDB:', MONGO_URL);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
}

module.exports = { connectToMongoDB };
