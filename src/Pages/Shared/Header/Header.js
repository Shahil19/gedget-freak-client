import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container container='true'>
                    <Navbar.Brand href="#">Gadget Freak</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/products'>Products</Nav.Link>
                            <Nav.Link as={Link} to='/uploadProduct'>Upload Product</Nav.Link>
                            <Nav.Link as={Link} to='/orders'>Order List</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ? <Nav.Link className='btn btn-primary ' onClick={() => handleSignOut()} >Sign Out</Nav.Link> : <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                            }
                            <Nav.Link href="#">{user?.displayName}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;