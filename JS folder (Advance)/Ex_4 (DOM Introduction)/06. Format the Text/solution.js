// function solve() { // with DOM....

//   const textInput = document.getElementById('input').value;
//   const output = document.getElementById('output');
//   let textInputToArr = textInput.split('.')

//   let text = '';
//   let counter = 0;

//   for (let i = 0; i < textInputToArr.length - 1; i++) {

//     text += textInputToArr[i] + '.';
//     counter++;
//     if (counter === 3) {
//       let paraElement = document.createElement('p');
//       let node = document.createTextNode(text);
//       paraElement.appendChild(node);
//       output.appendChild(paraElement);

//       counter = 0
//       text = '';
//     }
//   }

//   if (counter !== 0 && counter < 3) {
//     let paraElement = document.createElement('p');
//     let node = document.createTextNode(text);
//     paraElement.appendChild(node);
//     output.appendChild(paraElement);
//   }
// }

'======================================================================'

function solve() { // with innerHTML....

  const textInput = document.getElementById('input').value;
  const output = document.getElementById('output');
  let textInputToArr = textInput.split('.')

  let text = '';
  let counter = 0;

  for (let i = 0; i < textInputToArr.length - 1; i++) {

    text += textInputToArr[i] + '.';
    counter++;
    if (counter === 3) {
      output.innerHTML += `<p>${text}</p>`;
      counter = 0
      text = '';
    }
  }
  if (counter !== 0 && counter < 3) {
    output.innerHTML += `<p>${text}</p>`
  }
}

'====================================================================='

// function solve() { // other with HTML.....
//   let inputStr = document.getElementById('input').value;
//   let output = document.getElementById('output');

//   let input = inputStr.split('.').filter((p) => p.length > 0);

//   for (let i = 0; i < input.length; i += 3) {
//     debugger
//     let arr = [];
//     for (let y = 0; y < 3; y++) {
//       if (input[i + y]) {
//         arr.push(input[i + y]);
//       }
//     }
//     let paragraph = arr.join('. ') + '.';
//     output.innerHTML += `<p>${paragraph}</p>`;
//   }
// }
