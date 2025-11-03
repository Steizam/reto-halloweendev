function translatePossessed(message: string): string {
  // Si la cadena está vacía o solo tiene espacios, devolvemos cadena vacía
  if (!message.trim()) return '';

  // Split por espacios (preserva múltiples espacios como tokens vacíos),
  // invertir los caracteres de cada token/palabra y luego unir con ' '.
  return message
    .split(' ')
    .map(token => token.split('').reverse().join(''))
    .join(' ');
}

// Ejemplo
const message = 'i yojne gnihctaw uoy';

console.log(translatePossessed(message)); // "i enjoy watching you"
console.log(translatePossessed(""));             // ''
console.log(translatePossessed("   "));          // ''
console.log(translatePossessed("!dlroW olleH")); // "Hello World!"