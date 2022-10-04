import { createContext, useState } from "react";

export const SelectContext = createContext();


export const SelectProvider = ({ children }) => {

    const [jugado, setJugado] = useState(false);
    const [seleccion, setSeleccion] = useState(null);
    const [adversario, setAdversario] = useState('');

    function yaJugadoFn() {
        setJugado(true);
    }

    function seleccionFn(select) {
        setSeleccion(select)
    }
    function adversarioFn(select) {
        setAdversario(select)
    }

    function repetirFn() {
        setJugado(false);
        setSeleccion(null);
        setAdversario('');
    }

    return (
        <SelectContext.Provider
            value={ {
                adversarioFn,
                adversario,
                seleccionFn,
                yaJugadoFn,
                repetirFn,
                seleccion,
                jugado
            } }>
            { children }
        </SelectContext.Provider>


    )
}