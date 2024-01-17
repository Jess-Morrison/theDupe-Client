import { clientCredentials } from '../client';

const getDupeCards = (uid = '') => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/dupes`, {
    method: 'GET',
    headers: {
      Authorization: uid,
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getDupeCardById = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/dupes/${id}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createDupeCard = (dupe) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/dupes`, {
    method: 'POST',
    body: JSON.stringify(dupe),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((resp) => resolve(resp.json()))
    .catch((error) => reject(error));
});

const updateDupeCard = (dupe) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/dupes/${dupe.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dupe),
  })
    .then((response) => resolve(response.data))
    .catch(reject);
});

const deleteDupeCard = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/dupes/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export {
  deleteDupeCard,
  updateDupeCard,
  createDupeCard,
  getDupeCardById,
  getDupeCards,
};
