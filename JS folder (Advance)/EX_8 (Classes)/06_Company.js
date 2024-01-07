class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department) { throw new Error('Invalid input!') }
        if (salary < 0) { throw new Error('Invalid input!') }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
            this.departments[department].averageSalary = 0;
        }
        this.departments[department].push({ name, salary, position, })
        this.departments[department].averageSalary += salary;
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestSalaryDepartment = Object.entries(this.departments)
            .map(x => {
                x[1].averageSalary = (x[1].averageSalary / x[1].length)
                return x;
            })
            .sort((a, b) => b[1].averageSalary - a[1].averageSalary)[0];

        bestSalaryDepartment[1].sort((a, b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name)
        })

        let result = [`Best Department is: ${bestSalaryDepartment[0]}`, `Average salary: ${bestSalaryDepartment[1].averageSalary.toFixed(2)}`];

        for (let line of bestSalaryDepartment[1]) {
            debugger
            result.push(`${line.name} ${line.salary} ${line.position}`);
        }
        return result.join('\n');
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
