import { Button, Container, Nav, Navbar } from "react-bootstrap"
import logo from "../assets/img/logo_inr.png"

export const NavBar = () => {
    return (
        <Navbar expand="md">
            <Container>
                <Navbar.Brand href="https://k9inr1.com/">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Nav>
                    <Button href="https://k9inr1.com/?aff=meo" size="lg" variant="warning" className="fw-bolder">Sign up</Button>
                </Nav>
            </Container>
        </Navbar>
    )
}