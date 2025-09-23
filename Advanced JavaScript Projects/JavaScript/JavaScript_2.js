function validateForm(){ //Form validation function displays alert box if 
// name field is not filed out
    let x = document.forms["myForm"]["fname"].value;
    if (x == ""){
        alert("Name must be filled out");
        return false;
    }
}