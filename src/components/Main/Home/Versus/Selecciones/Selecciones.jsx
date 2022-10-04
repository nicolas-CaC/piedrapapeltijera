import { Col, Container, Row } from "react-bootstrap"
import { Adversario } from "./Jugadores/Adversario"
import { Jugador } from "./Jugadores/Seleccion"


export const Selecciones = ({ seleccion, opciones, adversarioFn }) => {

    return (
        <Container>
            <Row>
                <Col md={ 6 }>
                    <Jugador seleccion={ seleccion } />
                </Col>
                <Col md={ 6 }>
                    <Adversario
                        opciones={ opciones }
                        adversarioFn={ adversarioFn }
                    />
                </Col>
            </Row>
        </Container >
    )
}
