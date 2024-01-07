(function solution() {

    Array.prototype.last = function () {
      return this[this.length - 1];
    };
  
    Array.prototype.skip = function (n) {
      const results = [];
      for (let index = n; index < this.length; index++) {
        results.push(this[index]);
      }
  
      return results;
    };
  
    Array.prototype.take = function (n) {
      const results = [];
      for (let index = 0; index < n; index++) {
        results.push(this[index]);
      }
  
      return results;
    };
  
    Array.prototype.sum = function () {
      let sum = 0;
      for (let index = 0; index < this.length; index++) {
        sum += this[index];
      }
      return sum;
    };

    Array.prototype.average = function () {
      return this.sum() / this.length;
    };
  })();
  






  
  const arr = [1, 2, 3, 4, 5];
  const lastEl = arr.last();
  console.log(lastEl);
  
  const skippedColection = arr.skip(2);
  console.log(skippedColection);
  
  const takeCollection = arr.take(2);
  console.log(takeCollection);
  
  const summed = arr.sum();
  console.log(summed);
  
  const avg = arr.average();
  console.log(avg);