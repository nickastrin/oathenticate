import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import config from './config/config';
import { connect } from './config/database';
import { errorHandler } from '@middlewares/error-handler';

const app = express();

const corsOptions = {
  origin: config.FRONT_BASE_URI,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());

// Parse requests of these two data types
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connect();

app.use(errorHandler);
