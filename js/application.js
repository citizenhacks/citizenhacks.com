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
    let fields = $(".item-required")
        .find("select, textarea, input");
    let msg = "";
    let flag = false;
    let privacy = $("#privacyPolicy");
    let mlhConduct = $("#mlhConduct");
    let trueResponse = $("#responseTrue");

    $.each(fields, function(i, field) {
        if (!$(field).val()) {
            if ($(field).is("textarea")) {
                $(field).attr("placeholder", "Required");
            } else {
                $(field).css('background-color', '#ffb6c0');
            }

            flag = true;
        } else {
            if ($(field).is("textarea")) {
                $(field).css('background', 'transparent');
            } else {
                $(field).css('background-color', '#ffffff');
            }
        }
    });
    if (flag) {
        alert('Missing required fields!');
        return false;
    }
    if (!$(privacy).is(':checked')) {
        alert("You must accept the privacy policy");
        return false;
    }
    if (!$(mlhConduct).is(':checked')) {
        alert("You must accept the MLH code of conduct");
        return false;
    }
    if (!$(trueResponse).is(':checked')) {
        alert("You must confirm your responses are true");
        return false;
    }
    $.post("https://api.citizenhacks.com/apply", $("#application").serialize())
      .done(function(data) {
        if (data.success) {
          // TODO: Handle this visually
          console.log('Submitted application successfully!');
        }
      })
      .fail(function(err) {
        // TODO: Handle this visually
        console.log(err.responseJSON);
      })
    return true;
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

function genderSelect(dropDown) {
    var textbox = dropDown.form.elements["otherGender"];
    if (textbox) {
        textbox.style.display = (dropDown.value === "Other") ? "" : "none";
        if (dropDown.value === "Other") {
            textbox.focus();
        }
    }
}

function hearSelect(dropDown) {
  var textbox = dropDown.form.elements["otherHear"];
  if (textbox) {
    textbox.style.display = (dropDown.value === "Other") ? "" : "none";
    if (dropDown.value === "Other") {
      textbox.focus();
    }
  }
}

function studySelect(dropDown) {
    var textbox = dropDown.form.elements["otherStudy"];
    var div = document.getElementById("otherStudyDiv");
    if (textbox) {
        textbox.style.display = (dropDown.value === "Other") ? "" : "none";
        if (dropDown.value === "Other") {
            textbox.focus();
            if (!div.classList.contains("item-required")) div.classList.add("item-required");
        } else {
            if (div.classList.contains("item-required")) {
                div.classList.remove("item-required");
                console.log("remoevd item required");
                var input = document.getElementById("otherStudy");
                input.style.background = '#ffffff';

            }
        }
    }
}
