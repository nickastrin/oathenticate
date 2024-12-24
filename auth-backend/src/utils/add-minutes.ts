export function addMinutes(date: Date, minutes: number): Date {
  const newDate = new Date(date);
  newDate.setMinutes(date.getMinutes() + minutes);

  return newDate;
}
