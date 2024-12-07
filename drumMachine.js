function play(str) {
    var audio = document.getElementById(str.toUpperCase());
    audio.play();
    displayDescription(audio.src);
}

window.document.onkeyup = function(event) {
    play(event.key);
}

function displayDescription(str){
    var audioDescription = document.getElementById("display");
    audioDescription.innerText = str.match(/([^\/]+)(?=\.\w+$)/)[0];
}