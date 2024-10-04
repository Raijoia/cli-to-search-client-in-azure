const { default: axios } = require('axios');
const searchTenantId = require('./searchTenantId');

module.exports = function searchTenantDomain(domain) {
    const options = {
        method: 'GET',
        url: `https://login.microsoftonline.com/${domain}/.well-known/openid-configuration`,
        headers: { 'Content-Type': 'application/json' },
    };

    axios
    .request(options)
    .then((response) => {
      let regex = /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/
      let tenantId = response.data.token_endpoint.match(regex)[0]
      console.log(`Tenant com dominio ${domain} existente`)
      searchTenantId(tenantId)
    })
    .catch((error) => {
      let regex = /Tenant '([^']+)' not found/
      console.log("Tenant não encontrado no dominio", error.response.data.error_description.match(regex)[1])
    })
}