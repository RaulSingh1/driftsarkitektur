// handlers/mongo-db.js
const mongoose = require('mongoose');

let isConnected = false;

async function connectToMongoDB() {
  if (isConnected) return;

  try {
    const MONGO_URL =
      process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/nodeDB';

    await mongoose.connect(MONGO_URL);

    isConnected = true;
    console.log('Connected to MongoDB:', MONGO_URL);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
}

module.exports = { connectToMongoDB };
