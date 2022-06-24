// sticky top
$(function () {

    window.onscroll = function () {
        myFunction()
    };

    var navbar = document.getElementById("main_menus");
    var sticky = navbar.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {

            navbar.classList.add("sticky")
        } else {

            navbar.classList.remove("sticky");
        }
    }


});
//  end sticky top
$(window).scroll(function () {
    if ($(this).scrollTop() >= 300) {
        $('.scroll-to-top').addClass('top-arrow');
        $('.sticky-cart-icon').fadeIn();
        $('.nav-section').addClass('onscroll');

        if (window.matchMedia('(max-width: 575px)').matches) {
            $('.leftSidebar .theiaStickySidebar').addClass('onscroll');
        }
    } else {
        $('.scroll-to-top').removeClass('top-arrow');
        $('.sticky-cart-icon').fadeOut();
        $('.nav-section').removeClass('onscroll');
        if (window.matchMedia('(max-width: 575px)').matches) {
            $('.leftSidebar .theiaStickySidebar').removeClass('onscroll');
        }
    }
});
// scroll to top
var btn = $('#button');

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});
// end of scroll to top

// aos animation
AOS.init();

// wow animate

new WOW().init();
// menu items js

// tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip({ delay: { "show": 500, "hide": 100 } })
});



// Owl carousel of client review Section
$('.testi.owl-carousel').owlCarousel({
    items: 1,
    autoplay: true,
    margin: 30,
    loop: true,
    dots: true,
    nav: true,
    center: true,
    navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        768: {
            items: 1,
        },
        1000: {
            items: 3,
        }
    }
});


// mobile nav
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



// magnific pop up

function magnifyEffect() {
    $('.magnifyImage').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }
    });
}
// end magnific popup



// page loader


$(window).on('load', function () {
    setTimeout(removeLoader, 2000);
    $('.data').hide();

});

function removeLoader() {
    $(".preloader").fadeOut(500, function () {
        $('.data').show();
        $(".preloader").remove();

    });
}

// menu toggle css
$("#menuitem").on('click', function () {
    $("#menu_data").toggleClass('list-group');
    if ($("#menu_data").hasClass('list-group')) {
        $("#menu_data").hide();
    } else {
        $("#menu_data").show();
    }

});

jQuery(function ($) {
    var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    $(".navbar-nav > li > a").each(function () {
        if ($(this).attr("href") == pgurl || $(this).attr("href") == '')
            $(this).addClass("active");
        // $(this).parent("li").addClass("active");
    })
});
