import mongoose from "mongoose";

const Connection = async () => {
  const URL = process.env.MONGODB_URI;

  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("Error:", error.message);
  }
};

export default Connection;
