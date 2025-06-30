// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://food-delivery-backend-7ou6.onrender.com',  // backend base URL
  withCredentials: true, 
});

export default axiosInstance;
