// Create a an array named marks , storing marks of 10 students
// And find out the sum ,average,minimum and maximum
// From the array
// Reverse the array

// const marks = [40, 50, 75, 12, 45, 12, 90, 89, 10, 100];


// let sum = 0;
// for (let i = 0; i < marks.length; i++) {

//       sum += marks[i]; // 0 40 sum = 40 s
// }

// let average = sum / marks.length;
// console.log(sum);
// console.log(average);

// let max = marks[0];

// for (let i = 0; i < marks.length; i++) {

//       let cv = marks[i];

//       if (cv > max) {
//             max = cv;
//       }

// }
// console.log(max);

// Minimum number
// let min = marks[0];

// for (let i = 0; i < marks.length; i++) {

//       let cv = marks[i];

//       if (cv < min) {
//             min = cv;
//       }

// }
// console.log(min);

// let len = marks.length;
// console.log(len);
// let lastChar = marks.length - 1;
// console.log(marks[lastChar]);


// Reverse array
// let arr = [10,13,17,34,18,41]; 
// let newArr = [];
// for (let i = arr.length-1; i >= 0; i--) {  // len = 10; last =100

//       newArr.push(arr[i])
// }
// console.log(newArr);


// Passstudent Mark
// let passedStudent = [];

// for(let i=0; i<marks.length; i++){ 

//       if(marks[i] >= 50){ 
//             passedStudent.push(marks[i])
//       }

// }
// console.log(passedStudent);


// let i = 0;
// while (i < marks.length) {

//       if(marks[i] >= 50){ 
//             passedStudent.push(marks[i]);
//       }
//       i++;
// }
// console.log(passedStudent);



// var numMark = [12,43,23,34,56,23,12,4534,6,34,2334];

// console.log(marks.includes(12)) // search item
// console.log(marks.includes(12,3)) // search item , search index (inclusive)


// numMark.splice(1,0,"rohan") // index , delete count , items...
// console.log(numMark);
// numMark.splice(1,2,"rohan","jmik") // index , delete count , items...
// console.log(numMark);
//  numMark.splice(1,4,"rohan","jmik") // index , delete count , items...
//  console.log(numMark);