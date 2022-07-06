"use strict"
const myButton = document.getElementById("myButton");
const myList = document.getElementById("myList");

myButton.addEventListener("click", bubblesort);

function bubblesort(){
    const numberArray = getInput();
    const sortedArray = performLogic(numberArray);
    renderResult(sortedArray);
   
}
function renderResult(renderArray){
    for(let i=0; i < renderArray.length; i++){
    myList.innerHTML += "<li>" + renderArray[i] + "</li>";
}
}
function getInput(){
    const inputList = document.getElementById("inputList");
    let listString = inputList.value;
    const stringArray = listString.split(";");
    const ausgabeArray = [];

        for (let i = 0; i < stringArray.length; i++) {
        
        stringArray[i]; 
        let parsedNumber = parseInt(stringArray[i]);
        
        
        if(isNaN(parsedNumber)===false){
            ausgabeArray.push(parsedNumber);
        }
       
        } 
    return ausgabeArray;
    }

function swap(list, i){
let leftValue = list[i];
list[i] = list[i+1]
list[i+1] = leftValue;
}    

function performLogic(numberArray){
let swapped = false;
do{
    swapped = false;
    for (let i=0; i<numberArray.length; i++){
    const left = numberArray[i];
    const right = numberArray[i+1];

    if(left>right){
        swap(numberArray, i);
        swapped = true;
    }
}
} while(swapped);
    console.log(numberArray);
  
    return numberArray;

}

