import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { users, logOut } = useAuth();
    return (
        <>
            <Navbar sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home" className="text-white">DAZKO <span style={{ color: "#e1193e" }}>FITNESS</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav.Link className="text-white" as={HashLink} to="/home#banner">Home</Nav.Link>
                        <Nav.Link className="text-white" as={HashLink} to="/home#about">About</Nav.Link>
                        <Nav.Link className="text-white" as={HashLink} to="/home#trainers">Trainers</Nav.Link>
                        <Nav.Link className="text-white" as={HashLink} to="/home#classes">Classes</Nav.Link>
                        <Nav.Link className="text-white" as={HashLink} to="/home#pricing">Pricing</Nav.Link >
                        {users?.email ?
                            <Nav.Link className="text-white" onClick={logOut} >Log Out</Nav.Link> :
                            <Nav.Link className="text-white" as={Link} to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text className="text-white">
                            <a href="#login">{users?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;