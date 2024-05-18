// src/api.js

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';  // Use environment variable or default to localhost with /api prefix

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

// Services, Trainers, and Other Endpoints
// Add similar functions here for managing services, trainers, etc.
