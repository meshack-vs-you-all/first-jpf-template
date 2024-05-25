// src/components/Auth/RoleSelection.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RoleSelection = ({ setRole }) => {
    const [selectedRole, setSelectedRole] = useState('');
    const navigate = useNavigate();

    // Function to handle role selection and navigation to signup page
    const handleRoleSelect = (role) => {
        setSelectedRole(role);
        setRole(role);  // Update the role state in the parent component
        navigate('/signup');  // Navigate to the signup page
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-white p-5">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Select Your Role</h2>
                <div className="space-y-4">
                    <button
                        className="w-full px-4 py-2 bg-brand-primary text-white rounded hover:bg-blue-500 active:bg-blue-700"
                        onClick={() => handleRoleSelect('user')}
                    >
                        User
                    </button>
                    <button
                        className="w-full px-4 py-2 bg-brand-primary text-white rounded hover:bg-blue-500 active:bg-blue-700"
                        onClick={() => handleRoleSelect('admin')}
                    >
                        Admin
                    </button>
                    <button
                        className="w-full px-4 py-2 bg-brand-primary text-white rounded hover:bg-blue-500 active:bg-blue-700"
                        onClick={() => handleRoleSelect('trainer')}
                    >
                        Trainer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RoleSelection;
