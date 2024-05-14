import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import AdminDashboard from './pages/AdminDashboard';
import Auth from './pages/Auth';
import Bookings from './pages/Bookings';
import Home from './pages/Home';

const App = () => {
    return (
        <Router>
            <Nav />
            <main className="relative flex-auto w-full pt-20">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/bookings" element={<Bookings />} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;
