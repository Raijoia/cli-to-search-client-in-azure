#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { default: axios } = require('axios');

const argv = yargs(hideBin(process.argv)).argv;

const options = {
  method: 'GET',
  url: `https://login.microsoftonline.com/${argv.domain}/.well-known/openid-configuration`,
  headers: { 'Content-Type': 'application/json' },
};

try {
  axios
    .request(options)
    .then((response) => {
      let regex = /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/
      console.log("Tenant existente com id:", response.data.token_endpoint.match(regex)[0])
    })
    .catch((error) => {
      let regex = /Tenant '([^']+)' not found/
      console.log("Tenant não encontrado no dominio", error.response.data.error_description.match(regex)[1])
    })
} catch (error) {
  console.log("Tenant não encontrado")
}
