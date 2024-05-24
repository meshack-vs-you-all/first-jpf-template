import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

// Use environment variable or default to localhost with /api prefix
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// Interceptor to include JWT token in headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Bookings
export const fetchBookings = async () => {
  try {
    const response = await api.get('/bookings');
    return response.data;
  } catch (error) {
    console.error('Error fetching bookings:', error);
    throw error;
  }
};

export const createBooking = async (bookingData) => {
  try {
    const response = await api.post('/bookings', bookingData);
    return response.data;
  } catch (error) {
    console.error('Error creating booking:', error);
    throw error;
  }
};

export const updateBooking = async (id, bookingData) => {
  try {
    const response = await api.put(`/bookings/${id}`, bookingData);
    return response.data;
  } catch (error) {
    console.error('Error updating booking:', error);
    throw error;
  }
};

export const deleteBooking = async (id) => {
  try {
    const response = await api.delete(`/bookings/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting booking:', error);
    throw error;
  }
};

// Payments
export const initiatePayment = async (paymentData) => {
  try {
    const response = await api.post('/payments', paymentData);
    return response.data;
  } catch (error) {
    console.error('Error initiating payment:', error);
    throw error;
  }
};

export const getPaymentStatus = async (id) => {
  try {
    const response = await api.get(`/payments/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching payment status:', error);
    throw error;
  }
};

// Authentication and User Management
export const loginUser = async (credentials) => {
  try {
    const formData = new URLSearchParams();
    formData.append('username', credentials.username);
    formData.append('password', credentials.password);

    const response = await api.post('/users/login', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    // Store token and role in local storage
    const token = response.data.access_token;
    localStorage.setItem('token', token);

    // Decode JWT to extract role
    const decodedToken = jwtDecode(token);
    localStorage.setItem('role', decodedToken.role);

    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const signupUser = async (data) => {
  try {
    const response = await api.post('/users/register', data);
    return response.data;
  } catch (error) {
    console.error('Signup error:', error);
    throw error;
  }
};

export const fetchCurrentUser = async () => {
  try {
    const response = await api.get('/users/me');
    return response.data;
  } catch (error) {
    console.error('Error fetching current user:', error);
    throw error;
  }
};

export const completeUserProfile = async (data) => {
  try {
    const response = await api.put('/users/complete-profile', data);
    return response.data;
  } catch (error) {
    console.error('Error completing user profile:', error);
    throw error;
  }
};

// Services
export const fetchServices = async () => {
  try {
    const response = await api.get('/services');
    return response.data;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
};

export const createService = async (serviceData) => {
  try {
    const response = await api.post('/services', serviceData);
    return response.data;
  } catch (error) {
    console.error('Error creating service:', error);
    throw error;
  }
};

export const updateService = async (id, serviceData) => {
  try {
    const response = await api.put(`/services/${id}`, serviceData);
    return response.data;
  } catch (error) {
    console.error('Error updating service:', error);
    throw error;
  }
};

export const deleteService = async (id) => {
  try {
    const response = await api.delete(`/services/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting service:', error);
    throw error;
  }
};

// Trainers
export const fetchTrainers = async () => {
  try {
    const response = await api.get('/trainers');
    return response.data;
  } catch (error) {
    console.error('Error fetching trainers:', error);
    throw error;
  }
};

export const createTrainer = async (trainerData) => {
  try {
    const response = await api.post('/trainers', trainerData);
    return response.data;
  } catch (error) {
    console.error('Error creating trainer:', error);
    throw error;
  }
};

export const updateTrainer = async (id, trainerData) => {
  try {
    const response = await api.put(`/trainers/${id}`, trainerData);
    return response.data;
  } catch (error) {
    console.error('Error updating trainer:', error);
    throw error;
  }
};

export const deleteTrainer = async (id) => {
  try {
    const response = await api.delete(`/trainers/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting trainer:', error);
    throw error;
  }
};

// Feedback
export const submitFeedback = async (feedbackData) => {
  try {
    const response = await api.post('/feedback', feedbackData);
    return response.data;
  } catch (error) {
    console.error('Error submitting feedback:', error);
    throw error;
  }
};

export const fetchFeedback = async () => {
  try {
    const response = await api.get('/feedback');
    return response.data;
  } catch (error) {
    console.error('Error fetching feedback:', error);
    throw error;
  }
};

// Queries
export const submitQuery = async (queryData) => {
  try {
    const response = await api.post('/queries', queryData);
    return response.data;
  } catch (error) {
    console.error('Error submitting query:', error);
    throw error;
  }
};

export const fetchQueries = async () => {
  try {
    const response = await api.get('/queries');
    return response.data;
  } catch (error) {
    console.error('Error fetching queries:', error);
    throw error;
  }
};
