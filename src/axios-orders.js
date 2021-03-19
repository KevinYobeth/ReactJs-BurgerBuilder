import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://udemy-react-myburger-course-default-rtdb.firebaseio.com/'
});

export default instance;