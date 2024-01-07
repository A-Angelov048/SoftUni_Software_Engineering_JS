solve();

function solve() {

    const url = 'http://localhost:3030/jsonstore/collections/students/';
    const table = document.querySelector('tbody');
    document.querySelector('#form').addEventListener('submit', addStudent);
    extractsStudents()

    async function extractsStudents() {

        const response = await fetch(url);
        const data = await response.json();

        for (let line of Object.values(data)) {
            const row = createRow(line);
            table.appendChild(row);
        }
    }

    function createRow(data) {

        const tr = document.createElement('tr');
        const thFirstName = document.createElement('th');
        const thLastName = document.createElement('th');
        const thFacNumber = document.createElement('th');
        const thGrade = document.createElement('th');

        thFirstName.textContent = data.firstName;
        thLastName.textContent = data.lastName;
        thFacNumber.textContent = data.facultyNumber;
        thGrade.textContent = data.grade;

        tr.appendChild(thFirstName);
        tr.appendChild(thLastName);
        tr.appendChild(thFacNumber);
        tr.appendChild(thGrade);

        return tr;
    }

    async function addStudent(event) {

        event.preventDefault();

        class Students {
            constructor(firstName, lastName, facultyNumber, grade) {
                this.firstName = firstName;
                this.lastName = lastName;
                this.facultyNumber = facultyNumber;
                this.grade = grade;
            }
        }

        const form = new FormData(event.target);
        const newStudent = new Students(form.get('firstName'), form.get('lastName'), form.get('facultyNumber'), form.get('grade'));

        const response = await fetch(url, {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newStudent)
        })

        table.innerHTML = '';
        event.target.reset();
        extractsStudents()
    }
}