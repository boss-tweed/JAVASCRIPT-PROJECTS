// Addition function displayed via an HTML event
function add_Func() {
    var Add = 36 + 13;

    document.getElementById("result0").innerHTML = "36 + 13 = " + Add;
}

// Subtraction function displayed via HTML w/ event handler
function sub_Func() {
    var Subtract = 36 - 13;

    document.getElementById("result").innerHTML = "36 - 13 = " + Subtract;
}

// Division function displayed via HTML w/ event handler
function div_Func() {
    var divide = 1888 / 12;

    document.getElementById("result2").innerHTML = "1999 / 12 = " + divide;
}

// Multiply function displayed via alert method
function mult_Func() {
    var multiply = 1988 * 36.5;
    alert(multiply);
    
}

// Multiple operators expression displayed via alert method
function multi_Op() {
    var mathOp = (36 + 13) * (19 / 88);
    alert(mathOp);
}

// Modulus operator displayed via alert method
function remain() {
    var mod = 18 % 5;
    alert("When you divide 18 by 5 you get this as a remainder of " + mod);
}

// Negate function displayed via alert method
function negate() {
    var g = 36;

    alert(-g);
}

// Increment/Deincrement operators displayed w/ document.write
var w = 13;
w++;
document.write(w);

document.write("<br>");

var g = 36;
g--;
document.write(g);

// Math.random method displayed via window.alert event
window.alert(Math.random() * 1988);

// square root Math.method displayed via HTML event handler
function square_Rt() {
    return document.getElementById("root").innerHTML = Math.sqrt(2012);
}

