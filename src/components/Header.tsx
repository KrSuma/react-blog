import Navbar from 'react-bootstrap/Navbar'
import {Container} from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="light" sticky="top" className="Header">
      <Container>
        <Navbar.Brand>Microblog</Navbar.Brand>
      </Container>
    </Navbar>
  )
}
