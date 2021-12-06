import React, { useState } from 'react'
import { Redirect } from 'react-router';

const Logout = () => {
    const [loggedout, setloggedout] = useState();

    const logout = () => {
        localStorage.removeItem("");
        setloggedout(true);
    };
    if (loggedout) {
        return <Redirect to="/login" push={true} />
    }
    return (
        <div>
            <button onClick={logout}>Log Out</button>
        </div>
    )
}

export default Logout;
