import express from "express";
import {
  createOrUpdateProfile,
  getMyProfile,
  listProfiles,
  singleProfile,
} from "../controllers/profileController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";

const profileRouter = express.Router();

// Create / Update Profile
profileRouter.post( "/",
  authMiddleware,
  upload.single("profileImage"),
  createOrUpdateProfile
);

// Logged-in user profile
profileRouter.get("/me",authMiddleware , getMyProfile);

// All profiles (listing page)
profileRouter.get("/list", listProfiles);

// Single profile (detail page)
profileRouter.get("/:id", singleProfile);

export default profileRouter;
