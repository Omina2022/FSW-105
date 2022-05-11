function fiveAndGreaterOnly(arr)
{
   return result = arr.filter(function(num){
       if (num>=5){
           return num;
       }
    });

}
console.log("--- Array Filter #1 ---");
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));  


function evensOnly(arr)
{
    const result = arr.filter(function(num){  
if (num %2==0){
    return true;
} 
    });
    return result;
}
console.log("--- Array Filter #2 ---");
console.log(evensOnly([3, 6, 8, 2])); 

// function ofAge(arr){
   
//   return result = arr.filter(function(num){
//         console.log("Num",num.age)
//         if (num.age>=17){
//         }
//             return num;
 
//     })
// }


// console.log("--- Extra Credit for .filter() Method ---");
// console.log(ofAge([
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 }
// ])





function doubleNumbers(arr)
{
    const result=arr.map(function(num){
        return num * 2;
    });
    return result;
  
} 

console.log("---  Array Map #1 ---");
console.log(doubleNumbers([2, 5, 100]));


function stringItUp(arr){
    const result =arr.map(function(num){
        return num ;
    });
    return result;
    
}

console.log("---  Array Map #2 ---");
console.log(stringItUp([2, 5, 100]));




function capitalizeNames(arr){
    
    const result = arr.map(function(name){
        
        const arr= name.charAt(0).toUpperCase() + name.slice(1)
       return arr;
    });
    return result;
}


console.log("---  Array Map #3 ---"); 
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));






function total(arr){
    const result= arr.reduce(function(num,sumOfNumbers){
    sumOfNumbers=sumOfNumbers+num;
    return sumOfNumbers;
    });
    return result;
    
}

console.log("---  Array Reduce #1 ---");
console.log(total([1, 2, 3]));  



// function stringConcat(arr) {
//     const result= arr.reduce(function(num,){

//     });
       
    
   
//     return result;
// }

// console.log("---  Array Reduce #2 ---")
// console.log(stringConcat([1, 2, 3]));





// function totalVoters(arr){
//     const result =arr.find(voters)
//     {
//         const arr ="Voters" + voted.count
// return arr;
    
//     }
//     return result;

// var voters = [
//     {name: 'Bob' , age: 30, voted: true},
//     {name: 'Jake' , age: 32, voted: true},
//     {name: 'Kate' , age: 25, voted: false},
//     {name: 'Sam' , age: 20, voted: false},
//     {name: 'Phil' , age: 21, voted: true},
//     {name: 'Ed' , age: 55, voted: true},
//     {name: 'Tami' , age: 54, voted: true},
//     {name: 'Mary' , age: 31, voted: false},
//     {name: 'Becky' , age: 43, voted: false},
//     {name: 'Joey' , age: 41, voted: true},
//     {name: 'Jeff' , age: 30, voted: true},
//     {name: 'Zack' , age: 19, voted: false},
    
// ]
//     }


// console.log("---  Array Reduce #3 ---")
// console.log( totalVoters(voters));




function leastToGreatest(arr) {
    const result=arr.sort(function(a,b){
        return a-b
    })

return result;
}

console.log("---  Array Sort #1 ---");
console.log( leastToGreatest([1, 3, 5, 2, 90, 20]) );


function  greatestToLeast(arr){
    const result=arr.sort(function(a,b){
    return b-a
});
return result
}
console.log("---  Array Sort #2 ---")
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));



function lengthSort(arr) {
    const result =arr.sort()


    return result;
}

console.log("---  Array Sort #3 ---")
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); 