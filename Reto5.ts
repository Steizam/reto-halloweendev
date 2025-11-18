function changeLock(current: string, target: string): number {
    let totalMoves: number = 0;

    // Iterar sobre las 4 ruedas (índices 0 a 3)
    for (let i = 0; i < 4; i++) {
        // Convertir los caracteres a números enteros
        const currentDigit: number = parseInt(current[i]);
        const targetDigit: number = parseInt(target[i]);

        // 1. Calcular la diferencia absoluta (distancia lineal)
        const diff: number = Math.abs(currentDigit - targetDigit);

        // 2. Determinar el camino más corto (distancia circular)
        // El camino más corto es 'diff' (moviéndose linealmente) 
        // o '10 - diff' (moviéndose en la dirección opuesta a través del 0/9)
        const minMoves: number = Math.min(diff, 10 - diff);

        // 3. Sumar al total
        totalMoves += minMoves;
    }

    return totalMoves;
}