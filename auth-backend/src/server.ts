import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import config from "@config/config";

import { connect } from "@config/database";
import { authRoutes, protectedRoutes } from "@routes/routes";
import { errorHandler } from "@middlewares/error-handler";

const app = express();

const corsOptions = {
  origin: config.FRONT_BASE_URI,
  credentials: true,
  exposedHeaders: ["www-authenticate"],
};

app.use(cors(corsOptions));
app.use(cookieParser());

// Parse requests of these two data types
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connect();

const PORT: string = config.PORT;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

// Routes
app.use("/auth", authRoutes);
app.use("/protected", protectedRoutes);

app.use(errorHandler);
