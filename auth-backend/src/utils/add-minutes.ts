export function addMinutes(date: Date, minutes: number): Date {
  return new Date(date.getMinutes() + minutes);
}
