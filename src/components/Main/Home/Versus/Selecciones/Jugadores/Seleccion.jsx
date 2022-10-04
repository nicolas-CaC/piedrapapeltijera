export const Jugador = ({ seleccion }) => {

    return (
        <>
            <h2>Tu Selección fue:</h2>
            <h1 className="fw-bold w-100 text-bg-warning shadow">{ seleccion }</h1>
        </>
    )
}
