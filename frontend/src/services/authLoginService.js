import axios from '../api/axios';

const API_URL = import.meta.env.VITE_API_URL;

const loginUser = async (email, password) => {
    const response = await axios.post(`${API_URL}/api/auth/login`, { email, password });
    return response.data;
};

export default loginUser;




