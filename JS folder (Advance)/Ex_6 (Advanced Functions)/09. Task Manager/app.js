function solve() {

    const formRef = document.querySelector('form');
    formRef.addEventListener('submit', addTask);

    const inputTask = document.querySelector('#task');
    const inputDescription = document.querySelector('#description');
    const inputData = document.querySelector('#date');
    const orangeSection = document.querySelectorAll('section')[1].children[1];
    const yellowSection = document.querySelectorAll('section')[2].children[1];
    const greenSection = document.querySelectorAll('section')[3].children[1];

    function addTask(event) {

        event.preventDefault();

        const task = inputTask.value;
        const description = inputDescription.value;
        const data = inputData.value;

        if (!task || !description || !data) { return }

        let article = createArticle(task, description, data);
        orangeSection.appendChild(article);
        inputTask.value = '';
        inputDescription.value = '';
        inputData.value = '';
    }

    function createArticle(task, description, data) {

        const article = document.createElement('article');

        const h3Task = document.createElement('h3')
        h3Task.textContent = task;

        const pDescription = document.createElement('p')
        pDescription.textContent = `Description: ${description}`;

        const pData = document.createElement('p')
        pData.textContent = `Due Date: ${data}`;

        const div = document.createElement('div');
        div.className = 'flex';
        const buttonGreen = document.createElement('button');
        const buttonRed = document.createElement('button');
        buttonGreen.className = 'green';
        buttonRed.className = 'red';
        buttonGreen.textContent = 'Start';
        buttonRed.textContent = 'Delete';
        div.appendChild(buttonGreen);
        div.appendChild(buttonRed);

        article.appendChild(h3Task)
        article.appendChild(pDescription)
        article.appendChild(pData)
        article.appendChild(div)
        article.querySelector('.green').addEventListener('click', inProgress);
        article.querySelector('.red').addEventListener('click', deleteArticle);
        return article;
    }
    function deleteArticle(event) {
        const articleToRemove = event.target.parentNode.parentNode;
        articleToRemove.remove();
    }
    function inProgress(event) { 
        const articleMove = event.target.parentNode.parentNode;
        const buttons = articleMove.querySelectorAll('button');
        const deleteBtn = buttons[0];
        const finishBtn = buttons[1];
        finishBtn.textContent = 'Finish';
        finishBtn.className = 'orange';
        finishBtn.removeEventListener('click', deleteArticle);
        finishBtn.addEventListener('click', complete);

        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'red';
        deleteBtn.removeEventListener('click', inProgress);
        deleteBtn.addEventListener('click', deleteArticle);


        yellowSection.appendChild(articleMove);
    }
    function complete(event) {
        const articleMove = event.target.parentNode.parentNode;
        event.target.parentNode.remove();
        greenSection.appendChild(articleMove);
    }
}