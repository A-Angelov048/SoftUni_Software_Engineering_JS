function notify(message) {

  const divRef = document.getElementById('notification');
  divRef.style.display = 'block';
  divRef.textContent = message;
  divRef.addEventListener('click', hide);

  function hide(){
    divRef.style.display = 'none';
  }
}