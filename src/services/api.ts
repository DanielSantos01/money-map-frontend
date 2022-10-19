import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.22.72.43:8080'
  // deployURL: ''
});

export default api;
