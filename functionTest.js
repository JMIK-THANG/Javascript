//Task 1
// let even = function(num){ 


//  if(num % 2 !== 0){ 
//       console.log(`${num} is Odd`);
     
//  } else { 
//       console.log(`${num} is Even`);
//  }
// }
// even(5); 

// Task 2

// let gradeChecker = function(num){ 


//       if(num >=90 || num <= 100){ 
//             return 'A'; 
//             // console.log('A');
//       }
//       else if(num >=80 || num <= 89){ 
//             return 'B'; 
//       }
//       else if(num >=70 || num <= 79){ 
//             return 'C'; 
//       }
//       else if(num >=60 || num <= 69){ 
//             return 'D'; 
//       } else { 
//             return 'Fail'; 
//       }
      
// }
// let result = gradeChecker(30); 
// console.log(result);

// Task 3 
// let dayOfWeek = parseInt(prompt('Enter number 1-7: ')); 

// switch(dayOfWeek){ 
//       case 1:
//             console.log("Sunday");
//             break; 
//       case 2:
//             console.log("Monday");
//             break; 
//       case 3:
//             console.log("Tuesday");
//             break; 
//       case 4:
//             console.log("Wednesday");
//             break; 
//       case 5:
//             console.log("Thursday");
//             break; 
//       case 6:
//             console.log("Friday");
//             break; 
//       case 7:
//             console.log("Saturday");
//             break; 
// }

// 
// task 4 

// let calculateFactorial = function(num){ 

//       let fact = 0; 
//       for(let i=num; i>0; i--){ 

//             fact +=i; 
//       }
//       console.log(fact);
// }
//  calculateFactorial(6)

// Task 5 ReverseString 

// let reverseString = function(str){ 

//       let s = str.split(''); 
    
//       let reverse = s.reverse().join(' ')
//       console.log(reverse);
// }

// reverseString("Hello World"); 
// 
// Task 6 PowerOfTwo --------- Q

// let powerOfTwo = function(num){ 

//       while(num > 1){ 
// console.log(num);
//             if(num % 2 !== 0 ){ 
//                   return false; 
//             }
//             num = num / 2; 
//             console.log(num + 'after');
//       }
//      return true; 
// }
// console.log(powerOfTwo(8));
// Task 7 CountVowels


// let countVowels = function(str){ 
//       let vowels = 'aeiou';
//       let count = 0; 

//       for(let i=0; i<str.length; i++){ 
//             if(vowels.indexOf(str[i].toLowerCase() ) !== -1){ 
//                   count++; 
//             }
//       }
//       return `${str} has ${count} vowels in it.`
// }
// const result = countVowels("what are you doing")
// console.log(result);


// Task 8 Palindrome

// let palindrom = function (str){ 

//       let lastChar = str.length-1; 
//       str= str.toLowerCase(); 
   

//       for(let i=0; i<str.length; i++){ 

//             if(str[i] !== str[lastChar-i]){ 

//                   return false; 
//             }
//       }
//       return true; 
// }
// let result = palindrom("Anna") 
// console.log(result);

// let palindrom = function (){ 
//       let rev = ''; 
//       let input = prompt("Enter a string: ").toLowerCase(); 

//       for(let i=input.length-1; i>=0; i--){ 
//             rev += input[i]; 
//       }
//       return rev == input;
// }
// console.log(palindrom()
// ); 
// Task 9 print Pattern ---------- Q

// let printPattern = function() { 
//       let userInput = parseInt(prompt("Enter number: "))
//       let star = ""; 
//       for(let i=0; i<= userInput; i++){ 

//             for(let j=0; j<i; j++){ 
//                   star += "* "; 
//             }
//             star +='\n';
//       }
// console.log(star);
// }
// printPattern()


