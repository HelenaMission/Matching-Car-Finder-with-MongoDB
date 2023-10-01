"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataBaseDisconnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dataBaseDisconnect = () => mongoose_1.default.disconnect();
exports.dataBaseDisconnect = dataBaseDisconnect;
//# sourceMappingURL=dbDisconnect.js.map