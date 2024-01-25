// BAsic for loop 

//  TAsk 1
// for(let i=1; i<=5; i++){
//       console.log(i);
// }

// Task 2 

// for(let i=10; i>=1; i--) {
//       console.log(i);
// }

// TAsk 3

// let sum = function(num1,num2) { 
//       return num1+num2; 
// }
// let result = sum(3,4); 
// console.log(result);
// 

// TAsk 4 starPattern


// let userNum = parseInt(prompt('Enter number: '));
// let star = ''; 

// for(let i=0; i<=userNum; i++){ 

//       for(let j=0; j<i; j++){

//             star += "* "; 
//       }
//       star += '\n'; 

// }
// console.log(star);

// Task 5. While loop with User Input

// let sum = 0; 
// let userInput = parseInt(prompt('Pleae enter number and -1 to exit:')) ;

// while(userInput >= 0){ 

//       sum += userInput; 
      
//       userInput =  parseInt(prompt('Pleae enter number and -1 to exit:'))
// }
// console.log(sum);
// Task 6. Function with condition

// let evenOdd = function(num){ 

//       if(num % 2 !== 0){ 
//             console.log(`${num} is odd number`);
//       } else { 
//             console.log(`${num} is even number`);
//       }
// }
// evenOdd(2)

// Task 7. Reverse Loop

// for(let i = 10; i>0; i--){ 
//       console.log(i);
// }


// Task 8. Function with loop
// let multiplication = function (num){ 
//      
//       for(let i=0; i<10; i++) { 
            
//             console.log(`${num} x ${i} = ${num*i}`);
//       }
// }
// multiplication(3)
// Task 9. While loop with break statement

// for(let i=1; i<=10; i++) { 

//       if(i>5){ 
//             break; 
//       }
//       console.log(i);
// }

// Task 10. Design two functions Square and Cube 

// let square = function (num){ 
//       return num*num; 
      
// }


// let tube = (function(num){ 
//       return num*num*num; 
      
// })

// let do_math = function(){

//       let numsquare = square(3);
//       console.log(numsquare);
//       let numtube = tube(5)
//       console.log(numtube);

// }
// do_math()