import axios from 'axios';

export default axios.create({
    baseURL:'https://e2d0-2603-7081-4b3c-c7ff-d5f5-e37c-fed2-57e0.ngrok-free.app/',
    headers: {"ngrok-skip-browser-warning": "true"}
})