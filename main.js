var isStatsActive = false;
var didScroll;
var lastScrollTop = 0;
var delta = 5;

$(window).scroll(function () {
    didScroll = true;
    var scrollTop = $(window).scrollTop();

    if (scrollTop > 550 && !isStatsActive) {

        isStatsActive = true;

        var myObject = {
            prop1: 0,
            prop2: 0,
            prop3: 0
        }
        
        var JSobjectProp = anime({
            targets: myObject,
            prop1: 150,
            prop2: 3,
            prop3: 10,
            round: 1,
            duration: 2000,
            easing: 'easeInOutExpo',
            update: function () {
                var el = document.querySelector('#people');
                el.innerHTML = JSON.stringify(myObject.prop1);
        
                var el2 = document.querySelector('#speaker');
                el2.innerHTML = JSON.stringify(myObject.prop2);
        
                var el3 = document.querySelector('#sponsor');
                el3.innerHTML = JSON.stringify(myObject.prop3);
            }
        });
    }
});

window.onload = function () {
    $("#learn-more-button").click(function() {
		$('html,body').animate({
			scrollTop: $("#about").offset().top - 100},
			'slow');
    });
    
    var load = anime({
        targets: '.opacity',
        opacity: 1,
        easing: 'linear',
        duration: 1000
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);
}


function hasScrolled() {
    var st = $(this).scrollTop();

    if(st > 0){
        $('header').addClass('header-shadow');
    }else{
        $('header').removeClass('header-shadow');
    }


    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop){
        // Scroll Down
        $('header').addClass('header-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('header-up');
        }
    }
    
    lastScrollTop = st;
}