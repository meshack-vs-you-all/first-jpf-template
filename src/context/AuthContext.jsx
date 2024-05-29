import { createContext, useState, useEffect } from 'react'; // Import necessary hooks from React
import {jwtDecode} from 'jwt-decode'; // Import jwt-decode for decoding JWT tokens
import axios from 'axios'; // Import axios for making HTTP requests

// Create the AuthContext
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // State variables for authentication status, user role, profile completeness, and loading status
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [profileComplete, setProfileComplete] = useState(false);
  const [loading, setLoading] = useState(true);

  // useEffect to check the token status on component mount
  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem('token'); // Retrieve token from local storage
      if (token) {
        try {
          const decodedToken = jwtDecode(token); // Decode the token
          setIsAuthenticated(true); // Set authentication status to true
          setUserRole(decodedToken.role); // Set the user role from the decoded token
          setProfileComplete(decodedToken.profile_complete); // Set profile completeness from the decoded token
        } catch (error) {
          // Handle token expiration or invalid token
          localStorage.removeItem('token'); // Remove token from local storage if invalid
        }
      }
      setLoading(false); // Set loading status to false
    };

    checkToken(); // Call the checkToken function
  }, []);

  // Login function to authenticate the user
  const login = async (credentials) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/users/login`, credentials); // Make a login request
      const token = response.data.access_token; // Get the token from the response
      localStorage.setItem('token', token); // Store the token in local storage

      const decodedToken = jwtDecode(token); // Decode the token
      setIsAuthenticated(true); // Set authentication status to true
      setUserRole(decodedToken.role); // Set the user role from the decoded token
      setProfileComplete(decodedToken.profile_complete); // Set profile completeness from the decoded token
    } catch (error) {
      // Handle login errors
      console.error('Login failed:', error); // Log the error
    }
  };

  // Logout function to clear authentication data
  const logout = () => {
    localStorage.removeItem('token'); // Remove the token from local storage
    setIsAuthenticated(false); // Set authentication status to false
    setUserRole(null); // Clear the user role
    setProfileComplete(false); // Clear profile completeness status
  };

  // Provide the authentication context to the children components
  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, profileComplete, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
