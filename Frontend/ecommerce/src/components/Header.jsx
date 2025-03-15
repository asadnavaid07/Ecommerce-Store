import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar className="navbar navbar-expand-lg bg-primary fixed-top" data-bs-theme="dark">
      <div className="container-fluid">
        {/* Use Nav.Link with as={Link} */}
        <Nav.Link as={Link} to="/" className="navbar-brand">
          Ecommerce Cart
        </Nav.Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Nav.Link as={NavLink} to="/" className="nav-link">
                Home
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link as={NavLink} to="/cart" className="nav-link">
                Cart
              </Nav.Link>
            </li>
            <li className="nav-item dropdown">
              <Nav.Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                New User?
              </Nav.Link>
              <div className="dropdown-menu">
                <Nav.Link as={NavLink} to="/login" className="dropdown-item">
                  Login
                </Nav.Link>
                <Nav.Link as={NavLink} to="/signup" className="dropdown-item">
                  Signup
                </Nav.Link>
              </div>
            </li>
          </ul>

          <form className="d-flex">
            <input className="form-control me-sm-2" type="search" placeholder="Search" />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </Navbar>
  );
}

export default Header;
