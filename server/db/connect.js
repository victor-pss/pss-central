require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION, { dbName: 'Central' });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;

//const { warn } = require('console');
//const { MongoClient, ServerApiVersion } = require('mongodb');
//const uri = process.env.MONGODB_CONNECTION;
//
//const client = new MongoClient(uri, {
//  serverApi: {
//    version: ServerApiVersion.v1,
//    strict: true,
//    deprecationErrors: true,
//  }
//});
//
//async function run() {
//  try {
//    // connect the client to the server 
//    await client.connect();
//    // send a ping to confirm a successful connection 
//    await client.db('admin').command({ ping: 1 });
//    console.log('Pinged your deployment. You successfully connected to MongoDB!');
//  } finally {
//    // ensure that the client will close when you finish/error 
//    await client.close();
//  }
//}
//
//run().catch(console.dir);
