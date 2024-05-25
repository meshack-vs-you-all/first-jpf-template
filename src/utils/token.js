// src/utils/token.js
import {jwtDecode} from 'jwt-decode';

// Function to decode the access token
export const decode_access_token = (token) => {
    try {
        return jwtDecode(token);
    } catch (error) {
        console.error('Failed to decode token:', error);
        return null;
    }
};

