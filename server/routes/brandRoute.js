import express from "express";
import {
  getBrands,
  getOneBrand,
  createOrUpdateProfile,
  getMyBrandProfile,
} from "../controllers/brandController.js";

import Brand from "../models/brandModel.js";


import upload from "../middleware/upload.js";
import brandAuth from "../middleware/brandAuth.js";

const brandRouter = express.Router();

// Get my brand
brandRouter.get("/me", brandAuth, getMyBrandProfile);

// Create / Update profile
brandRouter.post(
  "/",
  brandAuth,
  upload.single("logo"),
  createOrUpdateProfile
);

// All profiles
brandRouter.get("/list", getBrands);

// Single profile
brandRouter.get("/:id", getOneBrand);

export default brandRouter;
