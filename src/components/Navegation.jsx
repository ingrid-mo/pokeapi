import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { NavLink } from "react-router-dom";

function Navegation() {
  //hay que colocar una constante con el setactive
  const setActiveClass = ({ isActive }) =>
    isActive
      ? "text-warning mt-2 pe-2 text-decoration-none"
      : "text-white mt-2 pe-2 text-decoration-none";
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home" className="logo">
          <img src="https://firebasestorage.googleapis.com/v0/b/weather-7f851.appspot.com/o/image%202.png?alt=media&token=75e49bd7-c409-4f16-8475-0d037143a912" alt="pokemon logo" /></Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/" className={setActiveClass}>
            Home
          </NavLink>
          <NavLink to="/Pokemons" className={setActiveClass}>
            Pokemons
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navegation;
