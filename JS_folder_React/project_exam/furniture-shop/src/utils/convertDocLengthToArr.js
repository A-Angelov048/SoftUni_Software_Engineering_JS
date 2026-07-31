export function convertDocLengthToArr(lengthDocuments, itemsOnView) {
  const pages = Math.ceil(lengthDocuments / itemsOnView);

  const arrayPages = [];

  for (let i = 1; i <= pages; i++) {
    arrayPages.push(i);
  }

  return arrayPages;
}
