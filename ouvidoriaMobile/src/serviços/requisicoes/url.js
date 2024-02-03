import axios from "axios";

const api = axios.create({
    baseURL: 'http://172.212.82.248/api'
});

export default api;