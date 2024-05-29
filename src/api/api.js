import axios from 'axios'; // Importing axios for making HTTP requests
import {jwtDecode} from 'jwt-decode'; // Importing jwt-decode for decoding JWT tokens

// Use environment variable or default to localhost with /api prefix
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

// Create axios instance with base URL and credentials
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// Interceptor to include JWT token in headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Get token from localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Add token to headers
  }
  return config;
}, (error) => {
  return Promise.reject(error); // Handle request error
});

// Generic function to handle API requests
const handleApiResponse = async (apiCall) => {
  try {
    const response = await apiCall; // Await the API call
    return response.data; // Return response data
  } catch (error) {
    console.error('API error:', error); // Log any errors
    throw error; // Rethrow the error
  }
};

// Audits endpoints
export const createAudit = async (auditData) => 
  handleApiResponse(api.post('/audits', auditData, { headers: { 'Content-Type': 'application/json' } }));
export const getAudit = async (id) => handleApiResponse(api.get(`/audits/${id}`));
export const getAudits = async () => handleApiResponse(api.get('/audits'));
export const deleteAudit = async (id) => handleApiResponse(api.delete(`/audits/${id}`));

// User Queries endpoints
export const createUserQuery = async (queryData) => 
  handleApiResponse(api.post('/user_queries', queryData, { headers: { 'Content-Type': 'application/json' } }));
export const getUserQuery = async (id) => handleApiResponse(api.get(`/user_queries/${id}`));
export const getUserQueries = async () => handleApiResponse(api.get('/user_queries'));
export const updateUserQuery = async (id, queryData) => 
  handleApiResponse(api.put(`/user_queries/${id}`, queryData, { headers: { 'Content-Type': 'application/json' } }));
export const deleteUserQuery = async (id) => handleApiResponse(api.delete(`/user_queries/${id}`));

// Equipment endpoints
export const createEquipment = async (equipmentData) => 
  handleApiResponse(api.post('/equipment', equipmentData, { headers: { 'Content-Type': 'application/json' } }));
export const getEquipment = async (id) => handleApiResponse(api.get(`/equipment/${id}`));
export const getEquipments = async () => handleApiResponse(api.get('/equipment'));
export const updateEquipment = async (id, equipmentData) => 
  handleApiResponse(api.put(`/equipment/${id}`, equipmentData, { headers: { 'Content-Type': 'application/json' } }));
export const deleteEquipment = async (id) => handleApiResponse(api.delete(`/equipment/${id}`));

// Users endpoints
export const createUser = async (userData) => 
  handleApiResponse(api.post('/users/register', userData, { headers: { 'Content-Type': 'application/json' } }));
export const getUser = async (id) => handleApiResponse(api.get(`/users/${id}`));
export const getUsers = async () => handleApiResponse(api.get('/users'));
export const updateUser = async (id, userData) => 
  handleApiResponse(api.put(`/users/${id}`, userData, { headers: { 'Content-Type': 'application/json' } }));
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

// Feedback endpoints
export const createFeedback = async (feedbackData) => 
  handleApiResponse(api.post('/feedback', feedbackData, { headers: { 'Content-Type': 'application/json' } }));
export const getFeedback = async (id) => handleApiResponse(api.get(`/feedback/${id}`));
export const getFeedbacks = async () => handleApiResponse(api.get('/feedback'));
export const updateFeedback = async (id, feedbackData) => 
  handleApiResponse(api.put(`/feedback/${id}`, feedbackData, { headers: { 'Content-Type': 'application/json' } }));
export const deleteFeedback = async (id) => handleApiResponse(api.delete(`/feedback/${id}`));

// Reviews endpoints
export const createReview = async (reviewData) => 
  handleApiResponse(api.post('/reviews', reviewData, { headers: { 'Content-Type': 'application/json' } }));
export const getReview = async (id) => handleApiResponse(api.get(`/reviews/${id}`));
export const getReviews = async () => handleApiResponse(api.get('/reviews'));
export const updateReview = async (id, reviewData) => 
  handleApiResponse(api.put(`/reviews/${id}`, reviewData, { headers: { 'Content-Type': 'application/json' } }));
export const deleteReview = async (id) => handleApiResponse(api.delete(`/reviews/${id}`));

// Interactions endpoints
export const createInteraction = async (interactionData) => 
  handleApiResponse(api.post('/interactions', interactionData, { headers: { 'Content-Type': 'application/json' } }));
export const getInteraction = async (id) => handleApiResponse(api.get(`/interactions/${id}`));
export const getInteractions = async () => handleApiResponse(api.get('/interactions'));
export const updateInteraction = async (id, interactionData) => 
  handleApiResponse(api.put(`/interactions/${id}`, interactionData, { headers: { 'Content-Type': 'application/json' } }));
export const deleteInteraction = async (id) => handleApiResponse(api.delete(`/interactions/${id}`));

// Rooms endpoints
export const createRoom = async (roomData) => 
  handleApiResponse(api.post('/rooms', roomData, { headers: { 'Content-Type': 'application/json' } }));
export const getRoom = async (id) => handleApiResponse(api.get(`/rooms/${id}`));
export const getRooms = async () => handleApiResponse(api.get('/rooms'));
export const updateRoom = async (id, roomData) => 
  handleApiResponse(api.put(`/rooms/${id}`, roomData, { headers: { 'Content-Type': 'application/json' } }));
export const deleteRoom = async (id) => handleApiResponse(api.delete(`/rooms/${id}`));

// Booking Details endpoints
export const createBookingDetail = async (detailData) => 
  handleApiResponse(api.post('/booking_details', detailData, { headers: { 'Content-Type': 'application/json' } }));
export const getBookingDetail = async (id) => handleApiResponse(api.get(`/booking_details/${id}`));
export const getBookingDetails = async () => handleApiResponse(api.get('/booking_details'));
export const updateBookingDetail = async (id, detailData) => 
  handleApiResponse(api.put(`/booking_details/${id}`, detailData, { headers: { 'Content-Type': 'application/json' } }));
export const deleteBookingDetail = async (id) => handleApiResponse(api.delete(`/booking_details/${id}`));

// Bookings endpoints
export const createBooking = async (bookingData) => 
  handleApiResponse(api.post('/bookings', bookingData, { headers: { 'Content-Type': 'application/json' } }));
export const getBooking = async (id) => handleApiResponse(api.get(`/bookings/${id}`));
export const getBookings = async () => handleApiResponse(api.get('/bookings'));

// Payments endpoints
export const createPayment = async (paymentData) => 
  handleApiResponse(api.post('/payments', paymentData, { headers: { 'Content-Type': 'application/json' } }));
export const getPayment = async (id) => handleApiResponse(api.get(`/payments/${id}`));
export const getPayments = async () => handleApiResponse(api.get('/payments'));
export const updatePayment = async (id, paymentData) => 
  handleApiResponse(api.put(`/payments/${id}`, paymentData, { headers: { 'Content-Type': 'application/json' } }));
export const deletePayment = async (id) => handleApiResponse(api.delete(`/payments/${id}`));

// Trainers endpoints
export const createTrainer = async (trainerData) => 
  handleApiResponse(api.post('/trainers', trainerData, { headers: { 'Content-Type': 'application/json' } }));
export const getTrainer = async (id) => handleApiResponse(api.get(`/trainers/${id}`));
export const getTrainers = async () => handleApiResponse(api.get('/trainers'));
export const updateTrainer = async (id, trainerData) => 
  handleApiResponse(api.put(`/trainers/${id}`, trainerData, { headers: { 'Content-Type': 'application/json' } }));
