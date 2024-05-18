import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Nav from './components/Shared/Nav';
import AdminDashboard from './components/Admin/AdminDashboard';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import CompleteProfile from './components/Auth/CompleteProfile';
import UserDashboard from './components/User/UserDashboard';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Feedback from './components/Feedback/Feedback';
import ViewFeedback from './components/Feedback/ViewFeedback';
import Queries from './components/Queries/Queries';
import ViewQueries from './components/Queries/ViewQueries';
import ServiceManagement from './components/Admin/ServiceManagement';
import BookingManagement from './components/Admin/BookingManagement';
import UserBookings from './components/User/UserBookings';
import PaymentManagement from './components/Admin/PaymentManagement';
import Loading from './components/Shared/Loading';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState(null);
    const [profileComplete, setProfileComplete] = useState(true); // Assume profile is complete by default
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const response = await axios.get('http://localhost:8000/users/me', {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    setIsAuthenticated(true);
                    setUserRole(response.data.role);
                    setProfileComplete(response.data.profileComplete);
                    toast.success('Login successful!');
                } catch (error) {
                    setIsAuthenticated(false);
                    setUserRole(null);
                    setProfileComplete(true);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };
        checkAuth();
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <Router>
            <Nav />
            <ToastContainer />
            <main className="relative flex-auto w-full pt-20">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
                    <Route path="/signup" element={isAuthenticated ? <Navigate to="/" /> : <Signup />} />
                    <Route path="/complete-profile" element={isAuthenticated && !profileComplete ? <CompleteProfile /> : <Navigate to="/" />} />
                    <Route path="/admin" element={isAuthenticated && userRole === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />} />
                    <Route path="/user" element={isAuthenticated && userRole === 'user' ? <UserDashboard /> : <Navigate to="/login" />} />
                    <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
                    <Route path="/feedback" element={isAuthenticated ? <Feedback /> : <Navigate to="/login" />} />
                    <Route path="/view-feedback" element={isAuthenticated && userRole === 'admin' ? <ViewFeedback /> : <Navigate to="/login" />} />
                    <Route path="/queries" element={isAuthenticated ? <Queries /> : <Navigate to="/login" />} />
                    <Route path="/view-queries" element={isAuthenticated && userRole === 'admin' ? <ViewQueries /> : <Navigate to="/login" />} />
                    <Route path="/service-management" element={isAuthenticated && userRole === 'admin' ? <ServiceManagement /> : <Navigate to="/login" />} />
                    <Route path="/booking-management" element={isAuthenticated && userRole === 'admin' ? <BookingManagement /> : <Navigate to="/login" />} />
                    <Route path="/user-bookings" element={isAuthenticated ? <UserBookings /> : <Navigate to="/login" />} />
                    <Route path="/payment-management" element={isAuthenticated && userRole === 'admin' ? <PaymentManagement /> : <Navigate to="/login" />} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;
