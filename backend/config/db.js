import "dotenv/config";
import mongoose from "mongoose";

const { MONGO_URL } = process.env;

export const connectDb = async () => {
    try {
       await mongoose.connect(MONGO_URL);
        console.log("DB connected successfully")
    } catch (error) {
        console.log("Error in DB connection", error)
    }

}