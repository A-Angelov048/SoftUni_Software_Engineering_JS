export function convertDate(date) {
  const dateToConvert = new Date(date);

  return dateToConvert.toLocaleString();
}

export function convertDate2(date) {
  const dateToConvert = new Date(date);

  return dateToConvert.toLocaleDateString();
}

export function convertDateToString(date) {
  const dateToConvert = new Date(date);

  return dateToConvert.toDateString();
}
