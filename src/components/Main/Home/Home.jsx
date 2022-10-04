import { useContext } from "react";
import { Resultado } from "./Resultado/Resultado";
import { SelectContext } from "../../contexts/SelectContext";
import { Opciones } from "./Opciones/Opciones";
import { Versus } from "./Versus/Versus";
import { Reiniciar } from "./Reiniciar/Reiniciar";

export const Home = () => {

    const {
        adversarioFn,
        adversario,
        yaJugadoFn,
        seleccionFn,
        repetirFn,
        seleccion,
        jugado,

    } = useContext(SelectContext)

    const opciones = ['Piedra', 'Papel', 'Tijera'];
    const titulo = `${opciones[0]}, ${opciones[1]} & ${opciones[2]}`

    return (
        <div className="my-4 App">
            <h1>{ titulo }</h1>
            <Opciones
                opciones={ opciones }
                yaJugadoFn={ yaJugadoFn }
                seleccionFn={ seleccionFn }
                jugado={ jugado } />
            <Versus
                jugado={ jugado }
                opciones={ opciones }
                seleccion={ seleccion }
                adversarioFn={ adversarioFn }
            />
            { jugado && <Resultado
                adversario={ adversario }
                seleccion={ seleccion }
            /> }
            { jugado && <Reiniciar
                repetirFn={ repetirFn } /> }
        </div>
    )
}