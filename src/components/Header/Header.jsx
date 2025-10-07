// components/Header/Header.js
import { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogoClick = () => {
        setIsMenuOpen(false); // Close mobile menu when logo is clicked
    };

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <a href="#home" className="logo-link" onClick={handleLogoClick}>
                        <h2>Imteaz Khan</h2>
                    </a>
                </div>

                <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                    <ul className="nav-list">
                        <li><a href="#home" onClick={handleLogoClick}>Home</a></li>
                        <li><a href="#about" onClick={handleLogoClick}>About</a></li>
                        <li><a href="#skills" onClick={handleLogoClick}>Skills</a></li>
                        <li><a href="#projects" onClick={handleLogoClick}>Projects</a></li>
                        <li><a href="#contact" onClick={handleLogoClick}>Contact</a></li>
                    </ul>
                </nav>

                <button
                    className="menu-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;