import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className ="navbar" >
            {/* logo */}
            <div className="navbar__logo">
                <h2>Shopping Cart MERN</h2>
            </div>

            {/* links */}
            <ul className="navbar__links">
                <li>
                    <Link to="/cart">
                    
                    </Link>
                </li>
            </ul>

            {/* hamburger menu */}
        </nav>
    )
}

export default Navbar
