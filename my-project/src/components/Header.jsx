import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header className="header-container header-glass">
            <div className="header-content">
                <Link to="/" className="logo">
                    AI Chat
                </Link>

                <nav className="nav-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </nav>

                <div className="header-actions">
                    <Link to="/login" className="nav-link sign-in-link">Sign In</Link>
                    <Link to="/signup" className="cta-button">Sign Up</Link>
                </div>
            </div>
        </header>
    )
}

export default Header
