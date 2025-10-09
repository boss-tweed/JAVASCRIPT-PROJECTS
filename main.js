function changeColor() {
    document.getElementById("dbl").style.color = "blueviolet";
}

function getNumberFact() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => { return response.json(); })
        .then(fact => {
            const imgUrl = fact?.message;
            const img = document.getElementById('picDisplay');
            img.src = imgUrl;
        })
        .catch(error => {
            document.getElementById('factDisplay').innerHTML = "Error fetching fact.";
        });
}