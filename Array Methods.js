var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function arrayExercise (){
    vegetables.pop();
console.log("vegetables: ", vegetables);

console.log("----------");

fruit.shift();
console.log("fruit: ", fruit);
console.log("----------");

let orangeIndex=fruit.indexOf("orange");

fruit.push(orangeIndex);
console.log("fruit: ", fruit);

console.log("------------");


let vegetableArray= vegetables.push(vegetables.length)

console.log(vegetables);


console.log("--------");

let foodArray=fruit.concat(vegetables);

console.log(foodArray);

console.log("---------");

foodArray.splice(4,2);
console.log(foodArray);



console.log("----------");

foodArray.reverse();

return foodArray.join();

};
console.log(arrayExercise());


