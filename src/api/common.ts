import axios from 'axios';

const baseURL = import.meta.env.VITE_APP_API_URL;

export const apiFetch = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiFetch.interceptors.request.use((config) => {
  console.log('baseurl', baseURL);
  console.log(config);
  return config;
});
