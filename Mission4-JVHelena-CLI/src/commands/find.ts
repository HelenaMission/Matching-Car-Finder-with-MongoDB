import Cars from '../models/cars';
import { dataBaseDisconnect } from '../db/dbDisconnect';
import chalk from 'chalk'

const log = console.log;

export const findCmd = async (onlyShowCount:boolean) => {
  try {
    const cars = await Cars.find();
    log(chalk.yellow(`Found ${cars.length} cars in stock`));
    if (!onlyShowCount) {
      const filteredCars = cars.map((car) => {
        const { img, ...carDataWithoutImg } = car.toObject()
        return carDataWithoutImg
      })
      log(filteredCars)
    }
  } catch (error) {
    error(chalk.red('Error finding data'), error);
  } finally {
    dataBaseDisconnect;
  }
};
