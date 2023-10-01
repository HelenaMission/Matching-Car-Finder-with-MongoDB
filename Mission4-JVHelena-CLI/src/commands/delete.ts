import Cars from '../models/cars';
import { dataBaseDisconnect } from '../db/dbDisconnect';

const log = console.log;

export const deleteCmd = async () => {
  try {
    await Cars.deleteMany({});
    log("Deleted done")
  } catch (error) {
    error("Error deleting data", error);
  } finally {
    dataBaseDisconnect
    }
  }