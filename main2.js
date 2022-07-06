"use strict"

const myButton = document.getElementById("myButton");
let inputList = document.getElementById("inputList");
let myList = document.getElementById("myList");


myButton.addEventListener("click", bubblesort);

function getInput(){

    let listString = inputList.value;
    console.log("String:",listString);
    const stringArray = listString.split(";");
    console.log("StringArray:",stringArray);
    const ausgabeArray = [];
    
    // for(amfangswert für zählvariable; wie lange soll ich ausführen(Bedienung); was soll passieren nach jedem Durchlauf)    
    for (let i = 0; i < stringArray.length; i++) {
    
    //was soll passieren in jedem Durchlauf - i++
    
    //auf ein Element im Array zugreifen - index startet bei 0!!!!!
    stringArray[i]; // auf Element an stelle (i) zugreifen
    
    //text in nummer umwandeln
    let parsedNumber = parseInt(stringArray[i]);
    ausgabeArray.push(parsedNumber);
    console.log(parsedNumber);
    
    } 
    
    return ausgabeArray;
    
    }


function bubblesort(){
    const numberArray = getInput();
    console.log(numberArray);

}



// 1. Input

// 2. Logik
//Transformation, Mehrwert

//3.Output
//Darstellung, Rendering