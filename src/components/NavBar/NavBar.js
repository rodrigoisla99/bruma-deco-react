import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.min.css";
import './NavBar.css'

const NavBar = () => {
    return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/"><strong className="nameApp">Bruma Deco</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/category/paraCasa">Para Casa</Nav.Link>
            <Nav.Link as={NavLink} to="/category/textil">Textil</Nav.Link>
            <Nav.Link as={NavLink} to="/aboutUs">¿Quiénes somos?</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contacto</Nav.Link>
            <Nav.Link as={NavLink} to="/cart"><CartWidget></CartWidget></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
};

export default NavBar;