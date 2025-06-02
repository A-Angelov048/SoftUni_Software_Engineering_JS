export function convertDocLengthToArr(lengthDocuments) {
  const pages = Math.ceil(lengthDocuments / 8);

  const arrayPages = [];

  for (let i = 1; i <= pages; i++) {
    arrayPages.push(i);
  }

  return arrayPages;
}
