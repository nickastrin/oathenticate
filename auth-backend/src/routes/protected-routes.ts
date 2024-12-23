import express from "express";
import { verifyAuthentication } from "../middlewares/verify-authentication";

const router = express.Router();

router.get("/", verifyAuthentication, (_, res) => {
  res.send("Protected route accessed successfully!");
});

export default router;
