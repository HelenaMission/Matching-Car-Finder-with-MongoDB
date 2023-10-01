"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCmd = void 0;
const cars_1 = __importDefault(require("../models/cars"));
const dbDisconnect_1 = require("../db/dbDisconnect");
const log = console.log;
const deleteCmd = async () => {
    try {
        await cars_1.default.deleteMany({});
        log("Deleted done");
    }
    catch (error) {
        error("Error deleting data", error);
    }
    finally {
        dbDisconnect_1.dataBaseDisconnect;
    }
};
exports.deleteCmd = deleteCmd;
//# sourceMappingURL=delete.js.map