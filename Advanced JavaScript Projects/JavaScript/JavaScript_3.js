function fantasyDisplay(character){ //Attribute that gives interactivity to ordered list element
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is in the " + character.innerHTML + " universe!")
}