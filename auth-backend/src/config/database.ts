import mongoose from "mongoose";
import config from "@config/config";

const uri: string = config.MONGO_URI;

const connect = async () => {
  try {
    // Establish connection to the db
    await mongoose.connect(uri, {} as mongoose.ConnectOptions);

    console.log("Connected to MongoDB...");
  } catch (error) {
    let message = "Unknown error";

    if (error instanceof Error) {
      message = error.message;
    }

    // Stringify the error so that it can be displayed
    else message = String(error);

    console.error(message);
    process.exit(1);
  }
};

export { connect };
