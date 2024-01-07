const form = document.querySelector('#form')
const result = document.querySelector('#result tbody');
const arrResult = [4, 3, 7]
form.addEventListener('submit', calc);

function solve() {

    debugger
    for (let line of arrResult) {
        const tr = document.createElement('tr');
        const td = document.createElement('td'); // Create a table cell
        td.innerHTML = line; // Use innerHTML instead of textContent
        tr.appendChild(td); // Append the cell to the row
        result.appendChild(tr)
    }

   
}
function calc(event) {
    event.preventDefault()
    debugger
    const formData = new FormData(event.target);
    let a = Number(formData.get('firstNumb'));
    let b = Number(formData.get('secondNumb'));
    let resultCalc = a + b;

    arrResult.push(resultCalc)
    console.log(solve);
    result.innerHTML = '';
    solve();
}


solve()