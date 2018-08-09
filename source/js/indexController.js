window.onload = function teste(){
    alert('dsffdsdsfsfd');
    console.log('dsasdadas');
}

$(document).ready(function() {
    var n = 10;
    for (var i=0; i < n; i++) {
        $("#rain").append(`<div class="rain-drop"></div>`);
    }
});