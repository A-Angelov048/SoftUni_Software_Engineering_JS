function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      let inputText = document.getElementById('searchField').value;
      const tableRow = Array.from(document.querySelectorAll('tbody tr'));

      for (let row of tableRow) {
         let curRow = Array.from(row.querySelectorAll('td'));

         for (let line of curRow) {
            if (line.textContent.includes(inputText)) {
               row.classList.add('select');
               break;
            } else {
               row.classList.remove('select');
            }
         }
      }
      document.getElementById('searchField').value = ''
   }
}