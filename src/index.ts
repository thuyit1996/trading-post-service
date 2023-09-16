import bodyParser from "body-parser";
import express from "express";

import connectDB from "../config/database";
import * as dotenv from 'dotenv'
dotenv.config();

const app = express();
console.log(process.env)
// connectDB();

// Express configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// @route   GET /
// app.use("/api/profile", profile);

// @desc    Test Base API
// @access  Public
app.get("/", (_req, res) => {
  res.send("API Running");
});

// app.use("/api/auth", auth);
// app.use("/api/user", user);
// app.use("/api/profile", profile);

const port = app.get("port");
const server = app.listen(5000, () =>
  console.log(`Server started on port ${5000}`)
);

export default server;
