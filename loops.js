var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    }, {
        name: "Madeline",
        age: 80,
        gender: "female"
    }, {
        name: "Cheryl",
        age: 22,
        gender: "female"
    }, {
        name: "Sam",
        age: 30,
        gender: "male"
    }, {
        name: "Suzy",
        age: 4,
        gender: "female"
    }
];
function isOldEnough(){
    for(i=0;i< peopleWhoWantToSeeMadMaxFuryRoad.length;i++){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age>=18){
            console.log("is old enough");
            }
            else{
            console.log("is not old enough");
        
        }
}
}
console.log("--------");
isOldEnough();



function isOldEnoughWithName(){
    for(i=0;i< peopleWhoWantToSeeMadMaxFuryRoad.length;i++){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age>=18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name+ " is old enough to see Mad Max.");
            }
            else{
                console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name +" is not old enough to see Mad Max.");
            
        }
    }
}
console.log("---------");
isOldEnoughWithName();


function isOldEnoughWithNameAndGender(){
    for(i=0;i< peopleWhoWantToSeeMadMaxFuryRoad.length;i++){
        
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age>=18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender=="male"){
console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name+peopleWhoWantToSeeMadMaxFuryRoad[i].gender+ "He'S good to see Mad Max Fury Road");
        } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age>=18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender=="female"){
        
  console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name+peopleWhoWantToSeeMadMaxFuryRoad[i].gender+ " is not old enough to see Mad Max Fury Road, don't let HER in")
        }
        
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age<=18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender=="female"){
console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name+peopleWhoWantToSeeMadMaxFuryRoad[i].gender+ "She'S good to see Mad Max Fury Road");
     } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age>=18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender=="male"){

console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name+peopleWhoWantToSeeMadMaxFuryRoad[i].gender+"is not old enough to see Mad Max Fury Road, don't let HIM in ");

}
    }
}

    console.log("---------");
    isOldEnoughWithNameAndGender();







    var officeItems= 101
    var count=0;
    for (var i = 0; i < officeItems; i++){
        console.log(i)
        
        if (i%2===1){
            console.log("Odd Number");

   // console.log(count [i]>officeItems+"Odd Number");
        }
    
    else{
        console.log("Even Number")
     //   console.log(count[i]<officeItems + "Even Number");
    }
    console.log("---------")
}