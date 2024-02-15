$(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
        $("header").addClass('nav-bg')

    }
    else {
        $("header").removeClass('nav-bg')

    }
})


