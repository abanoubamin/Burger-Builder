import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-85d72-default-rtdb.firebaseio.com/'
});

export default instance;