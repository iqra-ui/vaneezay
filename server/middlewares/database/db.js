import mongoose from "mongoose";

const connnectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/vaneezay_database", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection Succeeded".bgMagenta.black);
  } catch (error) {
    `Error in MongoDB ${error}`.red;
  }
};
export default connnectDB;
