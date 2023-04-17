import React from 'react';
import { useMsal } from '@azure/msal-react';

const SignInButton = () => {
    const { instance, inProgress } = useMsal();

    const handleLogin = () => {
        instance.loginPopup().catch((error) => {
            console.error('Login error:', error);
        });
    };

    return (
        <button onClick={handleLogin} disabled={inProgress === 'login'}>
            Sign In
        </button>
    );
};

export default SignInButton;
