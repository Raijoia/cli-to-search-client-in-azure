#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { default: axios } = require('axios');

const argv = yargs(hideBin(process.argv)).argv;

const options = {
  method: 'GET',
  url: `https://azure-ad-tools.ai.moda/api/v1.0.0/lookup-by-tenant-id/${argv.id}`,
  headers: { 'Content-Type': 'application/json' },
};

try {
  axios
    .request(options)
    .then((response) => {
      console.log("Id do tenant: ", response.data.tenantId);
      console.log('Nome do dominio: ', response.data.defaultDomainName);
      console.log('Nome da empresa: ', response.data.displayName);
    })
} catch (error) {
  console.error(error);
  process.exit(1);
}
