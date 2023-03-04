import axios from 'axios';

const MoonApi = axios.create({
  baseURL: 'https://www.moonbank.somee.com/api',
});

export default MoonApi;
