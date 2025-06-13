// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://food-delivery-backend-7ou6.onrender.com/api',  // backend base URL
  withCredentials: true, // for cookies / tokens if needed
});

export default axiosInstance;
