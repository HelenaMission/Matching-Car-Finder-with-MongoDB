import express from "express";
import { handleImage, matchedCars } from '../controllers/carFinderController';
import multer from "multer";

const carFinderRouter = express.Router();
const upload = multer();

carFinderRouter.post("/car_Finder", upload.single("image"), handleImage);
carFinderRouter.get("/car_Matcher", matchedCars)


export default carFinderRouter;
