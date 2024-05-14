import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Nav from './components/Nav';
import AdminDashboard from './pages/AdminDashboard';
import Auth from './pages/Auth';
import Bookings from './pages/Bookings';
import Home from './pages/Home';
import UserDashboard from './pages/UserDashboard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get('http://localhost:8000/auth/me', { withCredentials: true });
                setIsAuthenticated(true);
                setUserRole(response.data.role);
            } catch (error) {
                setIsAuthenticated(false);
            }
        };
        checkAuth();
    }, []);

    return (
        <Router>
            <Nav />
            <main className="relative flex-auto w-full pt-20">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/admin" element={isAuthenticated && userRole === 'admin' ? <AdminDashboard /> : <Navigate to="/auth" />} />
                    <Route path="/user" element={isAuthenticated && userRole === 'user' ? <UserDashboard /> : <Navigate to="/auth" />} />
                    <Route path="/bookings" element={isAuthenticated ? <Bookings /> : <Navigate to="/auth" />} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;
