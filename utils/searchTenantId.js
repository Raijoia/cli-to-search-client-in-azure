const { default: axios } = require("axios");

module.exports = function searchTenantId(id) {
    const options = {
      method: 'GET',
      url: `https://azure-ad-tools.ai.moda/api/v1.0.0/lookup-by-tenant-id/${id}`,
      headers: { 'Content-Type': 'application/json' },
    };
  
    axios
      .request(options)
      .then((response) => {
        console.log("Id do tenant:", response.data.tenantId);
        console.log('Nome do dominio:', response.data.defaultDomainName);
        console.log('Nome da empresa:', response.data.displayName);
      })
      .catch((error) => {
        console.log(error)
      })
  }