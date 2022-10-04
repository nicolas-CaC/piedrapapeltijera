import { Nav, Navbar } from "react-bootstrap"
import { Dropdown } from "./Dropdown"

export const NavBar = () => {

    return (
        <>
            <Navbar.Brand href="#home">Github</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <Dropdown
                        title='Productos'
                        items={ ['Autos', 'Juguetes', 'Maquillaje'] }
                        items2={ ['Adopta un cachorro', 'Adopta un humano'] }
                    />
                </Nav>

            </Navbar.Collapse>
        </>

    )
}