import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `https://medis-api.capdev.idbrilian.com`,
  headers: {
    Authorization: 'Bearer {token}',
  },
});
