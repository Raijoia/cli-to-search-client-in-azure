#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const searchTenantDomain = require('./utils/searchTenantDomain');

const argv = yargs(hideBin(process.argv)).argv;

try {
  searchTenantDomain(argv.domain)
} catch (error) {
  console.log("Tenant não encontrado")
}
