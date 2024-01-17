import { clientCredentials } from '../client';

const getCompanyCards = (uid = '') => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/companies`, {
    method: 'GET',
    headers: {
      Authorization: uid,
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getCompanyCardById = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/companies/${id}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createCompanyCard = (companies) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/companies`, {
    method: 'POST',
    body: JSON.stringify(companies),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((resp) => resolve(resp.json()))
    .catch((error) => reject(error));
});

const updateCompanyCard = (company) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/companies/${company.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(company),
  })
    .then((response) => resolve(response.data))
    .catch(reject);
});

const deleteCompanyCard = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/companies/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export {
  deleteCompanyCard,
  updateCompanyCard,
  createCompanyCard,
  getCompanyCardById,
  getCompanyCards,
};
