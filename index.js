#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const searchTenantId = require('./utils/searchTenantId');

const argv = yargs(hideBin(process.argv)).argv;

try {
  searchTenantId(argv.id)
} catch (error) {
  console.error(error);
  process.exit(1);
}
