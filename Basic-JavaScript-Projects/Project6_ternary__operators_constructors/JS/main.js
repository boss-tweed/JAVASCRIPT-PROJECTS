// Exp ternary operation (Self writting ternary op is on the other vote.js file)
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// Constuctor function employing 'new' and 'this' keywords
function Gm_Console(Make, Model, Gen, Format) {
    this.Gm_Console_Make = Make;
    this.Gm_Console_Model = Model;
    this.Gm_Console_Gen = Gen;
    this.Gm_Console_Format = Format;
}

var Garrett = new Gm_Console("Nintendo", "Gamecube", 4, "CD");
var Shannon = new Gm_Console("Sony", "PlayStation 2", 2, "CD");
var Delaney = new Gm_Console("Nintendo", "Switch", 7, "cartridge");
// Function and variables to display the results of the constructor function
function myConsole() {
    document.getElementById("New_and_This").innerHTML =
    "Delaney owns a " + Delaney.Gm_Console_Make + " " + Delaney.Gm_Console_Model +
    ", which is a gen " + Delaney.Gm_Console_Gen + " and uses " + Delaney.Gm_Console_Format +
    " format.";
}

// Nested function example
function count_Down() {
    document.getElementById("Nested_Function").innerHTML = down_By;
    function down_By() {
        var Starting = 9;
        function minus_Two() {Starting -= 2;}
        minus_Two;
        return Starting;
    }
}