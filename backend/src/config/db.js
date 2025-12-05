import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("CONNECTED SUCCESSFULY TO MONGODB");
  } catch (error) {
    console.error("Error to connect to MONGOBD", error);
    process.exit(1);
  }
};
