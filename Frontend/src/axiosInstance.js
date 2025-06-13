// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api',  // backend base URL
  withCredentials: true, // for cookies / tokens if needed
});

export default axiosInstance;
