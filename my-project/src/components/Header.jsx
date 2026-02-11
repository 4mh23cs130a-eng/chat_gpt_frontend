import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        setIsLoggedIn(!!token);
    }, [location]);

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('token_type');
        setIsLoggedIn(false);
        navigate('/login');
    };

    return (
        <header className="header-container header-glass">
            <div className="header-content">
                <Link to="/" className="logo-group">
                    <svg className="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="logo-text">AI Chat</span>
                </Link>

                <nav className="nav-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    {isLoggedIn && <Link to="/dashboard" className="nav-link">Dashboard</Link>}
                </nav>

                <div className="header-actions">
                    {isLoggedIn ? (
                        <button onClick={handleLogout} className="cta-button" style={{ background: '#ef4444', color: 'white' }}>Logout</button>
                    ) : (
                        <>
                            <Link to="/login" className="nav-link sign-in-link">Sign In</Link>
                            <Link to="/signup" className="cta-button">Sign Up</Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header



