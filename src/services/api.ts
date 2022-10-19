import axios from 'axios';

const api = axios.create({
  baseURL: 'https://38b3-150-161-2-200.sa.ngrok.io/'
  // deployURL: ''
});

export default api;
