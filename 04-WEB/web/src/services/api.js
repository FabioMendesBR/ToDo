import axios from 'axios';


const api = axios.create({
    //baseURl : 'http://localhost:3333'
    url : 'http://localhost:3333'
});

export default api;