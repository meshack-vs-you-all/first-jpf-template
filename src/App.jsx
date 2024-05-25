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
import LoadingHome from './components/Shared/LoadingHome';
import TrainerDashboard from './components/Trainer/TrainerDashboard';
import RoleSelection from './components/Auth/RoleSelection'; // Import RoleSelection
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuthCheck from './utils/useAuthCheck';
import { useState } from 'react';

const App = () => {
    const { isAuthenticated, userRole, profileComplete, loading } = useAuthCheck();
    const [role, setRole] = useState(null); // State to store the selected role

    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        userRole: null,
        profileComplete: false,
    });

    const handleAuthChange = (isAuthenticated, userRole, profileComplete) => {
        setAuthState({ isAuthenticated, userRole, profileComplete });
    };

    if (loading) {
        return <LoadingHome />; // Show loading spinner while checking auth status
    }

    return (
        <Router>
            <Nav />
            <ToastContainer />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={authState.isAuthenticated ? <Navigate to="/" /> : <Login setAuthState={handleAuthChange} />} />
                    <Route path="/signup" element={authState.isAuthenticated ? <Navigate to="/" /> : <Signup role={role} />} /> {/* Pass role to Signup */}
                    <Route path="/select-role" element={<RoleSelection setRole={setRole} />} /> {/* Role Selection Route */}
                    <Route path="/complete-profile" element={authState.isAuthenticated && !authState.profileComplete ? <CompleteProfile /> : <Navigate to="/" />} />
                    <Route path="/admin-dashboard" element={authState.isAuthenticated && authState.userRole === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />} />
                    <Route path="/user-dashboard" element={authState.isAuthenticated && authState.userRole === 'user' ? <UserDashboard /> : <Navigate to="/login" />} />
                    <Route path="/trainer-dashboard" element={authState.isAuthenticated && authState.userRole === 'trainer' ? <TrainerDashboard /> : <Navigate to="/login" />} />
                    <Route path="/profile" element={authState.isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
                    <Route path="/feedback" element={authState.isAuthenticated ? <Feedback /> : <Navigate to="/login" />} />
                    <Route path="/view-feedback" element={authState.isAuthenticated && authState.userRole === 'admin' ? <ViewFeedback /> : <Navigate to="/login" />} />
                    <Route path="/queries" element={authState.isAuthenticated ? <Queries /> : <Navigate to="/login" />} />
                    <Route path="/view-queries" element={authState.isAuthenticated && authState.userRole === 'admin' ? <ViewQueries /> : <Navigate to="/login" />} />
                    <Route path="/service-management" element={authState.isAuthenticated && authState.userRole === 'admin' ? <ServiceManagement /> : <Navigate to="/login" />} />
                    <Route path="/booking-management" element={authState.isAuthenticated && authState.userRole === 'admin' ? <BookingManagement /> : <Navigate to="/login" />} />
                    <Route path="/user-bookings" element={authState.isAuthenticated ? <UserBookings /> : <Navigate to="/login" />} />
                    <Route path="/payment-management" element={authState.isAuthenticated && authState.userRole === 'admin' ? <PaymentManagement /> : <Navigate to="/login" />} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;
