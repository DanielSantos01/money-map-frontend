import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.35:8080'
  // deployURL: ''
});

export default api;
