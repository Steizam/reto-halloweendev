function countSheep(letters: string): number {
  // Your code here...
  const target = "sheep";

  // Función auxiliar para contar letras
  const countLetters = (str: string) => {
    const counts: Record<string, number> = {};
    for (const char of str) {
      // Solo contamos letras (ignoramos números u otros caracteres)
      if (/[a-z]/i.test(char)) {
        const lower = char.toLowerCase();
        counts[lower] = (counts[lower] || 0) + 1;
      }
    }
    return counts;
  };

  const targetCount = countLetters(target);
  const inputCount = countLetters(letters);

  let minCount = Infinity;
  for (const letter in targetCount) {
    const available = inputCount[letter] || 0;
    const needed = targetCount[letter];
    const possible = Math.floor(available / needed);
    minCount = Math.min(minCount, possible);
  }

  return minCount === Infinity ? 0 : minCount;
}

console.log(countSheep('sh9eepxsheepy')); // → 2
console.log(countSheep('sshhheeeepppp')); // → 2
console.log(countSheep('hola'));          // → 0
console.log(countSheep('peesh'));         // → 1