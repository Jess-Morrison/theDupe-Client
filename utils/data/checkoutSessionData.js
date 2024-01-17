import { clientCredentials } from '../client';

const getCheckoutSessionById = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/checkout_session/${id}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getCheckoutSessionStatus = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/checkout_session/${id}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getCheckoutSessionByUser = (uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/checkout_session?uid=${uid}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createCheckoutSession = (checkoutSession) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/checkout_sessions`, {
    method: 'POST',
    body: JSON.stringify(checkoutSession),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((resp) => resolve(resp.json()))
    .catch((error) => reject(error));
});

export {
  getCheckoutSessionById,
  getCheckoutSessionStatus,
  getCheckoutSessionByUser,
  createCheckoutSession,
};
