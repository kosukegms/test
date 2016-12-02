#!/usr/bin/env node

var array = [1,2,3,4,5,6,7,8,9];


function displayOverFive(inputArray){

  inputArray.forEach(function(number){
    if(number < 9){
      return console.log(number + " is larger than nine");
    }

  });

}

displayOnlyFive(array);
