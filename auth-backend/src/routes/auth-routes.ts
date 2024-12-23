import express from "express";
import { Token, User } from "@models/models";
import { TokenService } from "@services/token-service";
import { AuthenticationService } from "@services/auth-service";
import { TokenController } from "@controllers/token-controller";
import { AuthenticationController } from "@controllers/auth-controller";

const router = express.Router();

const tokenService = new TokenService(Token);
const authenticationService = new AuthenticationService(User, tokenService);

const tokenController = new TokenController(tokenService);
const authenticationController = new AuthenticationController(
  authenticationService,
);

router.post("/login", authenticationController.authenticate);
router.post("/logout", authenticationController.logout);
router.post("/register", authenticationController.register);

router.get("/renewal", tokenController.renewToken);

export default router;
