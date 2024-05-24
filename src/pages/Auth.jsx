import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';

const AuthPage = () => {
    // You can conditionally render Login or Signup based on your routing logic
    return (
        <>
            <Login />
            { <Signup /> }
        </>
    );
};

export default AuthPage;
