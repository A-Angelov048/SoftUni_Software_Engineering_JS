window.addEventListener("load", solve);

function solve() {

  let counter = 0;

  const inputFirstName = document.getElementById('first-name');
  const inputLastName = document.getElementById('last-name');
  const inputAge = document.getElementById('age');
  const inputGender = document.getElementById('genderSelect');
  const inputDishInfo = document.getElementById('task');
  const inProgress = document.getElementById('in-progress');
  const inProgressCounter = document.getElementById('progress-count');
  const finishedCooking = document.getElementById('finished');

  const submitButton = document.getElementById('form-btn').addEventListener('click', submit);
  const clearButton = document.getElementById('clear-btn');


  function submit() {

    const firstName = inputFirstName.value
    const lastName = inputLastName.value
    const age = inputAge.value
    const gender = inputGender.value
    const dishInfo = inputDishInfo.value
    clearButton.addEventListener('click', clear)

    if (!firstName || !lastName || !age || !dishInfo || !gender) { return };

    const li = createLi(firstName, lastName, age, gender, dishInfo);
    deleteInputs();
    inProgress.appendChild(li);

    function createLi(firstName, lastName, age, gender, dishInfo) {

      const liCreate = document.createElement('li');
      const articleCreate = document.createElement('article');
      const h4Create = document.createElement('h4');
      const pCreateOne = document.createElement('p');
      const pCreateTwo = document.createElement('p');
      const buttonCreateEdit = document.createElement('button');
      const buttonCreateComplete = document.createElement('button');

      liCreate.className = 'each-line';

      buttonCreateEdit.className = 'edit-btn';
      buttonCreateEdit.textContent = 'Edit';
      buttonCreateEdit.addEventListener('click', edit);

      buttonCreateComplete.className = 'complete-btn';
      buttonCreateComplete.textContent = 'Mark as complete';
      buttonCreateComplete.addEventListener('click', complete);

      h4Create.textContent = (`${firstName} ${lastName}`)
      pCreateOne.textContent = (`${gender}, ${age}`)
      pCreateTwo.textContent = (`Dish description: ${dishInfo}`)

      articleCreate.appendChild(h4Create);
      articleCreate.appendChild(pCreateOne);
      articleCreate.appendChild(pCreateTwo);
      articleCreate.appendChild(buttonCreateEdit);
      articleCreate.appendChild(buttonCreateComplete);
      liCreate.appendChild(articleCreate);
      counter++;
      counterDish()
      return liCreate;
    }
    function deleteInputs() {
      inputFirstName.value = '';
      inputLastName.value = '';
      inputAge.value = '';
      inputGender.value = ''
      inputDishInfo.value = '';
    }
    function counterDish() {
      inProgressCounter.textContent = counter;
    }
    function edit() {

      inputFirstName.value = firstName;
      inputLastName.value = lastName;
      inputAge.value = age;
      inputGender.value = gender;
      inputDishInfo.value = dishInfo;
      counter--;
      counterDish();
      li.remove();
    }
    function complete(event) {

      let li = event.target.parentNode.parentNode;
      let buttonEdit = li.querySelector('.edit-btn')
      buttonEdit.remove();
      let buttonComplete = li.querySelector('.complete-btn')
      buttonComplete.remove();
      counter--;
      counterDish();
      finishedCooking.appendChild(li);
    }
    function clear() {
      finishedCooking.innerHTML = ""
    }
  }
}





