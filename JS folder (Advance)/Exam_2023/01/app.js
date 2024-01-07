window.addEventListener('load', solution);

function solution() {

  const employeeInput = document.getElementById('employee');
  const categoryInput = document.getElementById('category');
  const urgencyInput = document.getElementById('urgency');
  const assignedTeamInput = document.getElementById('team');
  const descriptionInput = document.getElementById('description');
  const preview = document.querySelector('.preview-list');
  const pending = document.querySelector('.pending-list');
  const resolved = document.querySelector('.resolved-list');

  const buttonAdd = document.getElementById('add-btn');
  buttonAdd.disabled = false
  buttonAdd.addEventListener('click', add);

  function add(event) {

    event.preventDefault()

    const employee = employeeInput.value;
    const category = categoryInput.value;
    const urgency = urgencyInput.value;
    const assignedTeam = assignedTeamInput.value;
    const description = descriptionInput.value;

    if (!employee || !category || !urgency || !assignedTeam || !description) return;

    const li = createLi();
    preview.appendChild(li);
    buttonAdd.disabled = true;
    deleteInputs();

    function createLi() {

      const createLi = document.createElement('li');
      const article = document.createElement('article');
      const pOne = document.createElement('p');
      const pTwo = document.createElement('p');
      const pThree = document.createElement('p');
      const pFour = document.createElement('p');
      const pFive = document.createElement('p');

      const buttonEdit = document.createElement('button');
      const buttonContinue = document.createElement('button');

      createLi.className = 'problem-content';
      buttonEdit.className = 'edit-btn';
      buttonContinue.className = 'continue-btn';

      pOne.textContent = `From: ${employee}`;
      pTwo.textContent = `Category: ${category}`;
      pThree.textContent = `Urgency: ${urgency}`;
      pFour.textContent = `Assigned to: ${assignedTeam}`;
      pFive.textContent = `Description: ${description}`;
      buttonEdit.textContent = 'Edit';
      buttonContinue.textContent = 'Continue';

      buttonEdit.addEventListener('click', editBtn);
      buttonContinue.addEventListener('click', continueBtn);

      article.appendChild(pOne);
      article.appendChild(pTwo);
      article.appendChild(pThree);
      article.appendChild(pFour);
      article.appendChild(pFive);
      createLi.appendChild(article);
      createLi.appendChild(buttonEdit);
      createLi.appendChild(buttonContinue);

      return createLi;
    }
    function editBtn(event) {
      
      const liRemove = event.target.parentNode;
      liRemove.remove();
      buttonAdd.disabled = false

      employeeInput.value = employee;
      categoryInput.value = category;
      urgencyInput.value = urgency;
      assignedTeamInput.value = assignedTeam;
      descriptionInput.value = description;
    }
    function continueBtn(event) {

      const li = event.target.parentNode;
      const buttonEdit = li.querySelector('.edit-btn');
      const buttonContinue = li.querySelector('.continue-btn');
      buttonEdit.remove();
      buttonContinue.remove();

      const buttonResolved = document.createElement('button');
      buttonResolved.className = 'resolve-btn';
      buttonResolved.textContent = 'Resolved';
      buttonResolved.addEventListener('click', resolvedBtn);

      li.appendChild(buttonResolved);
      pending.appendChild(li);
    }
    function resolvedBtn(event) {

      const li = event.target.parentNode;
      const buttonResolved = li.querySelector('.resolve-btn');
      buttonResolved.remove();

      const buttonClear = document.createElement('button');
      buttonClear.className = 'clear-btn';
      buttonClear.textContent = 'Clear';
      buttonClear.addEventListener('click', clear);

      li.appendChild(buttonClear);
      resolved.appendChild(li);
    }
    function clear(event) {
      const li = event.target.parentNode;
      li.remove();
    }
    function deleteInputs() {
      employeeInput.value = '';
      categoryInput.value = '';
      urgencyInput.value = '';
      assignedTeamInput.value = '';
      descriptionInput.value = '';
    }
  }
}




