
/*Map
The map() method is used for creating a new array from an existing one, 
applying a function to each one of the elements of the first array.*/

const numbers = [3, 7, 8, 9];
const doubled = numbers.map(item => item * 4);
console.log(doubled); // [12, 28, 32, 36]


/*Filter
The filter() method takes each element in an array and it applies a conditional statement against it. 
If this conditional returns true, the element gets pushed to the output array. 
If the condition returns false, the element does not get pushed to the output array.*/

// Filter () Methods examples

const numberss = [1, 2, 3, 4];
const evens = numberss.filter(item => item % 2 === 0);
console.log(evens); // [2, 4]


const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];
  
  const studentGrades = students.filter(student => student.grade >= 90);
  return studentGrades; 
  /* [ { name: 'Quincy', grade: 96 }, 
  { name: 'Alexis', grade: 100 }, 
  { name: 'Katie', grade: 90 } ] */

 
  // Reduce () Method


  const numbes = [1, 2, 3, 4];
  const sum = numbes.reduce(function (result, item) {
  return result + item;
  }, 0);
  console.log(sum); // 10
 
 
 
  let pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

  let petCounts = pets.reduce(function(obj, pet){
      if (!obj[pet]) {
          obj[pet] = 1;
      } else {
          obj[pet]++;
      }
      return obj;
  }, {});
  
  console.log(petCounts); 
  
  /*
  Output:
   { 
      dog: 2, 
      chicken: 3, 
      cat: 1, 
      rabbit: 1 
   }
   */

