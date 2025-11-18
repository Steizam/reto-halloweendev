function surviveRoulette(n: number, k: number): number {
    // 1. Inicializar la lista de víctimas con sus posiciones originales (0 a N-1)
    const victims: number[] = [];
    for (let i = 0; i < n; i++) {
        victims.push(i);
    }

    // El índice actual donde comienza la cuenta
    let currentIndex: number = 0;

    // Continuar el juego hasta que sólo quede una víctima
    while (victims.length > 1) {
        const size: number = victims.length;

        // Calcular la posición a eliminar.
        // Se suma (k - 1) porque el conteo comienza en la persona actual.
        // Se aplica el módulo (%) para el movimiento circular en la lista.
        // El resultado es el índice DENTRO de la lista 'victims' que debe ser eliminado.
        const removalIndex: number = (currentIndex + (k - 1)) % size;

        // Eliminar a la víctima del array
        victims.splice(removalIndex, 1);

        // La siguiente cuenta comienza desde la posición siguiente a la eliminada.
        // Como 'splice' mueve automáticamente a la siguiente víctima a la posición 
        // de la víctima eliminada, el 'currentIndex' ya apunta al lugar correcto.
        // Solo necesitamos usar el módulo si el removalIndex fue el último de la lista.
        currentIndex = removalIndex % victims.length;
    }

    // El único elemento restante es el sobreviviente
    return victims[0];
}