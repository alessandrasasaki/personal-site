'use strict';

$(document).ready(function () {
    //Language
    $('#languageSwitch').prop('checked', true);
    //Utilizado function para nao perder a referencia do this
    $('input:checkbox').change(function () {
        if ($(this).is(':checked')) {
            $('.switchLabel').text('PORTUGU\xCAS');
            $('.rainbow__text').text('\'Meus olhos procuram constantemente');
            $('.rainbow__text--highlighted').text('O arco-\xEDris dos meus sonhos');
            $('.rain__text').text('E eu \xE0s vezes falho');
            $('.rain__text--2').text('Em ser grata aos pingos de chuva');
            $('.rain__text--highlighted').text('Que mant\xEAm minha esperan\xE7a viva\'');
            $('.contact__subtitle').text('Desenvolvedora Front-end');
            $('.contact__text').text('S\xE3o Paulo - Brasil');
            $('#curriculum').text('Curr\xEDculo');
            $('#curriculum').attr('href', 'http://alessandrasasaki.com/cas/AS.pdf');
            $('#summoner').text('Status do invocador');
        } else {
            $('.switchLabel').text('ENGLISH');
            $('.rainbow__text').text('\'My eyes constantly seek');
            $('.rainbow__text--highlighted').text('The rainbow of my dreams');
            $('.rain__text').text('And I sometimes fail');
            $('.rain__text--2').text('To be grateful for raindrops');
            $('.rain__text--highlighted').text('That keep my hopes alive\'');
            $('.contact__subtitle').text('Front-end developer');
            $('.contact__text').text('S\xE3o Paulo - Brazil');
            $("#curriculum").text('Curriculum');
            $('#curriculum').attr('href', 'teste');
            $('#summoner').text('Summoner stats');
        }
    });
});

window.onload = function () {
    var currentSection = 1;
    var touchstartY = 0;
    var touchendY = 0;

    var scrollToSection = function scrollToSection(currPos, direction) {
        //     const elementToScrollTo = document.getElementById(getNextPosHash(currPos, direction))
        //     window.scrollTo({
        //     top: elementToScrollTo.offsetTop, 
        //     behavior: 'smooth' 
        //   })

        switch (currPos) {
            case 1:
                if (direction === 1) {
                    $("body").css({
                        'transform': 'translateY(-100vh)',
                        'transition': 'all 1s'
                    });
                    $("#switch").css({
                        'transform': 'translateY(100vh)',
                        'transition': 'all 1s'
                    });
                    currentSection++;
                    return;
                }
                return;
            case 2:
                if (direction === 1) {
                    $("body").css({
                        'transform': 'translateY(-200vh)',
                        'transition': 'all 1s'
                    });
                    $("#switch").css({
                        'transform': 'translateY(200vh)',
                        'transition': 'all 1s'
                    });
                    currentSection++;
                    return;
                }
                $("body").css({
                    'transform': 'translateY(0)',
                    'transition': 'all 1s'
                });
                $("#switch").css({
                    'transform': 'translateY(0)',
                    'transition': 'all 1s'
                });
                currentSection--;
                return;
            case 3:
                if (direction === 1) {
                    return;
                }
                $("body").css({
                    'transform': 'translateY(-100vh)',
                    'transition': 'all 1s'
                });
                $("#switch").css({
                    'transform': 'translateY(100vh)',
                    'transition': 'all 1s'
                });
                currentSection--;
                return;
        }
    };

    if (/Mobi/.test(navigator.userAgent)) {
        var handleGesture = function handleGesture() {
            if (touchendY < touchstartY && touchstartY - touchendY > 30) {
                scrollToSection(currentSection, 1);
            }
            if (touchendY > touchstartY && touchendY - touchstartY > 30) {
                scrollToSection(currentSection, -1);
            }
        };

        var gestureZone = document.getElementsByTagName('body')[0];

        gestureZone.addEventListener('touchstart', function (event) {
            touchstartY = event.changedTouches[0].screenY;
        }, false);

        gestureZone.addEventListener('touchend', function (event) {
            touchendY = event.changedTouches[0].screenY;
            handleGesture();
        }, false);
    } else {
        window.addEventListener('wheel', function (event) {
            if (event.deltaY < 0) {
                scrollToSection(currentSection, 1);
            }
            if (event.deltaY > 0) {
                scrollToSection(currentSection, -1);
            }
        });
    }

    var generateRainDrops = function generateRainDrops() {
        var n = $(window).width() > 800 ? 100 : 30;
        for (var i = 0; i < n; i++) {
            $('#rain').append('<div class="rain-drop"></div>');
        }
    };

    generateRainDrops();
};
