import express from "express";
import { createOrUpdateProfile, getMyProfile } from "../controllers/profileController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const profileRouter = express.Router();

profileRouter.post("/", authMiddleware, createOrUpdateProfile);
profileRouter.get("/me", authMiddleware, getMyProfile);

export default profileRouter;
