import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"

export const Esperando = () => {

    const [puntitos, setPuntitos] = useState('.')

    useEffect(() => {

        setTimeout(() => {
            setPuntitos(puntitos + '.')
        }, 1000)

        return () => {
            puntitos === '...' && setPuntitos('.')
        }

    }, [puntitos])


    return (
        <Container>
            <Row className='my-4'>
                <Col>
                    <h1>Esperando tu elección{ puntitos }</h1>
                </Col>
            </Row>
        </Container>
    )
}

