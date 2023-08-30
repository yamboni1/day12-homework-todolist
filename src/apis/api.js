import axios from "axios";

const api = axios.create({
    baseURL: 'https://64edf7ca1f872182714219ea.mockapi.io/api/v1/'
});
export default api;