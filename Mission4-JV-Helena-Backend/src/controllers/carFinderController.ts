import { Request, Response } from "express";
import {
  carMakeSearcher,
  carModelSearcher,
} from "../services/carFinderService";
import Cars from "../models/cars";

export const handleImage = async (req: Request, res: Response) => {
  try {
    const arrayBuffer = req.file!.buffer;
    const buffer = Buffer.from(arrayBuffer);
    const carMakePredic = await carMakeSearcher(buffer);
    const carModelPredic = await carModelSearcher(buffer);

    res.json({
      carMakePredic,
      carModelPredic,
    });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

export const matchedCars = async (req: Request, res: Response) => {
  try {
    const { make, model } = req.query;

    console.log("Received make:", make);
    console.log("Received model:", model);

    const query: any = {};
    if (make) {
      query.make = make;
    }
    if (model) {
      query.model = model;
    }

    const foundCar = await Cars.find(query);

    const carsWithBase64Images = foundCar.map((car) => {
      if (car.img) {
        const base64Image = car.img.toString("base64");
        return {
          ...car.toObject(), // Convert Mongoose document to plain JavaScript object
          img: base64Image, // Replace the image data with base64 string
        };
      }
      return car;
    });

    console.log("Found Cars with Base64 Images:", carsWithBase64Images);
    res.json({ cars: carsWithBase64Images });
  } catch (error) {
    console.error("Error in matchedCars controller:", error);
    res.status(500).json({ error: "An error occurred" });
  }
};
