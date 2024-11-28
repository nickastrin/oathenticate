// Code adjusted from: https://github.com/sunilksamanta/node-mongoose-setup/tree/master
// TODO: Check if a getter is a better way of approaching this problem

import dotenv from "dotenv";

// Determine the environment (dev by default)
const environment: string = process.env.NODE_ENV ?? "development";

// Load the correct .env file
if (environment === "development") {
  dotenv.config({ path: ".env.development" });
} else {
  dotenv.config();
}

interface IConfig {
  PORT: string;
  MONGO_URI: string;
  JWT_SECRET: string;
  REFRESH_SECRET: string;
  FRONT_BASE_URI: string;
}

const config: IConfig = {
  PORT: process.env.PORT ?? "5000",
  MONGO_URI: process.env.MONGO_URI ?? "",
  JWT_SECRET: process.env.JWT_SECRET ?? "R4ND0MP4SSW0RD",
  REFRESH_SECRET: process.env.REFRESH_SECRET ?? "R4ND0MP4SSW0RD",
  FRONT_BASE_URI: process.env.FRONT_BASE_URI ?? "http://localhost:3000",
};

export default config;
