function printHumanReadableDate(date: string | Date): string {
  const parsedDate = typeof date === "string" ? new Date(date) : date;

  return parsedDate.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long"
  });
}

console.log(printHumanReadableDate("2025-01-15T11:56:03.673Z"));
// "miércoles, 15 de enero"

console.log(printHumanReadableDate(new Date("2025-01-15T11:56:03.673Z")));
// "miércoles, 15 de enero"