function translatePossessed(message: string): string {
  // Si la cadena está vacía o solo tiene espacios, devolvemos cadena vacía
  if (!message.trim()) return '';

  // Convertir a array, invertirlo y volver a unir
  return message.split('').reverse().join('');
}

// Ejemplo
const message = 'i yojne gnihctaw uoy';
console.log(translatePossessed(message)); // "i enjoy watching you"
console.log(translatePossessed(""));             // ''
console.log(translatePossessed("   "));          // ''
console.log(translatePossessed("!dlroW olleH")); // "Hello World!"
