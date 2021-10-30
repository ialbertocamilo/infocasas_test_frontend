import axios from 'axios'


const axiosService = axios.create({
    baseURL: 'http://localhost/api',
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export {axiosService}
