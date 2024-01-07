function create(words) {

   const content = document.getElementById('content');

   for (let word of words) {

      let div = document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.style.display = 'none';
      paragraph.textContent = word;

      div.addEventListener('click', onClick);

      div.appendChild(paragraph);
      content.appendChild(div);
   }

   function onClick(e) {
      e.currentTarget.children[0].style.display = 'block';
   }
}