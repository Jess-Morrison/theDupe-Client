import { clientCredentials } from '../client';

const getPaymentTypeById = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/payments/${id}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {getPaymentTypeById};
