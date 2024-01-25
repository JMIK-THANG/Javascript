// Task 1: 
// const num = parseInt(prompt("Enter number: ")); 

// if(num >0 ){ 
//   console.log('Postive');
// }
//   else if(num < 0){ 
//         console.log("Negative");
//   }

//  else { 
//       console.log('It is zero');
// }

//  Task 2 

// const age = parseInt(prompt("enter your age")); 

// if( age >= 18) { 
//       console.log('You are eligible to vote');
// } else { 
//       console.log("You are not eligivle to vote yet");
// }

// Task 3

// const year = parseInt(prompt('Enter the year: '));

// if (year % 4 == 0) {

//       if( year % 100 == 0){ 
//             console.log("Not a Leap Year");


//             if ( year % 400 == 0){ 

//                   console.log("Leap Year");
//             } else { 
//                   console.log('Not a leap yea4r');
//             }
//       } else{ 
//             console.log("Leap Year");
//       }
// } else {
//       console.log('Not a leap year');
// }

// Task 4
// < 90 Acute 
// == 90 Right 
// < 180 Obtuse

// const angle = parseInt(prompt('Enter of Triangle'))

// if(angle < 90){ 
//       console.log('acute angle');
// }
// else if(angle == 90){ 
//       console.log("Right angle");
// } else if(angle < 180){ 
//       console.log('Obtuse Angle');
// } else { 
//       console.log('Straight');
// }

// Task 5

// const userInput1 = prompt('Enter the operations'); 
// let x = 2; 
// let y = 2;

// if(userInput1 == '+'){ 
//       console.log(x+y);
// } else if(userInput1 == '-'){ 
//       console.log(x-y);

// } else if(userInput1 == '/'){ 
//       console.log(x/y);

// } else if(userInput1 == '*'){ 
//       console.log(x*y);

// } else if(userInput1 == '%'){ 
//       console.log(x%y);
// }

// Task 6

// const vowel = prompt('Enter A character:  '); 

// let char  = vowel.toLowerCase(); 
// if(char == 'a' || char == 'e' || char == 'i'|| 
// char == 'o' || char == 'u'){ 
//       console.log("Vowel");
// } else { 
//       console.log('Consonant');
// }
//  Task 7

// var price = parseInt(prompt('Enter The price of the product: ')); 
// var quantity = parseInt(prompt('Enter the quantity: ')); 

// var discountedPrice = price; 

// if(quantity > 10){ 
//       discountedPrice *= 0.9; 
// }
// console.log(`The total cost is ${discountedPrice*quantity}`);



// Task 9
// const grade = parseInt(prompt('Enter your grade:  ')); 

//  if(grade >= 90 && grade <= 100){ 
//        console.log('A');
//  } else if(grade>=80 && grade<90){ 
//        console.log('B');

//  } else if(grade>=70 && grade<80){ 
//        console.log('C');

//  } else if(grade>=60 && grade<70){ 
//        console.log('D');

//  } else if(grade>=50 && grade<60){ 
//        console.log('F');
//  } else { 
//        console.log('Not valid grade');
//  }
// Task 10

// const day = parseInt(prompt('Enter number between 1-7'));

// switch(day){ 
//       case 1:
//             console.log('Sunday');
//             break; 

//       case 2:
//             console.log('Monday');
//             break; 

//       case 3:
//             console.log('Tuesday');
//             break; 

//       case 4:
//             console.log('Wednesday');
//             break; 

//       case 5:
//             console.log('Thursday');
//             break; 

//       case 6:
//             console.log('Friday');
//             break; 
// }

// const day2 = prompt('Enter day:  '); 

// if(day2 == 1){ 
//       console.log("Sunday");
// } else if(day2 == 2){ 
//       console.log('Monday');

// } else if(day2 == 4){ 
//       console.log('Tuesday');

// } else if(day2 == 5){ 
//       console.log('Wednesday');

// } else if(day2 == 6){ 
//       console.log('Thursday');
// } else if (day2 == 7) { 
//       console.log('Friday');
// }

// Task 11

// let num1 = parseInt(prompt('Enter num: ')); 
// let num2 = parseInt(prompt('Enter num1: ')); 
// let num3 = parseInt(prompt('Enter num2: ')); 

// let largest; 

// if(num1 >= num2 && num1 >=num3) { 
//       largest = num1; 
// } else if(num2 >= num3 && num2 >= num1){ 
//   largest = num2;      
// } else { 
//       largest = num3; 
// }
// console.log(largest);

// Task 13

// let base = parseInt(prompt('Enter base for Triangel:')); 
// let height = parseInt(prompt('Enter the hight of Triangle: '))

// let areaOfTriangle =(base*height)/2; 

// console.log(areaOfTriangle);2

// let length = parseInt(prompt('Enter the length of Rectangle: ')); 
// let width = parseInt(prompt('Enter the width of Rectangle: ')); 

// let areaOfRectangle = length*width; 

// console.log(areaOfRectangle);

// let radius = parseInt(prompt('Enter radius: ')); 
// let areaOfCircle = 3.14 *radius*radius; 

// console.log(`Area of Circle is: ${areaOfCircle}`);

// var table = parseInt(prompt("Enter number: ")) ; 
// for(let i =1; i<=10; i++){ 

//       console.log(table*i);
// }

// Task 15

let num1 = parseInt(prompt('Enter first number: '));
let num2 = parseInt(prompt('Enter second number: '));
let operator = prompt('Enter any operator: (+, _, * or /)');


switch (operator) {

      case '+':
            console.log(num1 + num2);
            break;
      case '-':
            console.log(num1 - num2);
            break;
      case '*':
            console.log(num1 * num2);
            break;
      case '/':
            console.log(num1 / num2);
            break; 

}


