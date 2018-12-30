import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-fb6a6.firebaseio.com/'
});

export default instance;