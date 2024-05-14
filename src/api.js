
// src/api.js

import axios from 'axios';

const API_URL = 'http://localhost:8000';  // Update this URL if your backend is hosted elsewhere

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

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

export const initiatePayment = async (paymentData) => {
  const response = await api.post('/payments', paymentData);
  return response.data;
};

export const getPaymentStatus = async (id) => {
  const response = await api.get(`/payments/${id}`);
  return response.data;
};

export const registerUser = async (userData) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

export const loginUser = async (email, password) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};

export const logoutUser = async () => {
  const response = await api.post('/auth/logout');
  return response.data;
};

export const getUserProfile = async (email) => {
  const response = await api.get('/auth/me', { params: { email } });
  return response.data;
};
