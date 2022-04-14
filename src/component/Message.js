import React from 'react';
import GuestMessage from './GuestMessage';
import UserMessage from './UserMessage';
const Message = (props) => {
    const isLoggedIn = props.isLoggedIn;
    return isLoggedIn ? <UserMessage /> : <GuestMessage />;

};

export default Message;