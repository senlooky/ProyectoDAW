import { Container, Navbar, Nav, Button } from "react-bootstrap"
import Imagenes from "../assets/Imagenes"
import './Navegation.css'

export default function Navegation(){
    return (
        <>
        <header>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={Imagenes.img1}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="logo"
            />
            </Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/Aventura'>Aventura</Nav.Link>
            <Nav.Link href='/CienciaFiccion'>Ciencia Ficción</Nav.Link>
            <Nav.Link href='/Paranormal'>Paranormal</Nav.Link>
            <Nav.Link href='/Registro-libro'>Registrar libro</Nav.Link>
          </Nav>
          <Button variant="outline-info" href='/LogUp'>Registrarse</Button>{' '}
      <Button variant="outline-light" href='/Login'>Iniciar Sesión</Button>{' '}
        </Container>
      </Navbar>
      </header>
      <br />

        </>
         )
}