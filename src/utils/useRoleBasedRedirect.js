import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const useRoleBasedRedirect = () => {
    const navigate = useNavigate();

    return (token) => {
        try {
            const decodedToken = jwtDecode(token);
            const userRole = decodedToken.role;
            const profileComplete = decodedToken.profile_complete;

            if (!profileComplete) {
                navigate('/complete-profile');
            } else {
                switch (userRole) {
                    case 'admin':
                        navigate('/admin-dashboard');
                        break;
                    case 'trainer':
                        navigate('/trainer-dashboard');
                        break;
                    default:
                        navigate('/user-dashboard');
                        break;
                }
            }
        } catch (error) {
            console.error('Token decoding error:', error);
            navigate('/login');
        }
    };
};

export default useRoleBasedRedirect;
