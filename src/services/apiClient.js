import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://lobster-app-ddwng.ondigitalocean.app';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    api_key: API_KEY,
    'Content-Type': 'application/json',
  },
});

// apiClient.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${API_KEY}`;
//   config.headers['Content-Type'] = 'application/json';
//   return config;
// });

// apiClient.interceptors.response.use(
//   (response) => response,
//   (err) => {
//     return Promise.reject(err);
//   }
// );
