import express from "express";
import { createOrUpdateProfile, getMyProfile } from "../controllers/profileController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";

const profileRouter = express.Router();

profileRouter.post(
  "/",
  authMiddleware,
  upload.single("profileImage"),
  createOrUpdateProfile
);

profileRouter.get("/me", authMiddleware, getMyProfile);

export default profileRouter;
