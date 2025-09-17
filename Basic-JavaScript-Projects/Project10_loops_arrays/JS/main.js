function Call_Loop(){ //While loop executes sequence of 1 increasing digit at a time
    var Wicket = "";
    var W = 1;
    while (W < 21){
        Wicket += "<br>" + W;
        W++;
    }
    document.getElementById("Loop").innerHTML = Wicket;
}

//Deermining and calling length of a string
let string = "This is my dog, her name is Wicket.";
let length = string.length;

document.getElementById("strgExp").innerHTML = length;

var Instruments = ["Mandolin", "Viola", "Upright Bass", "Guitar", "Banjo"];
var setList = "";
var G;
function for_Loop(){ //For loop calling a list of instruments per the vairable of same name
    for (G = 0; G < Instruments.length; G++){
    setList += Instruments[G] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = setList;
}

function array_Function(){ //Function utilizing an array using a game console object
    var Game_Consoles = [];
    Game_Consoles[1] = "Sega Dreamcast";
    Game_Consoles[2] = "Nintendo Switch 2";
    Game_Consoles[3] = "Playstation 5";
    Game_Consoles[4] = "Nintendo SNES";
    Game_Consoles[5] = "Sega Saturn";
    document.getElementById("Array").innerHTML = "This is a demo of an individual playing a " +
        Game_Consoles[1] + ".";
}

function constant_function(){ //Const function of a particular breed of dog as an object
    const Blue_Heeler_Puppy = {type:"dog", age:"1", color:"blue/black"};
    Blue_Heeler_Puppy.color = "red/white";
    Blue_Heeler_Puppy.size = "medium";
    document.getElementById("Constant").innerHTML = "This Blue Heeler Pup is " +
        Blue_Heeler_Puppy.size + " sized, and is " + Blue_Heeler_Puppy.age + " year old. They are also "
        + Blue_Heeler_Puppy.color + " in color.";
}

document.getElementById("return").innerHTML = myReturn("Delaney");

function myReturn(name){ //function demonstrating a return
    return "Hey there " + name;
}

let PC = { //Object created using the "let" keyword
    make: "Starforge ",
    model: "Destroyer mx iii",
    year: "2025 ",
    processor: "AMD Ryzen 9",
    color: "Night Sky Blue ",
    description: function(){
        return "This PC is a " + this.year + this.color + this.make + this.model +
        " with a " + this.processor + " processor.";
    }
};
document.getElementById("PC_Object").innerHTML = PC.description();

let day;
switch (new Date().getDay()){ //Exp of a break in loop
    case 0:
        day = "Sunday";
        break;
    case 2:
        day = "Monday";
        break;
    case 3:
        day = "Tuesday";
        break;
    case 4:
        day = "Wednesday";
        break;
    case 5:
        day = "Thursday";
        break;
    case 6:
        day = "Friday";
        break;
    case 7:
        day = "Saturday";
}
document.getElementById("whichDay").innerHTML = "Todays day is " + day;

let number = ""; //Exp of a continue method

loop1: for (let g = 2; g < 6; g++){
    loop2: for (let f = 2; f < 6; f++){
        if (f === 4) { continue loop1; }
        number += f + "<br>";
    }
}
document.getElementById("continue").innerHTML = number;