import { useNavigate } from 'react-router-dom';  // Importing the useNavigate hook from react-router-dom for navigation
import {jwtDecode} from 'jwt-decode';  // Importing jwtDecode to decode JWT tokens

const useRoleBasedRedirect = () => {
    // Initializing navigate to be used for programmatic navigation
    const navigate = useNavigate();

    // Returning a function that will handle role-based redirection
    return (token) => {
        try {
            // Attempting to decode the provided JWT token
            const decodedToken = jwtDecode(token);
            // Extracting user role and profile completion status from the decoded token
            const userRole = decodedToken.role;
            const profileComplete = decodedToken.profile_complete;

            // Checking if the user's profile is complete
            if (!profileComplete) {
                // If the profile is not complete, navigate to the complete profile page
                navigate('/complete-profile');
            } else {
                // If the profile is complete, switch based on the user's role to navigate to the appropriate dashboard
                switch (userRole) {
                    case 'admin':
                        // Navigate to the admin dashboard if the user is an admin
                        navigate('/admin-dashboard');
                        break;
                    case 'trainer':
                        // Navigate to the trainer dashboard if the user is a trainer
                        navigate('/trainer-dashboard');
                        break;
                    default:
                        // Navigate to the user dashboard if the user is neither an admin nor a trainer
                        navigate('/user-dashboard');
                        break;
                }
            }
        } catch (error) {
            // If an error occurs (e.g., token decoding fails), log the error and navigate to the login page
            console.error('Token decoding error:', error);
            navigate('/login');
        }
    };
};

// Exporting the useRoleBasedRedirect hook for use in other components
export default useRoleBasedRedirect;
