document.write(19 + "88"); // Expression combigning string and number

document.write("<br>");

document.write(typeof 1104); // Typeof operator to display data type

document.write("<br>");

document.write(18.1140 * 10e3); // Method of writing exponent to move decimal point 3 
// spaces to the right

document.write("<br>")

function nan_Test() {
    return document.getElementById("testing").innerHTML = 0 / 0;  
} // Displays false as 0 can't be divided

function isnan_Test() {
    return document.getElementById("istest").innerHTML = isNaN("Am I a string");
} // Displays NaN as it is not a number

function isnot_Nan() {
    return document.getElementById("nantest").innerHTML = isNaN("1104");
} // Does not display NaN as it is a number

function in_Finity() {
    return document.getElementById("infin").innerHTML = (5e359);
} // Displays infinity as it exceeds the highest set of digits allowed

function neg_Finity() {
    return document.getElementById("negfin").innerHTML = (-5e359);
} // Displays -infinity as it exceeds the highest negative set of digits allowed

document.write(19 > 36); // Displays false as 19 is not greater number

document.write("<br>");

document.write(88 < 96); // Displays true 

console.log(19 < 12); // To display in Console tab of dev tools

document.write("<br>");

document.write(11 == 4); // Displays false as is not equal to each other

document.write("<br>");

document.write(36 == 36); // Displays true as is equal

document.write("<br>");

var X = 18;
var Y = 18;
document.write(X === Y); // Displays true as they are same value and data type

document.write("<br>");

var X = 36;
var Y = "Thirty-Six";
document.write(X === Y); // Displays false as they are not same value and data type

document.write("<br>");

var X = 11;
var Y = 4;
document.write( X === Y); // Displays false as they are same data type but not value

document.write("<br>");

var X = 36;
var Y = "36";
document.write(X === Y); // Displays false as they are same "value" but not same data type

document.write("<br>");

document.write(8 > 4 && 11 > 9); // AND operator displays true

document.write("<br>");

document.write(8 > 4 && 11 < 9); // AND operator displays false

document.write("<br>");

document.write(4 > 36 || 88 < 99); // OR operator displays true

document.write("<br>");

document.write(4 > 36 || 88 > 99); // OR operator displays false

function false_Not() {
    document.getElementById("ynot").innerHTML = !(66 > 58); 
} // NOT operator displays false

function true_Not() {
    document.getElementById("naynot").innerHTML = !(66 < 58);
} // NOT operator displays true