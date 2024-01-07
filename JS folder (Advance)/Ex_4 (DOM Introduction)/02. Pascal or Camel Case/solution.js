function solve() {

  const text = document.getElementById('text').value.toLowerCase()
  const naming = document.getElementById('naming-convention').value;
  let result = '';

  let objFn = {
    'Camel Case': (text) => {
      let toArr = text.split(' ');
      result = toArr.shift();
      toArr.forEach(element => {
        result += element[0].toUpperCase() + element.substring(1);
      });
      return result;
    },
    'Pascal Case': (text) => {
      let toArr = text.split(' ');
      toArr.forEach(element => {
        result += element[0].toUpperCase() + element.substring(1);
      })
      return result;
    }

  }

  if (naming === 'Camel Case' || naming === 'Pascal Case') {
    objFn[naming](text)
    document.getElementById('result').textContent = result;
  } else {
    document.getElementById('result').textContent = 'Error!';
  }
}