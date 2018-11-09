$(document).ready(() => {
    //Rain drops generator
    const n = $(window).width() > 800 ? 100 : 30;
    for (let i=0; i < n; i++) {
        $('#rain').append(`<div class="rain-drop"></div>`);
    }
});

window.onload = () => {

    //Language
    $('#languageSwitch').prop('checked', true);
    //Utilizado function para nao perder a referencia do this
    $('input:checkbox').change( function () {
            if ($(this).is(`:checked`)) {
                $('.switchLabel').text(`Português`);
                $('.rainbow__text').text(`'Meus olhos procuram constantemente`);
                $('.rainbow__text--highlighted').text(`O arco-íris dos meus sonhos`);
                $('.rain__text').text(`E eu às vezes falho`);
                $('.rain__text--2').text(`Em ser grata aos pingos de chuva`);
                $('.rain__text--highlighted').text(`Que mantêm minha esperança viva'`);
            }
            else {
                $('.switchLabel').text(`English`);
                $('.rainbow__text').text(`'My eyes constantly seek`);
                $('.rainbow__text--highlighted').text(`The rainbow of my dreams`);
                $('.rain__text').text(`And I sometimes fail`);
                $('.rain__text--2').text(`To be grateful for raindrops`);
                $('.rain__text--highlighted').text(`That keep my hopes alive'`);
            }
        });

    //Mobile Jump Between Sections - Swap
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

    //Desktop Jump Between Sections
    let lastScrollTop = 0;
    let waitForScroll = false;

    window.addEventListener('scroll', scrollEvents, false);

    let scrollEvents =  () => {
        debugger;
        if (waitForScroll == true) {
        console.log('waiting...');
        return;
        }
        else {
            waitForScroll = true;
            window.removeEventListener('scroll', scrollEvents, false);
            let st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop){
                console.log('down');
                scrollToSection(currentSection, 1);
            } else {
                console.log('up');
                scrollToSection(currentSection, -1);
            }
            lastScrollTop = st <= 0 ? 0 : st;
        }

    console.log('entrou no role');
    


    }

    let scrollToSection = (currPos, direction) => { 
        const elementToScrollTo = document.getElementById(getNextPosHash(currPos, direction));
        window.scrollTo({
        top: elementToScrollTo.offsetTop, 
        behavior: 'smooth' 
      });
      waitForScroll = false;
    }
    
    let getNextPosHash = (currPos, direction) => {
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
//scrollIntoView - jQuery
