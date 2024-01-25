
// let num = 1 ; 

// while(num <= 100){ 

//       num++; 
//       if(num % 2 !== 0) { 
//             console.log(`Odd ${num}`);
//       } else if(num % 2 == 0){ 
//             console.log(`Even: ${num}`);
//       }
// }

// for(let i = 1; i<= 100; i++){ 
//        if(i % 3 == 0 && i % 5 == 0) {
//             console.log("Fizz Buzz");
//        }
//      else if(i % 3 == 0){ 
//             console.log("Fizz");
//       } else if(i % 5 == 0) { 
//             console.log("Buzz");
//       }  else { 
//              console.log(i);
//        }
// }

// Task 1

// let multiplicationTable = parseInt(prompt('Enter number: ')); 

// for(let i= 0; i<multiplicationTable; i++){ 

//       console.log(`${multiplicationTable} * ${i} = ${multiplicationTable*i}`);
// }
// Task 2 

// let a = 50; 
// let checkBolean = true; 
// let i = 2; 
// let sum = 0; 
// while(i <= 50){ 


// }
// let limit = 50; // Set your desired limit
// let sum = 0;
// let currentNumber = 2; // Start checking from 2

// while (currentNumber <= limit) {
//     let isPrime = true;

//     for (let i = 2; i <= Math.sqrt(currentNumber); i++) {
//         if (currentNumber % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         sum += currentNumber;
//     }

//     currentNumber++;
// }

// console.log(`Sum of prime numbers between 1 and ${limit}: ${sum}`);


// Task 3
// let choice; 
// let num1 = parseInt(prompt("Enter first number")); 

// let num2 = parseInt(prompt('Enter the second number')) ; 

// do{ 
//       choice =parseInt(prompt("Enter number: 1 = additin, 2 =subtraction, 3 = multiplication and 4 = division or 5 to extit ")); 

//       switch(choice){ 

//             case 1: 
//             console.log(num1+num2);
//             break ;
//             case 2: 
//             console.log(num1-num2);
//             break ;
//             case 3: 
//             console.log(num1*num2);
//             break ;
//             case 4: 
//             console.log(num1/num2);
//             break ;
//             case 5:
//                   console.log("You chose to exit:");
//                   break; 
//                   default:
//                         console.log("Not a valid choide");
//                         break ;


//       }

// }while(choice !=5); 

// Task 4 

// for(let i= 1 ; i<= 5; i++){ // 12345

//       for(let j = 1 ; j < 5; j++) { 
//             console.log();
//       }
// }
// let str = "Hello"; 

// let len = str.length; 
// console.log(len );
// console.log(len-1);
// for(let i = len-1; i>=0; i--){ // 4 > 0  3
//       console.log(str[i]);
// }

// Task 5 
// let num ; 

// while (num != 6){ 
//       num = Math.floor((Math.random()*6)+1); 
//       console.log(num);
// }
// alert("You got it right num:" + num)
// Task 7 

// let num = 10 ; 
// let fact = 0; 

// for(let i = num ; i>=1; i--){ 
//       fact += i; 
// }
// console.log(fact, num);

// Task 8

// let inputStr = prompt("Enter a string: "); // Hello

// let len = inputStr.length; 
// let reversedStr = ""; 
// let lastChar = len-1; 

// while(lastChar >= 0){
//       reversedStr += inputStr[lastChar]; // o l
//       lastChar--; 
// }
// console.log(reversedStr);

// Task 9

// let sum = 0; 
// let count = 0; 
// let number; 

// do{ 
//       number = parseInt(prompt('Enter number: ')); 

//       if(number >= 0){ 
//             sum += number; 
//             count++ ; 
//       }
// } while(number >= 0); 

// const average = sum/count; 
// console.log(sum , average, count);

// Task 11

// let sum = 0; 

// let numberInput = parseInt(prompt("Enter number: ")); // 345

// while(numberInput > 0 ){ 
//       let remainder = numberInput % 10; 
//       sum += remainder; 
//       numberInput = parseInt(numberInput / 10);
// }
// console.log(sum);

// Task 13
// let  rows = 5; 
// let star = '';
// for(let i = 1; i<= rows; i++){ 
//       for(let k=1; k<=(rows-i); k++){ 
//             star +=' '; 
//       }
//       for(let j = 1; j<=i; j++){ 
//             star +="* "
//       }
//       star += '\n'
// }
// console.log(star);

// Task 15

// let password = 'password123';
// let attempt = 0;
// let userPassword;

// do {
//       userPassword = prompt("Enter password: ");
//       attempt++;
//       if (userPassword !== password) {

//             console.log("Incorrect password");

//       } else {
//             console.log('logged in');

//       }
// } while (userPassword !== password && attempt < 3);