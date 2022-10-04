import { Col, Container, Row } from "react-bootstrap"
import { Item } from "./Item"

export const Opciones = ({
    jugado,
    opciones,
    seleccionFn,
    yaJugadoFn }) => {

    return (
        <Container fluid className="my-3 mx-0 px-0">
            <Row className="mx-0">
                <Col>
                    <h3>Haz tu elección:</h3>
                </Col>
            </Row>
            <Row className="my-3 bg-primary mx-0">
                {
                    opciones.map(opcion =>
                        <Col md
                            xs={ 1 }
                            key={ opcion }>
                            <Item
                                seleccionFn={ seleccionFn }
                                yaJugadoFn={ yaJugadoFn }
                                opcion={ opcion }
                                jugado={ jugado } />
                        </Col>)
                }
            </Row>

        </Container>
    )
}
