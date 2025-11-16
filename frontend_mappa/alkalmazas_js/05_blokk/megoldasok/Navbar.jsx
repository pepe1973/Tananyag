import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar-kontener">
            <div className="frontend-nav">
                <Link to="/">Home</Link>
                <Link to="/cakes">Torták</Link>
                <Link to="/register">Regisztráció</Link>
            </div>
            <div className="backend-nav">
                <Link to="http://localhost:3500/api">Szerver</Link>
            </div>
        </div>
    );
};

export default Navbar;