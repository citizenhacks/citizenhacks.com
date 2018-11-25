var isStatsActive = false;
var didScroll;
var lastScrollTop = 0;
var delta = 5;

window.onload = function () {

    $(".panel").scroll(function () {
        didScroll = true;
        /*
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
        */
    });

    $("#learn-more-button").click(function() {
		$('.panel').animate({
      scrollTop: $("#about").offset().top - 100},
      'slow');
    });

    $("#hero-button").click(function() {
		$('.panel').animate({
      scrollTop: $("#hero").offset().top - 100},
      'slow');
    });

    $("#about-button").click(function() {
		$('.panel').animate({
      scrollTop: $("#about").offset().top - 100},
      'slow');
    });

    $("#faq-button").click(function() {
		$('.panel').animate({
      scrollTop: $("#faq").offset().top - 100},
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

    $('.hamburger-shell').click(function(){
		$('#menu').slideToggle(0);
		$('.top').toggleClass('rotate');
		$('.bottom').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
        $('.bg-cover').toggleClass('reveal');
        $('.middle').toggleClass('hide');
        $('.panel').toggleClass('shrink-side');
        $('html').toggleClass('disable-scrolling');
        $('body').toggleClass('disable-scrolling');
        $('.panel').toggleClass('disable-scrolling');
    });

	$('.bg-cover').click(function(){
		$('#menu').slideToggle(0);
		$('.top').toggleClass('rotate');
		$('.bottom').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
        $('.bg-cover').toggleClass('reveal');
        $('.middle').toggleClass('hide');
        $('.panel').toggleClass('shrink-side');
        $('html').toggleClass('disable-scrolling');
        $('body').toggleClass('disable-scrolling');
        $('.panel').toggleClass('disable-scrolling');
    })

    $('.panel-button').click(function(){
		$('#menu').slideToggle(0);
		$('.top').toggleClass('rotate');
		$('.bottom').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
        $('.bg-cover').toggleClass('reveal');
        $('.middle').toggleClass('hide');
        $('.panel').toggleClass('shrink-side');
        $('html').toggleClass('disable-scrolling');
        $('body').toggleClass('disable-scrolling');
        $('.panel').toggleClass('disable-scrolling');
    })
}

function hasScrolled() {
    var st = $(".panel").scrollTop();
    if(st > 0){
        $('header').addClass('header-shadow');
    }else{
        $('header').removeClass('header-shadow');
    }
    if (st > lastScrollTop){
        $('header').addClass('header-up');
    } else {
        $('header').removeClass('header-up');
    }
    lastScrollTop = st;
}
