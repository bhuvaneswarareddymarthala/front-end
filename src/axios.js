import axios from 'axios';
const instance = axios.create({
    baseURL: "https://msit-conn.herokuapp.com/"
});

export default instance;