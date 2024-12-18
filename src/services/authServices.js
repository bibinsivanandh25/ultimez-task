import { apiClient } from './apiClient';

// const register = async (data) => {
//   try {
//     const res = await apiClient.post('/user/register', data);
//     return res.data;
//   } catch (err) {
//     console.log('Registration Failed', err.response?.data || err.message);
//     throw err;
//   }
// };

// const login = async (data) => {
//   try {
//     const res = await apiClient.post('/user/login', data);
//     return res.data;
//   } catch (err) {
//     console.log('Login Failed', err.response?.data || err.message);
//     throw err;
//   }
// };

// export const authServices = { register, login };

export const loginUser = (data) => apiClient.post('/user/login', data);

export const registerUser = (data) => apiClient.post('/user/register', data);
