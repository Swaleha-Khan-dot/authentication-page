import axios from '../api/axios';

const registerUser = async (email, password) => {
    const response = await axios.post('http://localhost:5000/api/auth/register', { email, password });
    return response.data;
};

export default registerUser;
