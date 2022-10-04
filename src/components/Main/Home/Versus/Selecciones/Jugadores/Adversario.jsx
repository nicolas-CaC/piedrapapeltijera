import { useEffect } from "react"

export const Adversario = ({ opciones, adversarioFn }) => {

    const random = Math.floor(Math.random() * opciones.length)
    const opcionRandom = opciones[random]

    useEffect(() => {
        adversarioFn(opcionRandom)
    }, [adversarioFn, opcionRandom])


    return (
        <>
            <h2>La PC eligió:</h2>
            <h1 className="fw-bold bg-dark text-light shadow">
                { opcionRandom }
            </h1>
        </>
    )
}