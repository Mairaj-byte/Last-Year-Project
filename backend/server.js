import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import "./config/cloudinary.js";

import userRouter from "./routes/userRoute.js";
import profileRouter from "./routes/profileRoute.js";

const app = express();
const port = process.env.PORT || 4000;

// Database
connectDB();

// Middlewares
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/user", userRouter);
app.use("/api/profile", profileRouter);

app.get("/", (req, res) => {
  res.send("API Working 🚀");
});

app.listen(port, () => {
  console.log(`Server started on PORT : ${port}`);
});
