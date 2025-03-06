import axios from 'axios';

const API_BASE_URL = 'https://be.anaqa.sa/api'; 

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAllSalons = async () => {
  try {
    const response = await api.get('/admin/salon/getSalons');
    return response.data;
  } catch (error) {
    console.error('Error fetching salons:', error);
    throw error;
  }
};

export const addSalon = async (salonData) => {
  try {
    const response = await api.post('/admin/salon/addSalon', salonData);
    return response.data;
  } catch (error) {
    console.error('Error adding salon:', error);
    throw error;
  }
};