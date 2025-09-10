// Dictionary w/ a function that outputs keey-value pair
function canon_Camera() {
    var Camera = { // Variable defined
        Brand: "Canon",
        Type: "DSLR",
        Model: "Rebel T7i",
        Color: "Black/Gray",
        Mount: "EF"
    };
    delete Camera.Model; // Deleter operator removes key-value pair before displayed
    document.getElementById("Dictionary").innerHTML = Camera.Model; // Document Id that outputs to HTML for display
}