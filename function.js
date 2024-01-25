// weight (kg) / height (m)
// bmi = w / (h ** 2)

// < 18.5 => underweight
// 18.5-24.9 => normal weight
// 25- 29.9 => overweight
// > 30 => obesse



// function weightCalc(weight, height, name) {

     
//       while(name.length < 3){ // no.of lenght = 2 
           
//       name = prompt("Enter your name: ");
//       }

//       // let weight = parseInt(prompt("Enter your weight in KG; "));
//       // let height = parseFloat(prompt("Enter your height in meter: "));
//       let bmi = weight / (height ** 2);

//       if (bmi < 18.5) {
//             console.log(`Hello ${name} you are underweight as BMI is ${bmi}`);
//       } else if (bmi >= 18.5 && bmi <= 24.9) {
//             console.log(`You are normal weigth as your BMI is ${bmi}`);
//       } else if (bmi >= 25 && bmi <= 29.9) {
//             console.log(`YOu are overweight as you BMI is ${bmi}`);
//       } else {

//             console.log(`YOu are obbesse as you bmi is ${bmi}`);
//       }

// }

// weightCalc(80,1.8,'jo');

// function calculator(num1,num2,operator){ 

//       if(operator == '+'){ 
//             return num1+num2; 
//       } else if(operator == '-'){ 
//             return num1-num2; 
      
//       } else if(operator == '*'){ 
//             return num1*num2; 
//       }
//        else if(operator == '/'){ 
//             return num1/num2; 
//       }
//       else if(operator == '%'){ 
//             return num1%num2; 
//       }
// }
// const result = calculator(10,5,'+'); 
// console.log(result);

// calculator(10,10,'+')
// calculator(10,5,'*')
// calculator(10,5,'/')
// calculator(10,5,'%')

// function wordReversed(str){ 

//       let reverse = str.split(' '); 
//       console.log(reverse);
//       let newReverse = []; 
//       for(let i = str.length-1; i>=0; i--){ 

//             newReverse.push(reverse[i])
//             console.log(reverse[i]);
//       }
//       console.log(newReverse.join(" "));
      
// }

// wordReversed('hello world');

// ----------------------- Function Practice------------------

// Task 1. Simple ADdition
// function add(num1,num2){ 
//       return num1+num2; 

// }
// const result = add(2,2); 
// console.log(result);

// Task 2. Multiplicatin Table

// function Multiplication(n){ 
//       let count = 1; 
//       while(count<=10){ 
            
//             console.log(`${n}*${count} = ${n*count}`);
//        count++;
//       }
     
// }
// Multiplication(2)
// Multiplication(3)

// Task 3 REverse String

// function reverseStr(str){ 

//       console.log(str);
      
//       return str.split(" ").reverse().join(' '); 
// }
// const result = reverseStr('How are you!'); 
// console.log(result);

// Task 4  Check Even or Odd

// function isEven(num){ 

//       let check = true; 
//       if(num % 2 !== 0){ 
//             check = false; 
//       } 

// if(check == true){ 
//       console.log("Even");
// } else{ 
//       console.log('Odd');
// }
// }
// isEven(2)
// isEven(1)
// isEven(5)

// Task 5 Palindrome Check

// function isPalindrome(str){ 
//       let lastChar = str.length-1; 
//       str = str.toLowerCase(); 
//       console.log(lastChar);
      
//       for(let i=0; i<str.length; i++){ 

//             if(str[i] !== str[lastChar-i]){ 
//                   return false; 
//             }
//       }
//       return true; 
// }
// const result = isPalindrome("racecar")
// console.log(result);

// Task 6 Factorial

// function factorial(num){ 

// let fact = 0; 

// for(let i=num; i>=1; i--){ 
//       fact += i; 
// }
// return fact; 
// }
// const result = factorial(5)
// console.log(result);

//Task 7
// function vowelCount(str){ 
//       let vowel = 'aeiou'; 
//       let count = 0; 

//       for(let i=0; i<str.length; i++){

//             if(vowel.indexOf(str[i].toLowerCase()) > -1){ 
//                   count++;
//             }
//       }
      
//       return `The string has ${count} vowel in it`; 

// }

// const result = vowelCount('Hello World')
// console.log(result);

// TAsk 9
// Prime Number Check


// let check = true; 

// function primeCheck(num){ 

//             for(let i=2; i<num; i++){

      
//       if(num % i == 0){ 
//             console.log("not a prime number");
//             check = false; 
//             break;
//       }

     
//       if(check == true){ 
//             console.log(`${num} not a prime number`);
//       }
// }
// }

// primeCheck(5)
