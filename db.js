import mongoose from 'mongoose';
import { config } from "dotenv";

config();
const { MONGODB_URL } = process.env; 

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    // Log detailed error information instead of abrupt termination
    console.error("Database connection error details:", err.message);
    
    // Emit an unhandled error event instead of directly calling process.exit
    // This allows for proper error handling elsewhere in the application
    process.emit('uncaughtException', err);
  });