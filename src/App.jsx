import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Nav from './components/Shared/Nav';
import AdminDashboard from './components/Admin/AdminDashboard';
import Auth from './components/Auth/Auth';
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
import CompleteProfile from './components/Auth/CompleteProfile';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState(null);
    const [profileComplete, setProfileComplete] = useState(false);
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
                } catch (error) {
                    setIsAuthenticated(false);
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
            <main className="relative flex-auto w-full pt-20">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/admin" element={isAuthenticated && userRole === 'admin' ? <AdminDashboard /> : <Navigate to="/auth" />} />
                    <Route path="/user" element={isAuthenticated && userRole === 'user' ? <UserDashboard /> : <Navigate to="/auth" />} />
                    <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/auth" />} />
                    <Route path="/feedback" element={isAuthenticated ? <Feedback /> : <Navigate to="/auth" />} />
                    <Route path="/view-feedback" element={isAuthenticated && userRole === 'admin' ? <ViewFeedback /> : <Navigate to="/auth" />} />
                    <Route path="/queries" element={isAuthenticated ? <Queries /> : <Navigate to="/auth" />} />
                    <Route path="/view-queries" element={isAuthenticated && userRole === 'admin' ? <ViewQueries /> : <Navigate to="/auth" />} />
                    <Route path="/service-management" element={isAuthenticated && userRole === 'admin' ? <ServiceManagement /> : <Navigate to="/auth" />} />
                    <Route path="/booking-management" element={isAuthenticated && userRole === 'admin' ? <BookingManagement /> : <Navigate to="/auth" />} />
                    <Route path="/user-bookings" element={isAuthenticated ? <UserBookings /> : <Navigate to="/auth" />} />
                    <Route path="/payment-management" element={isAuthenticated && userRole === 'admin' ? <PaymentManagement /> : <Navigate to="/auth" />} />
                    <Route path="/complete-profile" element={isAuthenticated && !profileComplete ? <CompleteProfile /> : <Navigate to="/" />} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;
