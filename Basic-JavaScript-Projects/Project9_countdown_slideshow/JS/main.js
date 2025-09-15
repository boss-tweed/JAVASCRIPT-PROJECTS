let slideIndex = 0; // Global variable in reference to primary function
showSlides();

function showSlides() {
    let i; // let keyword linking mySlides and dot classes in CSS
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++; // Nested function
    if (slideIndex > slides.length) {slideIndex = 1} // expression for simulation of collection of specific elements
    for (i = 0; i < dots.length; i++) { 
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; // Nested function
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Changes image every 2 seconds
}

function countdown() { // Countdown timer function
    var seconds = document.getElementById("seconds").value;

    function tick() { // Nested function
        seconds = seconds - 1; // Number of digits in seconds timer will count down from
        timer.innerHTML = seconds; // timer display 
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!"); // Alert window when timer funs out
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}