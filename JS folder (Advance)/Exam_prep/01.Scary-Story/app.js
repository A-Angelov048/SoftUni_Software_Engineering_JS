window.addEventListener("load", solve);

function solve() {

  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const ageInput = document.getElementById('age');
  const storyTitleInput = document.getElementById('story-title');
  const genreInput = document.getElementById('genre');
  const storyInput = document.getElementById('story');
  const preview = document.getElementById('preview-list');
  const divMain = document.getElementById('main');

  const publishButton = document.getElementById('form-btn');
  publishButton.disabled = false;
  publishButton.addEventListener('click', publish);

  function publish() {

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const age = ageInput.value;
    const storyTitle = storyTitleInput.value;
    const genre = genreInput.value;
    const story = storyInput.value;

    if (!firstName || !lastName || !age || !storyTitle || !story) return

    const appendLiToUl = createLi();
    preview.appendChild(appendLiToUl);
    publishButton.disabled = true;
    deleteInputs();

    function createLi() {

      const createLi = document.createElement('li');
      const article = document.createElement('article');
      const h4 = document.createElement('h4');
      const pOne = document.createElement('p');
      const pTwo = document.createElement('p');
      const pThree = document.createElement('p');
      const pFour = document.createElement('p');

      const buttonSave = document.createElement('button');
      const buttonEdit = document.createElement('button');
      const buttonDelete = document.createElement('button');

      createLi.className = 'story-info';
      buttonSave.className = 'save-btn';
      buttonEdit.className = 'edit-btn';
      buttonDelete.className = 'delete-btn';

      h4.textContent = `Name: ${firstName} ${lastName}`;
      pOne.textContent = `Age: ${age}`;
      pTwo.textContent = `Title: ${storyTitle}`;
      pThree.textContent = `Genre: ${genre}`;
      pFour.textContent = story;
      buttonSave.textContent = 'Save Story';
      buttonEdit.textContent = 'Edit Story';
      buttonDelete.textContent = 'Delete Story';

      buttonSave.addEventListener('click', saveStory);
      buttonEdit.addEventListener('click', editStory);
      buttonDelete.addEventListener('click', deleteStory);

      article.appendChild(h4);
      article.appendChild(pOne);
      article.appendChild(pTwo);
      article.appendChild(pThree);
      article.appendChild(pFour);
      createLi.appendChild(article);
      createLi.appendChild(buttonEdit);
      createLi.appendChild(buttonSave);
      createLi.appendChild(buttonDelete);

      return createLi
    }
    function saveStory() {
      divMain.innerHTML = "";

      const createH1 = document.createElement('h1');
      createH1.textContent = 'Your scary story is saved!';

      divMain.appendChild(createH1);

    }
    function editStory(event) {

      const liRemove = event.target.parentNode;
      liRemove.remove();

      publishButton.disabled = false;

      firstNameInput.value = firstName;
      lastNameInput.value = lastName;
      ageInput.value = age;
      storyTitleInput.value = storyTitle;
      genreInput.value = genre;
      storyInput.value = story;
    }
    function deleteStory(event) {
      const liRemove = event.target.parentNode;
      liRemove.remove()
      publishButton.disabled = false;
    }
    function deleteInputs() {
      firstNameInput.value = '';
      lastNameInput.value = '';
      ageInput.value = '';
      storyTitleInput.value = '';
      storyInput.value = '';
    }
  }
}
