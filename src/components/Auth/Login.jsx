import { useState, useEffect } from 'react'; // Importing necessary hooks from React
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for navigation
import axios from 'axios'; // Importing axios for making HTTP requests
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing icons for password visibility toggle
import {jwtDecode} from 'jwt-decode'; // Importing jwt-decode for decoding JWT tokens
import useRoleBasedRedirect from '../../utils/useRoleBasedRedirect'; // Importing custom hook for role-based redirection

const Login = ({ authState, setAuthState }) => {
  // State variables for form data, password visibility, error message, and navigation
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const roleBasedRedirect = useRoleBasedRedirect();

  // Handler for form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      // Make a POST request to the login API endpoint
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/users/login`, formData);
      const token = response.data.access_token; // Extract token from response
      localStorage.setItem('token', token); // Store token in localStorage

      // Decode the token to extract user information
      const decodedToken = jwtDecode(token);
      const userRole = decodedToken.role; // Extract user role
      const profileComplete = decodedToken.profile_complete; // Extract profile completeness status

      // Log decoded token for debugging
      console.log("Decoded Token:", decodedToken);
      // Update authentication state
      setAuthState(true, userRole, profileComplete);
    } catch (error) {
      // Handle login errors
      console.error('Login error:', error);
      setError('Invalid username or password'); // Set error message
    }
  };

  // useEffect to handle redirection after state updates
  useEffect(() => {
    if (authState.isAuthenticated) {
      roleBasedRedirect(authState.userRole, authState.profileComplete);
    }
  }, [authState, roleBasedRedirect]);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex items-center justify-center min-h-screen mt-20 bg-white p-5">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        {/* Display error message if exists */}
        {error && <p className="text-red mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded pr-10"
            />
            <div className="absolute inset-y-0 right-1 pt-5 pr-3 flex items-center text-lg leading-5">
              <button type="button" onClick={togglePasswordVisibility} className="focus:outline-none">
                {/* Toggle password visibility icon */}
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div>
            <a href="#" className="text-sm text-black hover:underline">Forgot Your Password?</a>
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-brand-primary text-white rounded hover:bg-[#61c6dd] active:text-gray-dark">
            Sign in
          </button>
          <p className="mt-4">New User? <br /><a href="/signup">Sign Up</a> and Claim your <span className="text-brand-primary">First Timers 50-minute Intro Stretch</span> starting at $27 (Ksh. 3,516) per session</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
