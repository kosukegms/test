#!/usr/bin/env node

var array = [1,2,3,4,5,6,7,8,9];


function displayOnlyFive(inputArray){

  inputArray.forEach(function(number){
    if(number === 5){
      return console.log(number + " is five");
    }
    console.log(number + " is not five");
  });

}

displayOnlyFive(array);
//testest
