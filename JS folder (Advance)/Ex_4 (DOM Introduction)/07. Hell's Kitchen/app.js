function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const input = document.querySelector('#inputs textarea');
   const bestRestaurant = document.querySelector('#bestRestaurant p');
   const bestRestaurantWorkers = document.querySelector('#workers p');

   function onClick() {

      const inputToArr = JSON.parse(input.value);
      const restaurantInfo = {};

      for (let line of inputToArr) {

         let averageSalary = 0;
         let [restaurant, workers] = line.split(' - ');
         workers = workers.split(', ');
         workers = workers.map(line => line.split(' '));

         for (let [worker, salary] of workers) {
            salary = Number(salary);
            averageSalary += salary;

            if (!restaurantInfo.hasOwnProperty(restaurant)) {
               restaurantInfo[restaurant] = [];
            }
            restaurantInfo[restaurant].push({ worker, salary })
         }

         if (restaurantInfo[restaurant].hasOwnProperty('averageSalary')) {
            restaurantInfo[restaurant]['averageSalary'] += averageSalary;
         } else {
            restaurantInfo[restaurant]['averageSalary'] = averageSalary;
         }
      }

      let workersSortSalary = Object.values(restaurantInfo);

      workersSortSalary.forEach(sorter => {
         sorter.sort((a, b) => b.salary - a.salary);
         sorter['averageSalary'] = sorter.averageSalary / sorter.length;
      });

      let sortAvgSalary = Object.entries(restaurantInfo).sort((a, b) => b[1].averageSalary - a[1].averageSalary);
      let best = sortAvgSalary[0];

      let workers = '';
      best[1].forEach(element => {
         workers += `Name: ${element.worker} With Salary: ${element.salary} `;
         return
      });

      bestRestaurant.textContent = `Name: ${best[0]} Average Salary: ${best[1].averageSalary.toFixed(2)} Best Salary: ${best[1][0].salary.toFixed(2)} `;
      bestRestaurantWorkers.textContent = workers;
   }
}