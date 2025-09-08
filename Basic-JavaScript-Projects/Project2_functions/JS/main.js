function My_Dogs_Name() { // Function to be assigned to onclick
    var str1 = "This is my dog Wicket"; // Variable 1
    str1 += " she is 13 years old"; // Variable 2 (concactenated to the first)
    document.getElementById("Dogs_Name").innerHTML = str1; // Returned w/ concactenated string variables
}