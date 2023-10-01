import express from "express";
import bodyParser from "body-parser";
import carFinderRouter from "./routes/carFinderRoutes";
const cors = require("cors");
import { dataBaseConnect } from "./db/dbConnect";

//Enable express
const app = express();

//env file
require("dotenv").config();

// Middlewares
app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());

dataBaseConnect()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use("/", carFinderRouter);


