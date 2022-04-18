function capitalizeAndLowercase (str){
    return str.toUpperCase()+str.toLowerCase();  
}
console.log("---------");
console.log(capitalizeAndLowercase("Hello."));
console.log(capitalizeAndLowercase("HelloHowAreYou."));


function findMiddleIndex(str){
    return midString= Math.floor (str.length /2);
}
console.log("------------");
console.log (findMiddleIndex("Hello"));
console.log (findMiddleIndex("Hello World"));



function returnFirstHalf (str){
    index=findMiddleIndex(str);
    // console.log(index);
    return FirstHalfString = (str.slice (0,index));
}
console.log("-----------");
console.log(returnFirstHalf("Hello"));
console.log(returnFirstHalf("Hello World"));



function capitalizeAndLowerCase(str){
    index=findMiddleIndex(str);
    firstHalf=returnFirstHalf (str).toUpperCase()
    // console.log(index,firstHalf)
    secondHalf=(str.slice (index)).toLowerCase()
    // console.log(secondHalf)
    return firstHalf+secondHalf;
}
console.log("----------------")
console.log (capitalizeAndLowerCase("Hello"));  
console.log (capitalizeAndLowerCase("Hello World"))
