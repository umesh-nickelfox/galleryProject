import React from 'react'

const Logout = () => {

    const logout = () => {
        localStorage.removeItem("gallery");
        window.location = '/login';
    };

    return (
        <div>
            <button onClick={logout}>Log Out</button>
        </div>
    )
}

export default Logout;
