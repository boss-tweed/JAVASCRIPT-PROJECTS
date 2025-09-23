function fav_Pet(){ //Example of case break method breaks up function to display random 
// segment of output
    var pet_Output;
    var pet = document.getElementById("Pet_Input").value;
    var pet_String = "is a great choice for a pet!";
    switch (pet){
        case "Dog":
            pet_Output = "Dog" + pet_String;
        break;
        case "Cat":
            pet_Output = "Cat" + pet_String;
        break;
        case "Bearded Dragon":
            pet_Output = "Bearded Dragon" + pet_String;
        break;
        case "Ferret":
            pet_Output = "Ferret" + pet_String;
        break;
        case "Red Tailed Shark":
            pet_Output = "Red Tailed Shark" + pet_String;
        break;
        case "Fox":
            pet_Output = "Fox" + pet_String;
        break;
        default:
        pet_Output = "Please enter a pet typed exactly as is on list.";
    }
    document.getElementById("Output").innerHTML = pet_Output;    
}

function Yo_Garrett(){
    var G = document.getElementsByClassName("click");
    G[0].innerHTML = "Yo Garrett! Keep it up!";
}

//Add a graphic within the border of the canvas element
var c = document.getElementById("can");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

//Add a linear gradient method to the canvas element
function draw(){
    var canvas = document.getElementById("myCan");
    ctx = canvas.getContext("2d");
    var gradient = ctx.createLinearGradient(0, 0, 170, 0);
    gradient.addColorStop(0, "green");
    gradient.addColorStop(0.5, "cyan");
    gradient.addColorStop(1, "green");

    ctx.fillStyle = gradient;                    
    ctx.fillRect(20, 20, 150, 100);
}