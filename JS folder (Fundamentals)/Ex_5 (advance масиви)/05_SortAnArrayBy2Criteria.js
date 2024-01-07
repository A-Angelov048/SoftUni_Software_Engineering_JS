function sortAnArrayBy2Criteria(arr) {

    let sortArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

    console.log(sortArr.join('\n'));
}

sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);