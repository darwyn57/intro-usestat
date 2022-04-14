import React from 'react';
import Message from './Message';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton'
import react, { useState } from 'react'


const LoginControl = () => {

    const [isLogedIn, setLogedIn] = useState(false);
    const handleLogoutClick = () => {
        setLogedIn(false);
    }
    const handleLoginClick = () => {
        setLogedIn(true);
    }
    let button;
    if (isLogedIn) {
        button = <LogoutButton onClick={handleLogoutClick} />;

    } else {
        button = <LoginButton onClick={handleLoginClick} />;

    }
    return (
        <div>
            <Message isLoggedIn={isLogedIn} />
            {button}
        </div>
    );
};
export default LoginControl;