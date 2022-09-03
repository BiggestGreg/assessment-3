const colorbtn = document.querySelector("#color");
const favPlacebtn = document.querySelector("#place");
const favRitbtn = document.querySelector("#ritual");

colorbtn.addEventListener('click', colorPressed);

function colorPressed () {
    alert('My favorite color is Purple');
}

favPlacebtn.addEventListener('click', placePressed);

function placePressed () {
    alert('My favorite place is my bed');
}

favRitbtn.addEventListener('click', ritualPressed);

function ritualPressed () {
    alert('My favorite ritual is when I have a night where I can play a video game and just zone into it and have a peaceful vibe');
}
