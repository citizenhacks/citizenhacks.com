var isStatsActive = false;
var didScroll;
var lastScrollTop = 0;
var delta = 5;

window.onload = function () {

    $(".panel").scroll(function () {
        didScroll = true;
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
};

function formcheck() {
    var fields = $(".item-required")
        .find("select, textarea, input").serializeArray();
    var msg = "";
    var flag = false;
    $.each(fields, function(i, field) {
        if (!field.value) {
            msg += field.name + " ";
            flag = true;
        }
    });
    if (flag) alert(msg + ' is required');
    console.log(fields);
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
