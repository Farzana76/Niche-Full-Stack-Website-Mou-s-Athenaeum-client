import React from 'react';
import { Container, Dropdown, Nav, Navbar, Spinner } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import logo from "../../img/logo.png";
import useAuth from '../../hooks/useAuth.js';
import './Menu.css';

const Menu = () => {
    const { user, logOut, loading } = useAuth();
    const history = useHistory();
    if (loading) {
        return <Spinner animation="border" />
    }
    
    // const handleMyOrder = () => {
    //     history.push(`/myOrders/${user.email}&&${user.displayName}`);
    // }

    return (
        <Navbar expand="lg" className="navbar">
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt="" width="80"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink to="/home" className="items">
                    <li>Home</li>
                    </NavLink>
                    <NavLink to="/events" className="items">
                    <li>Events</li>
                    </NavLink>
                    <NavLink to="/deals" className="items">
                    <li>Deals</li>
                    </NavLink>
                    {
                    user.email ?
                        <div className="d-flex">
                            <NavLink to="/dashboard" className="items">Dashboard</NavLink>
                            {/* <div> */}
                            <span className="item1 text-muted">{user.displayName} </span>
                                <button onClick={logOut} className="btn text-light button">Log out</button>
                               
                            {/* </div> */}
                        </div>
                        :
                        <div className="d-flex">
                            <NavLink to="/register" className="items">
                            <li>Register</li>
                            </NavLink>
                            <NavLink to="/login" className="items">Login</NavLink>
                        </div>
                       
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;