import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import useRoleBasedRedirect from '../utils/useRoleBasedRedirect';
import useAuth from '../utils/useAuth';
import useAuthCheck from '../utils/useAuthCheck'; 


const useRoleBasedRedirect = (userRole, profileComplete) => {
  const navigate = useNavigate();
  if (userRole === 'admin' && profileComplete) {
    navigate('/admin-dashboard');
  } else if (userRole === 'trainer' && profileComplete) {
    navigate('/trainer-dashboard');
  } else {
    navigate('/user-dashboard');
  }
};

const useAuth = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  if (!token) {
    navigate('/login');
  }
};



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

// Generic function to handle API requests
const handleApiResponse = async (apiCall) => {
  try {
    const response = await apiCall;
    return response.data;
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
};

// Audits
export const createAudit = async (auditData) => handleApiResponse(api.post('/audits', auditData));
export const getAudit = async (id) => handleApiResponse(api.get(`/audits/${id}`));
export const getAudits = async () => handleApiResponse(api.get('/audits'));
export const deleteAudit = async (id) => handleApiResponse(api.delete(`/audits/${id}`));

// User Queries
export const createUserQuery = async (queryData) => handleApiResponse(api.post('/user_queries', queryData));
export const getUserQuery = async (id) => handleApiResponse(api.get(`/user_queries/${id}`));
export const getUserQueries = async () => handleApiResponse(api.get('/user_queries'));
export const updateUserQuery = async (id, queryData) => handleApiResponse(api.put(`/user_queries/${id}`, queryData));
export const deleteUserQuery = async (id) => handleApiResponse(api.delete(`/user_queries/${id}`));

// Equipment
export const createEquipment = async (equipmentData) => handleApiResponse(api.post('/equipment', equipmentData));
export const getEquipment = async (id) => handleApiResponse(api.get(`/equipment/${id}`));
export const getEquipments = async () => handleApiResponse(api.get('/equipment'));
export const updateEquipment = async (id, equipmentData) => handleApiResponse(api.put(`/equipment/${id}`, equipmentData));
export const deleteEquipment = async (id) => handleApiResponse(api.delete(`/equipment/${id}`));

// Users
export const createUser = async (userData) => handleApiResponse(api.post('/users', userData));
export const getUser = async (id) => handleApiResponse(api.get(`/users/${id}`));
export const getUsers = async () => handleApiResponse(api.get('/users'));
export const updateUser = async (id, userData) => handleApiResponse(api.put(`/users/${id}`, userData));
export const deleteUser = async (id) => handleApiResponse(api.delete(`/users/${id}`));
export const loginUser = async (credentials) => {
  const formData = new URLSearchParams();
  formData.append('username', credentials.username);
  formData.append('password', credentials.password);

  const response = await api.post('/users/login', formData, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });

  const token = response.data.access_token;
  localStorage.setItem('token', token);

  const decodedToken = jwtDecode(token);
  localStorage.setItem('role', decodedToken.role);

  return response.data;
};
export const getCurrentUser = async () => handleApiResponse(api.get('/users/me'));

// Feedback
export const createFeedback = async (feedbackData) => handleApiResponse(api.post('/feedback', feedbackData));
export const getFeedback = async (id) => handleApiResponse(api.get(`/feedback/${id}`));
export const getFeedbacks = async () => handleApiResponse(api.get('/feedback'));
export const updateFeedback = async (id, feedbackData) => handleApiResponse(api.put(`/feedback/${id}`, feedbackData));
export const deleteFeedback = async (id) => handleApiResponse(api.delete(`/feedback/${id}`));

// Reviews
export const createReview = async (reviewData) => handleApiResponse(api.post('/reviews', reviewData));
export const getReview = async (id) => handleApiResponse(api.get(`/reviews/${id}`));
export const getReviews = async () => handleApiResponse(api.get('/reviews'));
export const updateReview = async (id, reviewData) => handleApiResponse(api.put(`/reviews/${id}`, reviewData));
export const deleteReview = async (id) => handleApiResponse(api.delete(`/reviews/${id}`));

// Interactions
export const createInteraction = async (interactionData) => handleApiResponse(api.post('/interactions', interactionData));
export const getInteraction = async (id) => handleApiResponse(api.get(`/interactions/${id}`));
export const getInteractions = async () => handleApiResponse(api.get('/interactions'));
export const updateInteraction = async (id, interactionData) => handleApiResponse(api.put(`/interactions/${id}`, interactionData));
export const deleteInteraction = async (id) => handleApiResponse(api.delete(`/interactions/${id}`));

// Rooms
export const createRoom = async (roomData) => handleApiResponse(api.post('/rooms', roomData));
export const getRoom = async (id) => handleApiResponse(api.get(`/rooms/${id}`));
export const getRooms = async () => handleApiResponse(api.get('/rooms'));
export const updateRoom = async (id, roomData) => handleApiResponse(api.put(`/rooms/${id}`, roomData));
export const deleteRoom = async (id) => handleApiResponse(api.delete(`/rooms/${id}`));

// Booking Details
export const createBookingDetail = async (detailData) => handleApiResponse(api.post('/booking_details', detailData));
export const getBookingDetail = async (id) => handleApiResponse(api.get(`/booking_details/${id}`));
export const getBookingDetails = async () => handleApiResponse(api.get('/booking_details'));
export const updateBookingDetail = async (id, detailData) => handleApiResponse(api.put(`/booking_details/${id}`, detailData));
export const deleteBookingDetail = async (id) => handleApiResponse(api.delete(`/booking_details/${id}`));

// Bookings
export const createBooking = async (bookingData) => handleApiResponse(api.post('/bookings', bookingData));
export const getBooking = async (id) => handleApiResponse(api.get(`/bookings/${id}`));
export const getBookings = async () => handleApiResponse(api.get('/bookings'));

// Payments
export const createPayment = async (paymentData) => handleApiResponse(api.post('/payments', paymentData));
export const getPayment = async (id) => handleApiResponse(api.get(`/payments/${id}`));
export const getPayments = async () => handleApiResponse(api.get('/payments'));
export const updatePayment = async (id, paymentData) => handleApiResponse(api.put(`/payments/${id}`, paymentData));
export const deletePayment = async (id) => handleApiResponse(api.delete(`/payments/${id}`));

// Trainers
export const createTrainer = async (trainerData) => handleApiResponse(api.post('/trainers', trainerData));
export const getTrainer = async (id) => handleApiResponse(api.get(`/trainers/${id}`));
export const getTrainers = async () => handleApiResponse(api.get('/trainers'));
export const updateTrainer = async (id, trainerData) => handleApiResponse(api.put(`/trainers/${id}`, trainerData));
export const deleteTrainer = async (id) => handleApiResponse(api.delete(`/trainers/${id}`));

// Services
export const createService = async (serviceData) => handleApiResponse(api.post('/services', serviceData));
export const getService = async (id) => handleApiResponse(api.get(`/services/${id}`));
export const getServices = async () => handleApiResponse(api.get('/services'));
export const updateService = async (id, serviceData) => handleApiResponse(api.put(`/services/${id}`, serviceData));
export const deleteService = async (id) => handleApiResponse(api.delete(`/services/${id}`));
