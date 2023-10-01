"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCmd = void 0;
const cars_1 = __importDefault(require("../models/cars"));
const dbDisconnect_1 = require("../db/dbDisconnect");
const chalk_1 = __importDefault(require("chalk"));
const log = console.log;
const findCmd = async (onlyShowCount) => {
    try {
        const cars = await cars_1.default.find();
        log(chalk_1.default.yellow(`Found ${cars.length} cars in stock`));
        if (!onlyShowCount) {
            const filteredCars = cars.map((car) => {
                const _a = car.toObject(), { img } = _a, carDataWithoutImg = __rest(_a, ["img"]);
                return carDataWithoutImg;
            });
            log(filteredCars);
        }
    }
    catch (error) {
        error(chalk_1.default.red('Error finding data'), error);
    }
    finally {
        dbDisconnect_1.dataBaseDisconnect;
    }
};
exports.findCmd = findCmd;
//# sourceMappingURL=find.js.map