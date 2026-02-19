import express from "express";
import {
  createOrUpdateProfile,
  getMyProfile,
  listProfiles,
  singleProfile,
} from "../controllers/creatorController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";

const creatorRouter = express.Router();

// Create / Update Profile
creatorRouter.post( "/",
  authMiddleware,
  upload.single("profileImage"),
  createOrUpdateProfile
);

// Logged-in user profile
creatorRouter.get("/me",authMiddleware , getMyProfile);

// All profiles (listing page)
creatorRouter.get("/list", listProfiles);

// Single profile (detail page)
creatorRouter.get("/:id", singleProfile);

export default creatorRouter;
