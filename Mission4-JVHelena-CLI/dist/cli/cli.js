#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const dbConnect_1 = require("../db/dbConnect");
const seed_1 = require("../commands/seed");
const delete_1 = require("../commands/delete");
const find_1 = require("../commands/find");
const program = new commander_1.default.Command();
(0, dbConnect_1.dataBaseConnect)();
program.command('seed').description('seed data').action(seed_1.seedCmd);
program.command('delete').description('delete data').action(delete_1.deleteCmd);
program
    .command('find')
    .description('find data')
    .option('-c, --count', 'Only get the count. If not specified it will show all data.')
    .action((options) => (0, find_1.findCmd)(options.count));
program.parseAsync(process.argv);
//# sourceMappingURL=cli.js.map