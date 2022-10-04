import { Container, Row } from "react-bootstrap"
import { veredicto } from './veredicto'

export const Resultado = ({ seleccion, adversario }) => {

    const container = 'my-3 w-auto text-white shadow-lg'

    if (adversario) {

        const color = `bg-${veredicto[seleccion][adversario][1]}`
        const respuesta = veredicto[seleccion][adversario][0]

        return (
            <Container className={ container } fluid>
                <Row className={ `${color} text-light py-2` }>
                    <h1>{ respuesta }</h1>
                </Row>
            </Container>
        )
    }
}

