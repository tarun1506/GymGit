import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  handleLogout = () => {
    // Reset internal storage
    localStorage.clear();
  };

  render() {
    return (
      <>
        <nav className="navbar bg-body-tertiarynavbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img
                src="src/assets/icons8-dumbell-100.png"
                alt="Bootstrap"
                width={70}
                height={50}
              />
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
              <button
                className="btn btn-outline-light"
                onClick={this.handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
