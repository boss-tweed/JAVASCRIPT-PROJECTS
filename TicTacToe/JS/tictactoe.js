//Keeps track of whose turn it is
let activePlayer = "X";
//Stores an array of moves. Used to determine win conditions
let selectedSquares = [];

//Function for placing x or o in a square
function placeXOrO(squareNumber){
    //Condition ensures a square hasn't already been selected
    //.some() method is used to check each element of the selectedSquare array
    //to see if it contains the square number clicked on
    if (!selectedSquares.some(Element => Element.includes(squareNumber))){
        //Retriev es the HTML element id that was clicked
        let select = document.getElementById(squareNumber);
        //Condition checks whose turn it is
        if (activePlayer === "X"){
            //If active player is equal to X the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/x2_imresizer.png")';
            //Player may only be X or O, so if not X it must be O
        } else {
            //If active player is equal to O the o.png is placed in HTML
            select.style.backgroundImage = 'url("images/o2_imresizer.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array
        selectedSquares.push(squareNumber + activePlayer);
        //Calls a function to check for any win conditions
        checkWinConditions();
        //For changing the active player
        if (activePlayer === "X"){
            //If active player is X change it to O
            activePlayer = "O";
            //If active player is anything other than X
        } else {
            //Change the activePlayer to X
            activePlayer = "X";
        }
        //This function plays placement sound
        audio("./media/cross.wav");
        //Checks to see if it is the computers turn
        if (activePlayer === "O"){
            //Disables clicking for computers turn
            disableClick();
            //Waits 1 second before computer places an image and enables click
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //Returning true is needed for computersTurn() function to work
        return true;
    }
    //Results in a random square being selected by the computer
    function computersTurn(){
        //This boolean is needed for our while loop
        let success = false;
        //This stores a random number 0-8
        let pickASquare;
        //Allows our while loop to keep trying if a square is selected already
        while (!success){
            //A random number between 0 and 8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //If random numbner evaluated returns tru, the square has not been selected yet
            if (placeXOrO(pickASquare)){
                //Calls the function
                placeXOrO(pickASquare);
                //Changes our boolesn and ends the loop
                success = true;
            };
        }
    }
}

//This function parses the selectedSquares array to search for win conditions
//drawLine() function is called to draw a line on the screen if the conditions are met
function checkWinConditions(){
    //X 0, 1, 2 condition
    if (arrayIncludes("0X", "1X", "2X")) { drawWinLine(50, 100, 558, 100) }
    //X 3, 4, 5 condition
    else if (arrayIncludes("3X", "4X", "5X")) { drawWinLine(50, 304, 558, 304) }
    //X 6, 7, 8 condition
    else if (arrayIncludes("6X", "7X", "8X")) { drawWinLine(50, 508, 558, 508) }
    //X 0, 3, 6 condition
    else if (arrayIncludes("0X", "3X", "6X")) { drawWinLine(100, 50, 100, 558) }
    //X 1, 4, 7 condition
    else if (arrayIncludes("1X", "4X", "7X")) { drawWinLine(304, 50, 304, 558) }
    //X 2, 5, 8 condition
    else if (arrayIncludes("2X", "5X", "8X")) { drawWinLine(508, 50, 508, 558) }
    //X 6, 4, 2 condition
    else if (arrayIncludes("6X", "4X", "2X")) { drawWinLine(100, 508, 510, 90) }
    //X 0, 4, 8 condition
    else if (arrayIncludes("0X", "4X", "8X")) { drawWinLine(100, 100, 520, 520) }
    //O 0, 1, 2 condition
    else if (arrayIncludes("0O", "1O", "2O")) { drawWinLine(50, 100, 558, 100) }
    //O 3, 4, 5 condition
    else if (arrayIncludes("3O", "4O", "5O")) { drawWinLine(50, 304, 558, 304) }
    //O 6, 7, 8 condition
    else if (arrayIncludes("6O", "7O", "8O")) { drawWinLine(50, 508, 558, 508) }
    //O 0, 3, 6 condition
    else if (arrayIncludes("0O", "3O", "6O")) { drawWinLine(100, 50, 100, 558) }
    //O 1, 4, 7 condition
    else if (arrayIncludes("1O", "4O", "7O")) { drawWinLine(304, 50, 304, 558) }
    //O 2, 5, 8 condition
    else if (arrayIncludes("2O", "5O", "8O")) { drawWinLine(508, 50, 508, 558) }
    //O 6, 4, 2 condition
    else if (arrayIncludes("6O", "4O", "2O")) { drawWinLine(100, 508, 510, 90) }
    //O 0, 4, 8 condition
    else if (arrayIncludes("0O", "4O", "8O")) { drawWinLine(100, 100, 520, 520) }
    //This condition checks for a tie. If none of the above conditions are met and
    //9 squares are selected the code executes
    else if (selectedSquares.length >= 9) {
        //This functhion plays the tie game sound
        audio("./media/soundtune.wav");
        //This function sets a .3 second timer before the resetGame is called
        setTimeout(function () { resetGame(); }, 500);
    }
    //Checks if an array includes 3 strings. it is used to check for
    //each win condition
    function arrayIncludes(squareA, squareB, squareC){
        //These 3 variables will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //If the 3 variables we pass are all included in our array then
        //true is returned and our else if condition executes the drawLine() function
        if (a === true && b === true && c === true) { return true; }
    }
}

//This function makes our body element temporarily unclickable
function disableClick(){
    //Makes our body clickable
    body.style.pointerEvents = "none";
    //Makes our body clickable again after 1 second
    setTimeout(function () { body.style.pointerEvents = "auto"; }, 1000);
}

//Takes a string parameter of the path you set earlier
//for placement sound("./media/place.mp3")
function audio(audioURL){
    //We create a new audio object and we pass the path as a parameter
    let audio = new Audio(audioURL);
    //Play method plays audio sound
    audio.play();
}

//Utilizes HTML canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2){
    //This line accesses our HTML canvas element
    const canvas = document.getElementById("win-lines");
    //Gives us access to methods and properties to use on canvas
    const c = canvas.getContext("2d");
    //Indicates where the start of a lines x axis is
    let x1 = coordX1,
        //Indicates where the start of a lines y axis is
        y1 = coordY1,
        //Indicates where the end of a lines x axis is
        x2 = coordX2,
        //Indicates where the end of a lines y axis is
        y2 = coordY2,
        //Stores temporary x axis data we update in our animation loop
        x = x1,
        //Stores temporary y axis data we update in our animation loop
        y = y1;
    //Interacts with the canvas
    function animateLineDrawing(){
        //This creates a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //Clears content from the last loop iteration
        c.clearRect(0, 0, 608, 608);
        //Method starts a new path
        c.beginPath();
        //Moves us to the starting point in our line
        c.moveTo(x1, y1);
        //This indicates the end point in our line
        c.lineTo(x, y);
        //This sets the width in our line
        c.lineWidth = 10;
        //This sets the color in our line
        c.strokeStyle = "rgba(70, 255, 33, .8)";
        //This method draws everything we laid out above
        c.stroke();
        //condition checks if we reached the endpoints
        if (x1 <= x2 && y1 <= y2){
            //Condition adds 10 to the previous end x endpoint
            if (x < x2) { x += 10; }
            //Condition adds 10 to the previous end y endpoint
            if (y < y2) { y += 10; }
            //This is similar to the one aboove
            //Is necessary for the 6, 4, 2 win conditions
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        //This is similar to the one above
        //Is necessary for the 6, 4, 2 win conditions
        if (x1 <= x2 && y1 >= y2){
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); } 
        }
    }
    //This clears our canvas after our win line is drawn
    function clear(){
        //Starts our animation loop
        const animationLoop = requestAnimationFrame(clear);
        //This line clears our canvas
        c.clearRect(0, 0, 608, 608)
        //This stops our animation loop
        cancelAnimationFrame(animationLoop);
    }
    //Will disallow clicking while win sound is playing
    disableClick();
    //Plays the win sound
    audio("./media/fight-win-tune.wav");
    //Calls our main animation loop
    animateLineDrawing();
    //Line waits 1 second. Then, clears canvas, resets game, and allows clicking
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

//Resets the game in the eventt of a tie or a win
function resetGame(){
    //For loop iterates through each HTML square element
    for (let i = 0; i < 9; i++){
        //Gets the HTML element i
        let square = document.getElementById(String(i));
        //Removes our elements backgroundImage
        square.style.backgroundImage = "";
    }
    //Resets our array so it is empty and we can start over
    selectedSquares = [];
}