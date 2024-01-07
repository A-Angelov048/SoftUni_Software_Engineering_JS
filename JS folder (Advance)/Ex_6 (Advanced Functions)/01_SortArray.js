function sortArr(arr, string) {

    let sort = string === 'asc' ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
    return sort;
}

sortArr([14, 7, 17, 6, 8], 'asc')
sortArr([14, 7, 17, 6, 8], 'desc')