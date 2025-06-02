export function convertDate(date) {
  const dateToConvert = new Date(date);

  return dateToConvert.toLocaleString();
}

export function convertDateToString(date) {
  const dateToConvert = new Date(date);

  return dateToConvert.toDateString();
}
