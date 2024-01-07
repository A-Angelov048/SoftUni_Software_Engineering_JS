function search() {

   let searchText = document.getElementById('searchText').value;
   let towns = Array.from(document.querySelectorAll('#towns li'));
   let counter = 0;

   towns.forEach(element => {

      if (element.textContent.includes(searchText)) {
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
         counter++;
         return
      } else {
         element.style.fontWeight = '';
         element.style.textDecoration = '';
      }
   })

   document.getElementById('result').textContent = `${counter} matches found`
}
