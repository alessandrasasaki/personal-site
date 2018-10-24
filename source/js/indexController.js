$(document).ready(function() {
    var n = $(window).width() > 600 ? 100 : 30;
    console.log(n);
    for (var i=0; i < n; i++) {
        $("#rain").append(`<div class="rain-drop"></div>`);
    }
});