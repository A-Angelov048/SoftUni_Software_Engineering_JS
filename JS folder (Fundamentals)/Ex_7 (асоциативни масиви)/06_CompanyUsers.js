function companyUsers(arr) {

    let inforCompany = {};

    for (let el of arr) {

        let [company, currEmployee] = el.split(' -> ');

        if (!inforCompany.hasOwnProperty(company)) {
            inforCompany[company] = [];
        }

        inforCompany[company].push(currEmployee)
    }

    let sort = Object.entries(inforCompany).sort((a, b) => a[0].localeCompare(b[0]))

    for (let el of sort) {
        console.log(el[0]);
        let set = new Set(el[1]);

        for (let i of set){
            console.log(`-- ${i}`);
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
])