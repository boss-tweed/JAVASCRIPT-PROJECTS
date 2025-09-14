var X = 20 // Function w/ a global variable
function glob_Loc() {
    console.log(X * 44);
}

// Function w/ a local variable
function glob_Loc2() {
    var Y = 88;
    console.log(y + 160);
}
glob_Loc();
glob_Loc2();

function making_Time() { // Method determining current time and displaying message if les or greater then integer value
    if (new Date().getHours() < 10) {
        document.getElementById("myHours").innerHTML = "Good morning Garrett";
    }
}

function if_Else() { // If statement (w/ else added to it)
    if (18 > 20) {
        statement = "It's true!";
    }   else {
        statement = "It's false!"
    }
document.getElementById("trueFalse").innerHTML = statement;
}

function accept_Weight() { // If else statment outputting to an input method on HTML
    weighIn = document.getElementById("weight").value;
    if (weighIn >= 150) {
        weight = "You are not in the healthy weight range";
    }
    else {
        weight = "You are in the accepted weight range";
    }
    document.getElementById("How_much_do_you_weigh?").innerHTML = weight; 
}

function Time_function() { // Time_function() outlined in step 151
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}