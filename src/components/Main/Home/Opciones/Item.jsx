import { Button } from "react-bootstrap"


export const Item = ({
    opcion,
    jugado,
    seleccionFn,
    yaJugadoFn }) => {

    function handleClick(e) {
        e.nativeEvent.stopImmediatePropagation()
        if (jugado) return
        yaJugadoFn()
        seleccionFn(e.currentTarget.value)
    }

    return (
        <Button
            onClick={ handleClick }
            value={ opcion }
        >
            <p className="fw-bold">{ opcion }</p>
            <img
                height='200'
                alt={ opcion }
                src={ `assets/images/${opcion.toLowerCase()}.png` }
            />
        </Button>
    )
}

