import { Link } from 'react-router-dom'
import "../css/Navbar.css"

function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Portfolio</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className='nav-link'>Biography</Link>
            <Link to="/projects" className='nav-link'>Projects</Link>
        </div>
    </nav>
}

export default NavBar