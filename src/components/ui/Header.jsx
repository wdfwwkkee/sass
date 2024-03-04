import React from 'react'
import { useAuth } from "../hooks/useAuth";
const Header = () => {
    const { user, setUser } = useAuth();
    return user ? (
        <div>
            <h2>Welcome {user.name}</h2>
            <button onClick={() => setUser(null)}>Logout</button>
        </div>

    )
        : <button onClick={() => { setUser({ name: "Max" }) }}>Login</button>




}

export default Header