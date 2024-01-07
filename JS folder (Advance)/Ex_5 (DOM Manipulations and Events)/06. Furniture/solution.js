function solve() {

  const generateButton = document.querySelectorAll('button')[0].addEventListener('click', generate);
  const buyButton = document.querySelectorAll('button')[1].addEventListener('click', buy);
  const input = document.querySelectorAll('textarea')[0];
  const output = document.querySelectorAll('textarea')[1];
  const table = document.getElementsByClassName('table')[0].querySelector('tbody');

  function generate() {

    const furnitureList = JSON.parse(input.value);
    for (let line of furnitureList) {

      table.innerHTML += `<tr>`+ 
      `<td><img src=${line.img}></td>`+
      `<td><p>${line.name}</p></td>`+
      `<td><p>${line.price}</p></td>`+
      `<td><p>${line.decFactor}</p></td>`+
      `<td><input type="checkbox"/></td>`+
      `</tr>`; // трябва елемнтите да са + един към друг.... Заради judge системата хваща празни места на html ако го няма знака +;
    }
  }

  function buy() {

    const checkbox = Array.from(document.querySelectorAll('input[type=checkbox]'));
    let nameResult = [];
    let totalPrice = [];
    let averageDecFactor = [];

    for (let line of checkbox) {
      
      if (line.checked) {
        let curLine = Array.from(line.parentElement.parentElement.querySelectorAll('td'));
        for (let i = 1; i < curLine.length - 1; i++) {
          let curInfo = curLine[i].querySelector('p').textContent;
          if (i === 1) {
            nameResult.push(curInfo);
          } else if (i === 2) {
            totalPrice.push(Number(curInfo));
          } else {
            averageDecFactor.push(Number(curInfo));
          }
        }
      }
    }

    totalPrice = totalPrice.reduce((a, b) => a + b);
    const resAverageDecFactor = averageDecFactor.reduce((a, b) => a + b) / averageDecFactor.length;

    output.value = `Bought furniture: ${nameResult.join(', ')}\n`;
    output.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    output.value += `Average decoration factor: ${resAverageDecFactor}`;
  }
}