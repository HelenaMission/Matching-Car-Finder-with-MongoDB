import Cars from "../models/cars";
import fs from "fs";
import path from "path";
import { dataBaseDisconnect } from "../db/dbDisconnect";

const log = console.log;

export const seedCmd = async () => {
  try {
    const seedingCars = [
      { make: 'BMW', model: 'convertible', img: readFile('bmw_convertible.jpeg') },
      { make: 'Audi', model: 'convertible', img: readFile('audi_convertible.jpeg') },
      { make: 'Ford', model: 'convertible', img: readFile('ford_convertible.jpg') },
      { make: 'Mazda', model: 'convertible', img: readFile('mazda_convertible.jpeg') },

      { make: 'Mazda', model: 'convertible', img: readFile('mazda_convertible1.jpeg') },
      { make: 'Mazda', model: 'convertible', img: readFile('mazda_convertible2.jpeg') },
      { make: 'Mazda', model: 'convertible', img: readFile('mazda_convertible3.jpeg') },
      { make: 'Mazda', model: 'convertible', img: readFile('mazda_convertible4.jpeg') },
      { make: 'Mazda', model: 'convertible', img: readFile('mazda_convertible5.jpeg') },
      { make: 'Mazda', model: 'convertible', img: readFile('mazda_convertible6.jpeg') },

      { make: 'Audi', model: 'hatchback', img: readFile('audi_hatchback1.jpg') },
      { make: 'Audi', model: 'hatchback', img: readFile('audi_hatchback2.jpg') },
      { make: 'Audi', model: 'hatchback', img: readFile('audi_hatchback3.jpg') },
      { make: 'Audi', model: 'hatchback', img: readFile('audi_hatchback4.jpg') },
      { make: 'Audi', model: 'hatchback', img: readFile('audi_hatchback5.jpeg') },

      { make: 'BMW', model: 'hatchback', img: readFile('bmw_hatchback1.jpg') },
      { make: 'BMW', model: 'hatchback', img: readFile('bmw_hatchback2.jpg') },
      { make: 'BMW', model: 'hatchback', img: readFile('bmw_hatchback3.jpeg') },
      { make: 'BMW', model: 'hatchback', img: readFile('bmw_hatchback4.jpeg') },
      { make: 'BMW', model: 'hatchback', img: readFile('bmw_hatchback5.jpg') },
      { make: 'BMW', model: 'hatchback', img: readFile('bmw_hatchback6.jpg') },

      { make: 'Ford', model: 'hatchback', img: readFile('ford_hatchback1.jpeg') },
      { make: 'Ford', model: 'hatchback', img: readFile('ford_hatchback2.jpg') },
      { make: 'Ford', model: 'hatchback', img: readFile('ford_hatchback3.jpg') },
      { make: 'Ford', model: 'hatchback', img: readFile('ford_hatchback4.jpeg') },
      { make: 'Ford', model: 'hatchback', img: readFile('ford_hatchback5.jpeg') },
      { make: 'Ford', model: 'hatchback', img: readFile('ford_hatchback6.jpg') },
      { make: 'Ford', model: 'hatchback', img: readFile('ford_hatchback7.jpeg') },
      { make: 'Ford', model: 'hatchback', img: readFile('ford_hatchback8.jpeg') },
      { make: 'Ford', model: 'hatchback', img: readFile('ford_hatchback9.jpeg') },
      { make: 'Ford', model: 'hatchback', img: readFile('ford_hatchback10.jpeg') },
      { make: 'Ford', model: 'hatchback', img: readFile('ford_hatchback11.jpg') },
      { make: 'Ford', model: 'hatchback', img: readFile('ford_hatchback12.jpeg') },

      { make: 'Mazda', model: 'hatchback', img: readFile('mazda_hatchback1.jpg') },
      { make: 'Mazda', model: 'hatchback', img: readFile('mazda_hatchback2.jpg') },
      { make: 'Mazda', model: 'hatchback', img: readFile('mazda_hatchback3.jpg') },
      { make: 'Mazda', model: 'hatchback', img: readFile('mazda_hatchback4.jpg') },

      { make: 'Audi', model: 'sedan', img: readFile('audi_sedan1.jpeg') },
      { make: 'Audi', model: 'sedan', img: readFile('audi_sedan2.jpeg') },
      { make: 'Audi', model: 'sedan', img: readFile('audi_sedan3.jpeg') },
      { make: 'Audi', model: 'sedan', img: readFile('audi_sedan4.jpg') },
      { make: 'Audi', model: 'sedan', img: readFile('audi_sedan5.jpeg') },

      { make: 'BMW', model: 'sedan', img: readFile('bmw_sedan1.jpeg') },
      { make: 'BMW', model: 'sedan', img: readFile('bmw_sedan2.jpeg') },
      { make: 'BMW', model: 'sedan', img: readFile('bmw_sedan3.jpeg') },

      { make: 'Ford', model: 'sedan', img: readFile('ford_sedan1.jpeg') },
      { make: 'Ford', model: 'sedan', img: readFile('ford_sedan2.jpeg') },
      { make: 'Ford', model: 'sedan', img: readFile('ford_sedan3.jpeg') },
      { make: 'Ford', model: 'sedan', img: readFile('ford_sedan4.jpeg') },
      { make: 'Ford', model: 'sedan', img: readFile('ford_sedan5.jpeg') },

      { make: 'Mazda', model: 'sedan', img: readFile('mazda_sedan1.jpeg') },
      { make: 'Mazda', model: 'sedan', img: readFile('mazda_sedan2.jpeg') },
      { make: 'Mazda', model: 'sedan', img: readFile('mazda_sedan3.jpeg') },
      { make: 'Mazda', model: 'sedan', img: readFile('mazda_sedan4.jpeg') },

      { make: 'Audi', model: 'suv', img: readFile('audi_suv1.jpeg') },
      { make: 'Audi', model: 'suv', img: readFile('audi_suv2.jpeg') },
      { make: 'Audi', model: 'suv', img: readFile('audi_suv3.jpeg') },

      { make: 'BMW', model: 'suv', img: readFile('bmw_suv1.jpeg') },
      { make: 'BMW', model: 'suv', img: readFile('bmw_suv2.jpeg') },
      { make: 'BMW', model: 'suv', img: readFile('bmw_suv3.jpeg') },
      { make: 'BMW', model: 'suv', img: readFile('bmw_suv4.jpg') },

      { make: 'Ford', model: 'suv', img: readFile('ford_suv1.jpeg') },
      { make: 'Ford', model: 'suv', img: readFile('ford_suv2.jpg') },
      { make: 'Ford', model: 'suv', img: readFile('ford_suv3.jpeg') },
      { make: 'Ford', model: 'suv', img: readFile('ford_suv4.jpeg') },
      { make: 'Ford', model: 'suv', img: readFile('ford_suv5.jpeg') },

      { make: 'Mazda', model: 'suv', img: readFile('mazda_suv1.jpeg') },
      { make: 'Mazda', model: 'suv', img: readFile('mazda_suv2.jpeg') },
      { make: 'Mazda', model: 'suv', img: readFile('mazda_suv3.jpeg') },
      { make: 'Mazda', model: 'suv', img: readFile('mazda_suv4.jpeg') },
    ];
    await Cars.insertMany(seedingCars);
    log("Seeded done");
  } catch (error) {
    console.error("Error seeding data", error);
  } finally {
    dataBaseDisconnect;
  }
};

function readFile(file: string) {
  const imagesDir = path.join(__dirname, "..", "images");
  const filePath = path.join(imagesDir, file);
  return fs.readFileSync(filePath);
}
