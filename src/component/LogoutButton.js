import React from 'react';

const LogoutButton = (props) => {
    return (
        <button onClick={props.onClick}>Déconnection</button>
    );
};

export default LogoutButton;