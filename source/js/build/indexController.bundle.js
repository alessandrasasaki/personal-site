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

    if (/Mobi/.test(navigator.userAgent)) {
        var handleGesture = function handleGesture() {
            console.log('CURRENTSECTION = ' + currentSection);
            if (touchendY < touchstartY && touchstartY - touchendY > 10) {
                console.log('touchstartY: ' + touchstartY);
                console.log('touchendY: ' + touchendY);
                scrollToSection(currentSection, 1);
            }
            if (touchendY > touchstartY && touchendY - touchstartY > 10) {
                console.log('touchstartY: ' + touchstartY);
                console.log('touchendY: ' + touchendY);
                console.log('up');
                scrollToSection(currentSection, -1);
            }
        };

        var currentSection = 1;
        var touchstartY = 0;
        var touchendY = 0;

        var scrollToSection = function scrollToSection(currPos, direction) {
            var elementToScrollTo = document.getElementById(getNextPosHash(currPos, direction));
            window.scrollTo({
                top: elementToScrollTo.offsetTop,
                behavior: 'smooth'
            });
            console.log('sim, finalizou scroll');
        };

        var getNextPosHash = function getNextPosHash(currPos, direction) {
            if (direction == 1) {
                switch (currPos) {
                    case 1:
                        currentSection++;
                        return 'rainBlock';
                    case 2:
                        currentSection++;
                        return 'contactBlock';
                    case 3:
                        return 'contactBlock';
                }
            } else {
                switch (currPos) {
                    case 1:
                        return 'rainbowBlock';
                    case 2:
                        currentSection--;
                        return 'rainbowBlock';
                    case 3:
                        currentSection--;
                        return 'rainBlock';
                }
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
        var _currentSection = 1;
        var lastScrollTop = 0;
        var wait = function wait(waitTime) {
            return new Promise(function (resolve, reject) {
                return setTimeout(resolve, waitTime);
            });
        };

        var _scrollToSection = function _scrollToSection(currPos, direction) {
            var elementToScrollTo = document.getElementById(_getNextPosHash(currPos, direction));
            window.scrollTo({
                top: elementToScrollTo.offsetTop,
                behavior: 'smooth'
            });
            console.log('sim, finalizou scroll');
        };

        var _getNextPosHash = function _getNextPosHash(currPos, direction) {
            if (direction == 1) {
                switch (currPos) {
                    case 1:
                        _currentSection++;
                        return 'rainBlock';
                    case 2:
                        _currentSection++;
                        return 'contactBlock';
                    case 3:
                        return 'contactBlock';
                }
            } else {
                switch (currPos) {
                    case 1:
                        return 'rainbowBlock';
                    case 2:
                        _currentSection--;
                        return 'rainbowBlock';
                    case 3:
                        _currentSection--;
                        return 'rainBlock';
                }
            }
        };

        var removeScrollEventListener = function removeScrollEventListener() {
            console.log('disabled');
            window.removeEventListener('scroll', scrollEvents, false);
        };

        var enableScrollEventListener = function enableScrollEventListener() {
            console.log('enabled');
            window.addEventListener('scroll', scrollEvents, false);
        };

        var scrollEvents = function scrollEvents() {

            removeScrollEventListener();

            var st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop) {
                console.log('downSCROLL');
                _scrollToSection(_currentSection, 1);
                (async function () {
                    await wait(500);
                    enableScrollEventListener();
                })();
            } else {
                console.log('upSCROLL');

                _scrollToSection(_currentSection, -1);
                (async function () {
                    await wait(400);
                    enableScrollEventListener();
                })();
            }
            lastScrollTop = st <= 0 ? 0 : st;
        };
        enableScrollEventListener();
    }

    /*     const goToTop = new Promise ((resolve) => {
            () => {
                resolve (window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                }));
            }
        }); */

    /*     const startPage = () => {
            goToTop
            .then(() => {
                enableScrollEventListener()
            });
        }  */

    var generateRainDrops = function generateRainDrops() {
        var n = $(window).width() > 800 ? 100 : 30;
        for (var i = 0; i < n; i++) {
            $('#rain').append('<div class="rain-drop"></div>');
        }
    };

    generateRainDrops();
};
//scrollIntoView - jQuery
