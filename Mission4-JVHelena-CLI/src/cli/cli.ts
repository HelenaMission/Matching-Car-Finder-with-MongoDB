#!/usr/bin/env node

import commander from 'commander';
import { dataBaseConnect } from '../db/dbConnect';
import { seedCmd } from '../commands/seed';
import { deleteCmd } from '../commands/delete';
import { findCmd } from '../commands/find';

const program = new commander.Command();

dataBaseConnect();

program.command('seed').description('seed data').action(seedCmd);

program.command('delete').description('delete data').action(deleteCmd);

program
  .command('find')
  .description('find data')
  .option('-c, --count', 'Only get the count. If not specified it will show all data.')
  .action((options) => findCmd(options.count));

program.parseAsync(process.argv);
