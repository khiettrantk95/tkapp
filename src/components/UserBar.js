import React from 'react';

import { useAuth } from '../context/AuthContext';

const UserBar = () => {
    const { user, logout } = useAuth();

    return (
        <div className='userbar'>
            {user && (
                <div>
                    <p>Welcome, {user.username}!</p>
                    <button onClick={logout}>Logout</button>
                </div>
            )}
        </div>
    )
}

export default UserBar;