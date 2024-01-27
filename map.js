let number = [2,3,4,6,8,10,12]; 

let newNumber = number.map(function(num){ 

      return num*2; 
})
console.log(newNumber);

let oddEven = number.map(function(num){ 

      return num % 2 == 0; 
})
console.log(oddEven);

let names = ["john","phyut","marks","jonny","maungmaung","Hlah","myo"]; 

let nameFilter = []
 names.map(function(name){ 

      // return name.length > 5;
      if(name.length >= 5){ 
      nameFilter.push(name)
      }

})
console.log(nameFilter);