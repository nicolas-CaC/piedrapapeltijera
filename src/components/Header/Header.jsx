import { Container, Navbar } from "react-bootstrap"
import { NavBar } from "./NavBar"
import logo from './../../assets/images/logo.png'

export const Header = () => {

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <img height='40'
                    src={ logo }
                    alt={ logo }
                    className='pe-2'
                    style={ { filter: 'invert(1)' } }
                />
                <NavBar />
            </Container>
        </Navbar>
    )
}