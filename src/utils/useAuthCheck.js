// src/utils/useAuthCheck.js
import { useState, useEffect } from 'react';
//import axios from 'axios';
import { decode_access_token } from './token';  // Correct named import

const useAuthCheck = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState(null);
    const [profileComplete, setProfileComplete] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const decodedToken = decode_access_token(token);
                    setIsAuthenticated(true);
                    setUserRole(decodedToken.role);
                    setProfileComplete(decodedToken.profile_complete);
                } catch (error) {
                    console.error('Error during authentication check:', error);
                    setIsAuthenticated(false);
                }
            } else {
                setIsAuthenticated(false);
            }
            setLoading(false);
        };

        checkAuth();
    }, []);

    return { isAuthenticated, userRole, profileComplete, loading };
};

export default useAuthCheck;
