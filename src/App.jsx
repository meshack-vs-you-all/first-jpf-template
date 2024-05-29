import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Importing necessary components from react-router-dom
import { useState, useEffect } from 'react'; // Importing useState and useEffect from React for managing state
import { ToastContainer } from 'react-toastify'; // Importing ToastContainer for toast notifications
import 'react-toastify/dist/ReactToastify.css'; // Importing ToastContainer styles

// Importing components
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
import useAuthCheck from './utils/useAuthCheck'; // Import custom hook for checking authentication status
import { AuthProvider } from './contexts/AuthContext'; // Import AuthProvider for context

const App = () => {
    // Destructure authentication status, user role, profile completion, and loading status from custom hook
    const { isAuthenticated, userRole, profileComplete, loading } = useAuthCheck();
    const [role, setRole] = useState(null); // State to store the selected role

    // State to manage authentication state
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        userRole: null,
        profileComplete: false,
    });

    // useEffect to update authState after checking authentication status
    useEffect(() => {
        setAuthState({ isAuthenticated, userRole, profileComplete });
    }, [isAuthenticated, userRole, profileComplete]);

    // Function to handle authentication state changes
    const handleAuthChange = (isAuthenticated, userRole, profileComplete) => {
        setAuthState({ isAuthenticated, userRole, profileComplete });
    };

    // Show loading spinner while checking authentication status
    if (loading) {
        return <LoadingHome />;
    }

    return (
        <AuthProvider>
            <Router>
                <Nav /> {/* Navigation component */}
                <ToastContainer /> {/* Toast notifications */}
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* If user is authenticated, redirect to home page; else show login */}
                        <Route path="/login" element={authState.isAuthenticated ? <Navigate to="/" /> : <Login authState={authState} setAuthState={handleAuthChange} />} />
                        {/* If user is authenticated, redirect to home page; else show signup */}
                        <Route path="/signup" element={authState.isAuthenticated ? <Navigate to="/" /> : <Signup role={role} />} /> {/* Pass role to Signup */}
                        {/* Role Selection Route */}
                        <Route path="/select-role" element={<RoleSelection setRole={setRole} />} /> 
                        {/* If user is authenticated but profile is not complete, show CompleteProfile; else redirect to home */}
                        <Route path="/complete-profile" element={authState.isAuthenticated && !authState.profileComplete ? <CompleteProfile /> : <Navigate to="/" />} />
                        {/* If user is authenticated and role is admin, show AdminDashboard; else redirect to login */}
                        <Route path="/admin-dashboard" element={authState.isAuthenticated && authState.userRole === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />} />
                        {/* If user is authenticated and role is user, show UserDashboard; else redirect to login */}
                        <Route path="/user-dashboard" element={authState.isAuthenticated && authState.userRole === 'user' ? <UserDashboard /> : <Navigate to="/login" />} />
                        {/* If user is authenticated and role is trainer, show TrainerDashboard; else redirect to login */}
                        <Route path="/trainer-dashboard" element={authState.isAuthenticated && authState.userRole === 'trainer' ? <TrainerDashboard /> : <Navigate to="/login" />} />
                        {/* If user is authenticated, show Profile; else redirect to login */}
                        <Route path="/profile" element={authState.isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
                        {/* If user is authenticated, show Feedback; else redirect to login */}
                        <Route path="/feedback" element={authState.isAuthenticated ? <Feedback /> : <Navigate to="/login" />} />
                        {/* If user is authenticated and role is admin, show ViewFeedback; else redirect to login */}
                        <Route path="/view-feedback" element={authState.isAuthenticated && authState.userRole === 'admin' ? <ViewFeedback /> : <Navigate to="/login" />} />
                        {/* If user is authenticated, show Queries; else redirect to login */}
                        <Route path="/queries" element={authState.isAuthenticated ? <Queries /> : <Navigate to="/login" />} />
                        {/* If user is authenticated and role is admin, show ViewQueries; else redirect to login */}
                        <Route path="/view-queries" element={authState.isAuthenticated && authState.userRole === 'admin' ? <ViewQueries /> : <Navigate to="/login" />} />
                        {/* If user is authenticated and role is admin, show ServiceManagement; else redirect to login */}
                        <Route path="/service-management" element={authState.isAuthenticated && authState.userRole === 'admin' ? <ServiceManagement /> : <Navigate to="/login" />} />
                        {/* If user is authenticated and role is admin, show BookingManagement; else redirect to login */}
                        <Route path="/booking-management" element={authState.isAuthenticated && authState.userRole === 'admin' ? <BookingManagement /> : <Navigate to="/login" />} />
                        {/* If user is authenticated, show UserBookings; else redirect to login */}
                        <Route path="/user-bookings" element={authState.isAuthenticated ? <UserBookings /> : <Navigate to="/login" />} />
                        {/* If user is authenticated and role is admin, show PaymentManagement; else redirect to login */}
                        <Route path="/payment-management" element={authState.isAuthenticated && authState.userRole === 'admin' ? <PaymentManagement /> : <Navigate to="/login" />} />
                    </Routes>
                </main>
            </Router>
        </AuthProvider>
    );
};

export default App;
