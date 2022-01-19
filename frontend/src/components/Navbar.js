import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div className="container-fluid">
          <h2 className="text-white">MERN Ecommerce</h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
            <Link className="nav-link" to="/shop">Shop</Link>
            </li>
          </ul>

            <div className="w-100 d-flex justify-content-end">
              <Link to="/cart">
                <i className="fas fa-shopping-cart"></i>
                <button type="button" class="btn btn-primary">
                  Cart <span class="badge bg-secondary">0</span>
                </button>
              </Link>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
