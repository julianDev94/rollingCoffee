import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/Coffee_Logo.png";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="d-flex justify-content-around">
        <Navbar.Brand as={Link} to={"/"} >
          <img
            src={logo}
            alt="Imagen de logo rolling coffee"
            className="img-fluid"
            width={200}
          />
        </Navbar.Brand>
        
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <NavLink end className="nav-link" to="/">Inicio</NavLink>
              <NavLink end className="nav-link" to="/administrador">Administrador</NavLink>
              <NavLink end className="nav-link" to="/registro">Registro</NavLink>
              <NavLink end className="nav-link" to="/login">Login</NavLink>
            </Nav>
          </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
};

export default Menu;
