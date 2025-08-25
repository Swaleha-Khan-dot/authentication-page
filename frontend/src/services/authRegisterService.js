import axios from '../api/axios';

const API_URL = import.meta.env.VITE_API_URL;

const registerUser = async (email, password) => {
    const response = await axios.post(`${API_URL}/api/auth/register`, { email, password });
    return response.data;
};

export default registerUser;
