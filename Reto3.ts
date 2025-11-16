function myersCalendar(year: number): string[] {
  // Consideramos válido un año entero entre 1 y 9999
  if (!Number.isInteger(year) || year < 1 || year > 9999) return [];

  const pad = (n: number) => String(n).padStart(2, '0');
  const format = (y: number, m: number, d: number) =>
    `${String(y).padStart(4, '0')}-${pad(m)}-${pad(d)}`;

  const dates: string[] = [];

  // Buscar todos los viernes 13 del año
  for (let month = 0; month < 12; month++) {
    const dt = new Date(Date.UTC(year, month, 13)); // usar UTC para evitar efectos de zona horaria
    if (dt.getUTCDay() === 5) { // 5 => Friday (0 = Sun, 1 = Mon, ..., 5 = Fri)
      dates.push(format(year, month + 1, 13));
    }
  }

  // Añadir 31 de octubre
  dates.push(format(year, 10, 31));

  // Ordenar cronológicamente (el formato YYYY-MM-DD permite sort lexicográfico)
  dates.sort();

  return dates;
}

console.log(myersCalendar(2025));
// → ['2025-06-13', '2025-09-13', '2025-10-31']

console.log(myersCalendar(2026));
// → ['2026-02-13', '2026-03-13', '2026-10-31', '2026-11-13']

console.log(myersCalendar(2024));
// → ['2024-09-13', '2024-10-31', '2024-12-13']