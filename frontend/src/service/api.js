import axios from 'axios';

export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/upload`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling the API', error.message);
    }
}
