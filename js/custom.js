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

$(window).on('load', function () {

    var $container = $('.menu-highlights .filterdiv');
    $container.isotope({
        filter: '.breakfast',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: true,
            layoutMode: 'fitRows'
        }
    });
    $('.menu-highlights .filter ul li  a').on('click', function () {
        $('.menu-highlights .filter .active').removeClass('active');
        $(this).parent('li').addClass('active');

        var selector = $(this).attr('data-filter');

        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                queue: true
            }
        });

        return false;
    });

});
// tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip({ delay: { "show": 500, "hide": 100 } })
});



// Owl carousel of student review Section
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

// ui form validation

$('.ui.form')
    .form({
        inline: true,
        fields: {
            name: {
                identifier: 'name',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter your name'
                    }
                ]
            },

            email: {
                identifier: 'email',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter your email'
                    }
                ]
            },

            password: {
                identifier: 'password',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter your password'
                    }
                ]
            },

            phone: {
                identifier: 'phone',
                rules: [
                    {
                        type: 'minLength[10]',
                        prompt: 'Please enter 10 digits.'
                    }
                ]
            },

            date: {
                identifier: 'date',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter date.'
                    }
                ]
            },

            time: {
                identifier: 'time',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter time.'
                    }
                ]
            },

            state: {
                identifier: 'state',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please choose one option.'
                    }
                ]
            },

            address: {
                identifier: 'address',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please Enter Address.'
                    }
                ]
            }
        }
    })
    ;
// show and hide password
$('.psw-show-btn').on('click', function () {

    if ($(this).hasClass('hide-psw')) {

        $(this).addClass('show-psw').removeClass('hide-psw');
        $(this).prev('input').attr('type', 'text');
        $(this).find('i').removeClass('fa-eye-slash').addClass('fa-eye');

    } else if ($(this).hasClass('show-psw')) {

        $(this).prev('input').attr('type', 'password');
        $(this).find('i').addClass('fa-eye-slash');
        $(this).removeClass('show-psw').addClass('hide-psw');
    }

});


// sticky cart

$('.sticky-cart-content .close, .sticky-cart-content .change-order-type').on('click', function () {
    $(this).parents('.sticky-cart-content').removeClass('toggle')
})

$('.cart-icon').on('click', function (e) {
    console.log('clicked');
    e.preventDefault();
    $('.sticky-cart-content').addClass('toggle')
})
$('.cart-counter .qty-btn').on('click', function () {
    $(this).closest('tr').addClass('blocker');
    setTimeout(function () {
        $('tr').removeClass('blocker');
    }, 2000)
})


$('#choose_srv_Modal, #choose_loc_Modal, #forgot_psw_Modal, #user_login_Modal, #cart_view_Modal, #checkout_Modal').on('show.bs.modal', function () {
    $('body').addClass('hide-overflow');
});

$('#choose_srv_Modal, #forgot_psw_Modal, #user_login_Modal, #cart_view_Modal, #checkout_Modal').on('hide.bs.modal', function () {
    $('body').removeClass('hide-overflow');
});

$('#choose_loc_Modal').on('hidden.bs.modal', function () {
    $('body').addClass('modal-open');
})


$('#choose_srv_Modal .service_head').on('click', function () {
    $('#choose_srv_Modal .service_head').removeClass('active');
    $(this).addClass('active');
    $('#choose_srv_Modal .col-12 .append-box').removeClass('d-block');
    $($(this).attr("data-bs-target")).addClass('d-block');
    $('#choose_srv_Modal .service_subhead').removeClass('active');
    $('#choose_srv_Modal .append-subbox').removeClass('d-block');

});

$($('#choose_srv_Modal .service_head.active').attr("data-bs-target")).addClass('d-block');

$('#choose_srv_Modal .service_subhead').on('click', function () {
    $('#choose_srv_Modal .service_subhead').removeClass('active');
    $(this).addClass('active');
    $('#choose_srv_Modal .col-12 .append-subbox').removeClass('d-block');
    $($(this).attr("data-bs-target")).addClass('d-block');


});

$($('#choose_srv_Modal .service_subhead.active').attr("data-bs-target")).addClass('d-block');


$('.tip-wrapper .tips button').on('click', function () {
    $(this).addClass('active');
    $(this).siblings('button').removeClass('active');
});

$('.tip-wrapper input').on('focus', function () {
    $(this).parents('.tip-wrapper').find('button').removeClass('active')
})

$('.redeem input').on('click', function () {
    if ($(this).prop('checked')) {
        $(this).parents('.redeem').find('.redeem-text').slideDown()
    } else {
        $(this).parents('.redeem').find('.redeem-text').slideUp()
    }
})


$(".payment-card input").on("click", function () {
    if ($(this).hasClass('has-input')) {
        $('#card-input-box').slideDown();
    } else {
        $('#card-input-box').slideUp();
    }
});
//Date Picker
$(function () {

    var date = new Date();

    $('.date').datepicker({
        startDate: date,
        todayHighlight: true,
        toggleActive: true,
        autoclose: true
    });
})
$(document).ready(function () {
    $('.select').niceSelect();

    $('.select').on('change', function () {
        $(this).siblings('.nice-select').find('.current').css({
            'color': 'black',
            'opacity': '1'
        });
    })

    $('#timepicker').mdtimepicker({
        theme: 'red',
    });

    modernizer();

    $('.clockpicker').removeAttr('readonly');

    $('.date input').on('click', function () {
        $(this).attr('disabled', 'disabled');
    })

    $('.date input').on('blur', function () {
        $(this).removeAttr('disabled');
    })

});

function modernizer() {
    if (Modernizr.touch) {
        // disable keyboard for mobile devices
        // $('[data-disable-touch-keyboard]').attr('readonly', 'readonly');
        let today = new Date().toISOString().substr(0, 10);
        $('.date-picker').attr('type', 'date').parent('.input-group').removeClass('date');
        $('.date-picker').next('.input-group-addon').remove();
        document.querySelector(".date-picker").value = today;
        $('.clockpicker').attr('type', 'time').removeClass('timepicker');
        document.querySelector(".clockpicker").value = "12:00";

    }
}



// menu page

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

// gallery 
$(window).on('load', function () {

    var $container = $('.gallery .filterdiv');
    $container.isotope({
        filter: '.photos',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: true,
            layoutMode: 'fitRows'
        }
    });
    $('.gallery .filter ul li  a').on('click', function () {
        $('.gallery .filter .active').removeClass('active');
        $(this).parent('li').addClass('active');

        var selector = $(this).attr('data-filter');

        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                queue: true
            }
        });

        return false;
    });

});


// add to cart modal 

$('.toppings-drop .drop-head').on('click', function () {
    $(this).next('.drop-content').slideToggle();
    $(this).find('.icon i').toggleClass('rotate-180');
})

$('.qty-count .add-btn').on('click', function () {
    incrementValue();
});

$('.qty-count .minus-btn').on('click', function () {
    decrementValue();
});

function incrementValue() {
    var value = parseInt(document.getElementById('cart_value').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value < 10) {
        value++;
        document.getElementById('cart_value').value = value;
    }
}
function decrementValue() {
    var value = parseInt(document.getElementById('cart_value').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > 1) {
        value--;
        document.getElementById('cart_value').value = value;
    }

};



// jQuery(function ($) {
//     var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
//     $(".navbar-nav > li > a").each(function () {
//         if ($(this).attr("href") == pgurl || $(this).attr("href") == '')
//             $(this).addClass("active");
//         // $(this).parent("li").addClass("active");
//     })
// });

$('.leftSidebar, .middleContent, .rightSidebar')
    .theiaStickySidebar({
        additionalMarginTop: 120,
        updateSidebarHeight: true,
        disableOnResponsiveLayouts: true,
    });

if (window.matchMedia('(max-width: 575px)').matches) {
    $('.sidemenu .menu-nav').on('click', function () {
        $('.sidemenu .menu-nav').addClass('dis');
        var target = this.getAttribute('data-target');
        if ($(this).parents('.theiaStickySidebar').hasClass('onscroll')) {
            $('html, body').animate({
                scrollTop: $(target).offset().top - 130
            }, 1000, 'easeOutQuint');
        } else {
            $('html, body').animate({
                scrollTop: $(target).offset().top - 170
            }, 1000, 'easeOutQuint');
        }
        setTimeout(function () {
            $('#side-nav').slideUp();
            $('.sidemenu h4').toggleClass('icon-rotate');
            $('.sidemenu .menu-nav').removeClass('dis');
        }, 1000)
    });
    $(".sidemenu h4").on('click', function () {
        $('#side-nav').slideToggle();
        $(this).toggleClass('icon-rotate');
    })
} else {
    $('.sidemenu .menu-nav').on('click', function () {
        $('.menu-nav').removeClass('active');

        console.log($(this).data('target'));
        var target = this.getAttribute('data-target');
        $(this).addClass("active");

        $('html, body').animate({
            scrollTop: $(target).offset().top - 120
        }, 1000, 'easeOutQuint');

    });
}


// search food
$('.search-food .input-group input').on('keyup', function () {
    if ($(this).val() == false) {
        $(this).siblings('.search-loader').find('.cross-input-btn').addClass('invisible');
        $(this).siblings('.search-loader').find('.fa-search').removeClass('invisible');
    } else {
        $(this).siblings('.search-loader').find('.cross-input-btn').removeClass('invisible');
        $(this).siblings('.search-loader').find('.fa-search').addClass('invisible');
    }
});

$('.cross-input-btn').click(function () {
    $(this).parent().siblings('input').val('');
    $(this).addClass('invisible');
    $(this).siblings('.fa-search').removeClass('invisible');
});


$('#menu-bar').click(function () {
    $('.nav-wrapper').addClass('toggle');
    $('body').addClass('modal-open')
})

$('.nav-wrapper .close').click(function () {
    $('.nav-wrapper').removeClass('toggle');
    $('body').removeClass('modal-open')

})

$('#drop-icon').click(function () {
    $('.has-sub-menu .sub-menu').slideToggle();
})


$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();


    $('.box.cat-row').each(function (i) {
        if ($(this).position().top <= scrollDistance) {
            $('#side-nav p.active').removeClass('active');
            $('#side-nav p').eq(i).addClass('active');
        }
    });
}).scroll();

