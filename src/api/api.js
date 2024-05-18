import axios from 'axios';

// Use environment variable or default to localhost with /api prefix
// eslint-disable-next-line no-undef
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// Bookings
export const fetchBookings = async () => {
  const response = await api.get('/bookings');
  return response.data;
};

export const createBooking = async (bookingData) => {
  const response = await api.post('/bookings', bookingData);
  return response.data;
};

export const updateBooking = async (id, bookingData) => {
  const response = await api.put(`/bookings/${id}`, bookingData);
  return response.data;
};

export const deleteBooking = async (id) => {
  const response = await api.delete(`/bookings/${id}`);
  return response.data;
};

// Payments
export const initiatePayment = async (paymentData) => {
  const response = await api.post('/payments', paymentData);
  return response.data;
};

export const getPaymentStatus = async (id) => {
  const response = await api.get(`/payments/${id}`);
  return response.data;
};

// Authentication and User Management
export const registerUser = async (userData) => {
  const response = await api.post('/users', userData);
  return response.data;
};

export const loginUser = async (username, password) => {
  const response = await api.post('/users/login', { username, password });
  return response.data;
};

export const logoutUser = async () => {
  const response = await api.post('/auth/logout');
  return response.data;
};

export const getUserProfile = async () => {
  const token = localStorage.getItem('token');
  const response = await api.get('/users/me', {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

// Services
export const fetchServices = async () => {
  const response = await api.get('/services');
  return response.data;
};

export const createService = async (serviceData) => {
  const response = await api.post('/services', serviceData);
  return response.data;
};

export const updateService = async (id, serviceData) => {
  const response = await api.put(`/services/${id}`, serviceData);
  return response.data;
};

export const deleteService = async (id) => {
  const response = await api.delete(`/services/${id}`);
  return response.data;
};

// Trainers
export const fetchTrainers = async () => {
  const response = await api.get('/trainers');
  return response.data;
};

export const createTrainer = async (trainerData) => {
  const response = await api.post('/trainers', trainerData);
  return response.data;
};

export const updateTrainer = async (id, trainerData) => {
  const response = await api.put(`/trainers/${id}`, trainerData);
  return response.data;
};

export const deleteTrainer = async (id) => {
  const response = await api.delete(`/trainers/${id}`);
  return response.data;
};

// Feedback
export const submitFeedback = async (feedbackData) => {
  const response = await api.post('/feedback', feedbackData);
  return response.data;
};

export const fetchFeedback = async () => {
  const response = await api.get('/feedback');
  return response.data;
};

// Queries
export const submitQuery = async (queryData) => {
  const response = await api.post('/queries', queryData);
  return response.data;
};

export const fetchQueries = async () => {
  const response = await api.get('/queries');
  return response.data;
};
