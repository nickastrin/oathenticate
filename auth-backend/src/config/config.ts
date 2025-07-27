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

interface Config {
  PORT: string;
  MONGO_URI: string;
  JWT_SECRET: string;
  JWT_EXPIRATION: number;
  REFRESH_SECRET: string;
  REFRESH_EXPIRATION: number;
  FRONT_BASE_URI: string;
}

const config: Config = {
  PORT: process.env.PORT ?? "5000",
  MONGO_URI: process.env.MONGO_URI ?? "",
  JWT_SECRET: process.env.JWT_SECRET ?? "R4ND0MP4SSW0RD",
  JWT_EXPIRATION: parseInt(process.env.JWT_EXPIRATION ?? "5"),
  REFRESH_SECRET: process.env.REFRESH_SECRET ?? "R4ND0MP4SSW0RD",
  REFRESH_EXPIRATION: parseInt(process.env.REFRESH_EXPIRATION ?? "15"),
  FRONT_BASE_URI: process.env.FRONT_BASE_URI ?? "http://localhost:3000",
};

export default config;
