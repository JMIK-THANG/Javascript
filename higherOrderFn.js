const marks = [12,23,19,21]; 
let sum= 0; 
 
marks.forEach(function(mark){ 
      sum += mark;
     
      
})
let average = sum/marks.length;
// console.log(sum);
// console.log(average);

let max = marks[0]; 

marks.forEach(function(currentValue){ 
      if(currentValue > max){ 
             max = currentValue ; 
            
      }
})
console.log(max + " Maximum");

let min = marks[0]; 

marks.forEach(function(currentValue){ 
      if(currentValue < min){ 
             min = currentValue ; 
            
      }
})
console.log(min + " Maximum");


let odd = []; 
let sumOdd = 0; 
let even = []; 
let sumEven = 0; 

marks.forEach(function(num){ 
      if(num%2 == 0){ 
            even.push(num)
            sumEven += num; 
      } else { 
            odd.push(num); 
            sumOdd += num; 
      }
})
let aveEven = sumEven/even.length;

console.log(aveEven);
let aveOdd = sumOdd/odd.length; 
console.log(aveOdd);

// console.log(even + "Even number");
// console.log(odd);
// console.log(sumOdd);
// console.log(sumEven);



