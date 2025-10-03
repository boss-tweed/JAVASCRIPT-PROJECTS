function getMsg(){
    //Step 1: Setup the XML HTTP Request object

    let ajaxRequest = new XMLHttpRequest();

    //Get input value of name to display tho user after
    //request has been made
    let inputVal = document.getElementById("fullName").value;

    //Function to display user input value once request
    //has been received
    ajaxRequest.onload = function(){
        document.getElementById("tkuMsg").innerHTML = "Thank you " +
        inputVal + " for signing up!";
    }

    //Step 2: Prepare the type of request and what to
    //request from the server
    ajaxRequest.open('GET', 'content.html', true);

    //Step 3: Defines the ajax response callback method that
    //establishes whethr the response was successful and where
    //the data should be displayed
    ajaxRequest.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            document.getElementById('content').innerHTML =
            ajaxRequest.responseText;
        }
    }

    //Step 4: Send the request
    ajaxRequest.send();
}