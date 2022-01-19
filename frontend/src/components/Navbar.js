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
                        <i className='fas fa-shopping-cart'></i>
                        Cart
                        <span className='cartlogo__badge'>0</span>
                    </Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
            </ul>

            <div className='hanburger__menu'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar
