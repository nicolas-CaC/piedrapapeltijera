import { Esperando } from "./Esperando"
import { Selecciones } from "./Selecciones/Selecciones"



export const Versus = ({
    jugado,
    opciones,
    seleccion,
    adversarioFn }) => {

    return jugado
        ? <Selecciones
            jugado={ jugado }
            opciones={ opciones }
            seleccion={ seleccion }
            adversarioFn={ adversarioFn }
        />
        : <Esperando />



}

