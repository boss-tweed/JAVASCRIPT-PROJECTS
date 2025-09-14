function concat_Sen() { //Function employing concat() method
    var part_I = "This is ";
    var part_II = "my first ";
    var part_III = "attempt at ";
    var part_IV = "concat method()";
    var full_sen = part_I.concat(part_II, part_III, part_IV);
    document.getElementById("concat").innerHTML = full_sen;
}

function sliced_Method() { // Function emplying use of slice() method
    var sent1 = "What we got here is, failure to communicate.";
    var sect1 = sent1.slice(21, 28);
    document.getElementById("slicedOut").innerHTML = sect1;
}

function upper_Method() { // Function employing use of UpperCase() method
    let string = "The world is yours";
    let result = string.toUpperCase();
    document.getElementById("test1").innerHTML = result;
}

function search_Method() { // Function using search() method
    let string = "We did it captain! We're retired in Florida now!";
    let position = string.search("retired");
    document.getElementById("test2").innerHTML = position;
}

function num_String() { // Function employing use of toString() method 
    var G = 110488;
    document.getElementById("numnum").innerHTML = G.toString();
}

function precise_Output() { // Function employing use of toPrecision() method
    var F = 10231.20131991050463;
    document.getElementById("precise").innerHTML = F.toPrecision(9);
}

function fixed_Input() { // Function employing use of to Fixed() method
    let fix = 8.241126;
    let f = fix.toFixed(2);
    document.getElementById("test3").innerHTML = f;
}

function value_Much() { // Function employing use of valueOf() method
    let strg = "Howdy lil Wicket!";
    let output = strg.valueOf();
    document.getElementById("test4").innerHTML = output;
}