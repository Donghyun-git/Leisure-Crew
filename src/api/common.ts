import axios from 'axios';

const baseURL = import.meta.env.API_URL;

export const apiFetch = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiFetch.interceptors.request.use((config) => {
  return config;
});
