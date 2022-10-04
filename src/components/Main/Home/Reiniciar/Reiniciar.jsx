import { Button, Container, Row } from "react-bootstrap"

export const Reiniciar = ({ repetirFn }) => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Button
                    onClick={ repetirFn }
                    className='my-1 w-auto fw-bolder fs-3 btn btn-dark text-light border-0 shadow'>
                    Reiniciar
                </Button>
            </Row>
        </Container>
    )
}
