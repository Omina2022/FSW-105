var readlineSync = require('readline-sync');
var firstNum=readlineSync.questionInt("Please enter your first number:");
var secondNum=readlineSync.questionInt("Please enter your second number:");
var enterOperation=readlineSync.question("Please enter the operation to perform: (add, sub, mul, div):");

function myAddition(a,b){
    return a+b;

}
function mySubtraction(a,b){
    return a-b;
}
function myMultiplication(a,b){
    return a*b;
}
function myDivision(a,b){
    return a/b;
}
function myCustomCalculator(num1, num2,operation){
    console.log(operation);

switch(operation){
    case ("add"):
    console.log("Addition of 2 numbers" + myAddition(num1, num2));
    break;
    case ("sub"):
        console.log("Subtraction 2 numbers"+mySubtraction(num1,num2));
        break;
        case ("mul"):
            console.log("Multiplication 2 numbers"+myMultiplication(num1,num2));
        break;
        case ("div"):
        console.log("Division 2 numbers"+myDivision(num1,num2));


}
}
 myCustomCalculator(firstNum, secondNum,enterOperation);




