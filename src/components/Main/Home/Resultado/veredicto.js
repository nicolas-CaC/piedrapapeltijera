export const veredicto = {
    Piedra: {
        Piedra: ['Empate de piedras!', 'warning'],
        Papel: ['Pierdes, te envolvieron', 'danger'],
        Tijera: ['Ganas, rompes la tijera!', 'primary'],
    },
    Papel: {
        Piedra: ['Ganas, envuelves a la piedra', 'primary'],
        Papel: ['Empate de papeles!', 'warning'],
        Tijera: ['Pierdes, te corta la tijera!', 'danger'],
    },
    Tijera: {
        Piedra: ['Pierdes, te rompe la piedra!', 'danger'],
        Papel: ['Ganas, cortaste el papel!', 'primary'],
        Tijera: ['Empate de tijeras!', 'warning'],
    }
}