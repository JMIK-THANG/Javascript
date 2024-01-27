// Task 1: Basic forEAch 

// const printArrayElements = ["flower","bottle","book","mobile"]; 

// printArrayElements.forEach(function(ele){ 

//       console.log(ele);
// })
//Task 2: Square each element

// const squareArrayElements = [2,3,4,5,6];

// let squareArray = []; 
// squareArrayElements.forEach(function(square){ 
//       squareArray.push(square*square)

// })
// console.log(squareArray);

// Task 3: Filtering with forEach

// const filterEvenNumbers = [1,38,4,3,90,23,86]; 


// filterEvenNumbers.forEach(function(num){ 

//       if(num % 2 == 0){ 
//             console.log(num); ;
//       } 
// })

// Task 4: Sum using forEach
// const calculateSum = [2, 8, 3, 5, 6, 12, 4];
// let sum = 0;
// calculateSum.forEach(function (add) {

//       sum += add;
//       // console.log(sum);
//  })

// console.log(sum);

// Task 5: Looping with for
// const reverseArray = [2,4,5,6,7,9]; 

// let newReverseArrray = []; 
// for(let i=reverseArray.length-1; i>=0; i--){
//       newReverseArrray.push(reverseArray[i])
// }
// console.log(newReverseArrray);

// Task 6:Mapping with map[]

// const doubleArray = [2,4,6,8]; 
// let double = []; 
// doubleArray.map(function(num){ 
// double.push(num*2)
// })
// console.log(double);

// Task 7: Filtering with filter
// const filterOddNumbers = [12,3,76,34,5,76];
// let oddArray = [];
// filterOddNumbers.filter(function(odd){ 
// if(odd % 2 !== 0){
//       oddArray.push(odd)
// }
// })
// console.log(oddArray);

// Task 8: Chaining Array Methods


// Task 9: Manipulatig Array using push and pop

// const ManipulatingArray = ["Animal","People","Error","Syntax"]; 

// ManipulatingArray.push('bug')
// ManipulatingArray.pop()
// console.log(ManipulatingArray);

// Task 10: Find Index using indexOf

      // function findElementIndex(arr,element){ 

      //       return arr.indexOf(element)
      // }

      // let result = findElementIndex(["house","glass","water"],'water');
      // console.log(result);
// Task 14: ARray concatenation

      // function arrayConcatenation(arr1,arr2){ 
      //       return arr1.concat(arr2); 
      // }
      // let result = arrayConcatenation(["Hello","Hi"],["Morning","Evening"]); 
      // console.log(result);
// TAsk 11: Array Element Existence

// function isElementPresent(arr,element){ 
//       // return arr.includes(element)
//       return arr.indexOf(element) !== -1;
// }
// let result = isElementPresent(["girl","boy","people"],'girl'); 

// console.log(result);
// function concateArrays(arr,arr1){ 

//      return arr.concat(arr1);

// }
// let result = concateArrays(['dog','animal',"water"],['house',"glass","sun"]); 
// console.log(result);

// Task 12: Array Slice 

// function modifyArray(arr,start,end){ 

//       return arr.slice(start,end);
// }
//  let res = modifyArray([10,20,23,89,30,40,50],1,3)
//  console.log(res);

// Task 13: Array Splice

// function arraySplice(arr){ 

//       arr.splice(2,2, "X","Y");
// }

// let arr = ["A","B","C","D","E"];
//  arraySplice(arr)
// console.log(arr);   


// Task 15: Finding Maximum Value 


// function findingMaximumValue(number){ 
//       let max = number[0]; 

// number.forEach(function(current){ 

//       if(current>max){ 
//             max = current; 
//       }
// })
// return max; 
// }
// let result = findingMaximumValue([1,2,3,4,5]);

// console.log(result);