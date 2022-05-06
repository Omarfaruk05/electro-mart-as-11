import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignout = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand as={Link} to="/">ELECTRO MART</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link href="/manageInventory">Manage Inventory</Nav.Link>
                    <Nav.Link as={Link} to="/myItems">My Items</Nav.Link>
                    <Nav.Link as={Link} to="/addItems">Add Items</Nav.Link>
                    </Nav>
                    <Nav>
                    {
                        user?
                        <Nav.Link onClick={handleSignout} as={Link} to="/login">Logout</Nav.Link>
                        :
                        <Nav.Link as={Link} to="/login">Log in</Nav.Link>}
                    <Nav.Link as={Link} to="/register">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;