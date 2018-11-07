$(document).ready(function() {
    const n = $(window).width() > 600 ? 100 : 30;
    for (let i=0; i < n; i++) {
        $("#rain").append(`<div class="rain-drop"></div>`);
    }
});

window.onload = function() {
    $('#languageSwitch').prop('checked', true);
    $('input:checkbox').change(function(){
            if ($(this).is(':checked')) {
                $('.switchLabel').text("Português");
                $('.rainbow__text').text("\"Meus olhos procuram constantemente");
                $('.rainbow__text--highlighted').text("O arco-íris dos meus sonhos");
                $('.rain__text').text("E eu às vezes falho");
                $('.rain__text--2').text("Em ser grata aos pingos de chuva");
                $('.rain__text--highlighted').text("Que mantêm minha esperança viva\"");
            }
            else {
                $('.switchLabel').text("English");
                $('.rainbow__text').text("\"My eyes constantly seek");
                $('.rainbow__text--highlighted').text("The rainbow of my dreams");
                $('.rain__text').text("And I sometimes fail ");
                $('.rain__text--2').text("To be grateful for raindrops");
                $('.rain__text--highlighted').text("That keep my hopes alive\"");
            }
        });

    /*Mobile Jump Between Sections - Swap*/
    /*let touchstartY = 0;
    let touchendY = 0;
    let currentSection = 1;

    let gestureZone = document.getElementsByTagName('body')[0];

    gestureZone.addEventListener('touchstart', function(event) {
        touchstartY = event.changedTouches[0].screenY;
    }, false);

    gestureZone.addEventListener('touchend', function(event) {
        touchendY = event.changedTouches[0].screenY;
        handleGesture();
    }, false); 

    function handleGesture() {

    console.log('CURRENTSECTION = ' + currentSection);
        if (touchendY < touchstartY) {
            scrollToSection(currentSection, 1);
        }
        if (touchendY > touchstartY) {
            scrollToSection(currentSection, -1);
        }
    }
    
    scrollToSection = function(currPos, direction) { 
        const elementToScrollTo = document.getElementById(getNextPosHash(currPos, direction));
      window.scrollTo({
        top: elementToScrollTo.offsetTop, 
        behavior: 'smooth' 
      }); 
    }
    
    getNextPosHash = function (currPos, direction) {
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
      }
      else {
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
    }*/
}
// let lastScrollTop = 0;
// let scrollLoading = false;
// const windowHeight = $(window).height();
// console.log(windowHeight);
// $(window).scroll(function(event) {
//    const st = $(this).scrollTop();
//    if (scrollLoading == false) {
//         scrollLoading = true;
//         if (st > lastScrollTop){
//         //going down
//             if (st < windowHeight) {
//                 //is at rainbow
//                 scrollToSection('rainBlock');
//                 console.log('GO TO RAIN');
//             } 
//             else if (st > windowHeight && st < windowHeight*2) {
//                 //is at rain
//                 scrollToSection('contactBlock');
//                 console.log('GO TO CONTACT');
//             }
//         } 
//         else {
//         //going up
//             if (st > windowHeight) {
//                 //is at contact
//                 scrollToSection('rainBlock');
//                 console.log('GO TO RAIN');
//             } 
//             else if (st < windowHeight) {
//                 //is at rain
//                 scrollToSection('rainbowBlock');
//                 console.log('GO TO RAINBOW');
//             }
//         }
//         lastScrollTop = st;
//    }
   
   
// });


//scrollIntoView - jQuery
