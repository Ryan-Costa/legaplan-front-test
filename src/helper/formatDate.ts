export function formatDate(date: Date): {
  weekday: string;
  dayMonthYear: string;
} {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate = date.toLocaleDateString("pt-BR", options);

  const [weekday, dayMonthYear] = formattedDate.split(", ");

  return { weekday, dayMonthYear };
}
