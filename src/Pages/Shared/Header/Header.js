import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        // <div className="container">
        //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //         <div className="container-fluid">
        //             <a className="navbar-brand" href="/#">Dazko <span>Fitness</span></a>
        //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>
        //             <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //                 <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        //                     <li className="nav-item">
        //                         <a className="nav-link active" aria-current="page" href="/#">Home</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="/#">About</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="/#">Trainers</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="/#">Classes</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="/#">Pricing</a>
        //                     </li>
        //                     <Nav.Link as={Link} to="/login">Login</Nav.Link>
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        // </div>
        <>
            <Navbar sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">DAZKO FITNESS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#trainers">Trainers</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#classes">Classes</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#pricing">Pricing</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;