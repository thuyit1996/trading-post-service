import { connect } from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI: string = process.env.MONGO_URI || 'mongodb+srv://vuthuycntt1996:vuthuy1212@cluster0.wo0g2bb.mongodb.net/?retryWrites=true&w=majority'
    await connect(mongoURI);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;
