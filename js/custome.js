/* Demo Scripts for Bootstrap Carousel and Animate.css article
 * on SitePoint by Maria Antonietta Perna
 */
(function($) {
    //Function to animate slider captions
    function doAnimations(elems) {
        //Cache the animationend event in a variable
        var animEndEv = "webkitAnimationEnd animationend";

        elems.each(function() {
            var $this = $(this),
                $animationType = $this.data("animation");
            $this.addClass($animationType).one(animEndEv, function() {
                $this.removeClass($animationType);
            });
        });
    }

    //Variables on page load
    var $myCarousel = $("#home-carousel"),
        $firstAnimatingElems = $myCarousel.find(".item:first").find("[data-animation ^= 'animated']");

    //Initialize carousel
    $myCarousel.carousel({
        interval: 5000,
        cycle: true,
        pause: "false"
    });

    //Animate captions in first slide on page load
    doAnimations($firstAnimatingElems);

    //Other slides to be animated on carousel slide event
    $myCarousel.on("slide.bs.carousel", function(e) {
        var $animatingElems = $(e.relatedTarget).find(
            "[data-animation ^= 'animated']");

        doAnimations($animatingElems);
    });
    // End of bootsrap Carousel--------------------

    // close menu on click menu item
    $('.navigation-menu-list .menu-item a').click(function() {
        $('.menu-close').click();
    });
    // On scroll fixed menu
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 75) {
            $("#homenavigation").addClass("fixMenu");
        } else {
            $("#homenavigation").removeClass("fixMenu");
        }
    });


    //Menu Smooth Scroll
    $(".m-link").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                // Add hash (#) to URL when done scrolling (default click behavior)
                // window.location.hash = hash;
            });
        } // End if
    });

    //carousel------
    // $('.overview-carousel').owlCarousel({
    //     //animateOut: 'slideOutLeft',
    //     //animateIn: 'slideInRight',
    //     items: 1,
    //     loop: true,
    //     margin: 25,
    //     autoplay: true,
    //     autoplayTimeout: 4000,
    //     autoplayHoverPause: true,
    //
    //     dots: true,
    //     nav: true,
    //     navText: [$('.am-next'), $('.am-prev')]
    // });


    $('.overview-carousel').on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace) return;
        var carousel = e.relatedTarget;
        $('#navinfo').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
    }).owlCarousel({
        //animateOut: 'slideOutLeft',
        //animateIn: 'slideInRight',
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 6000,
        smartSpeed: 1500,
        autoplayHoverPause: true,

        dots: false,
        nav: true,
        navText: ["<i class='glyphicon glyphicon-chevron-left'></i>", "<i class='glyphicon glyphicon-chevron-right'></i>"]
    });
    $('.life-carousel').on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace) return;
        var carousel = e.relatedTarget;
        $('#navinfo2').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
    }).owlCarousel({
        animateOut: 'slideOutLeft',
        animateIn: 'slideInRight',
        items: 1,
        loop: true,
        margin: 25,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,

        dots: false,
        nav: true,
        navText: ["<i class='glyphicon glyphicon-chevron-left'></i>", "<i class='glyphicon glyphicon-chevron-right'></i>"]
    });

    $('.projects-carousel').owlCarousel({
        animateOut: 'slideOutLeft',
        animateIn: 'slideInRight',
        items: 2,
        loop: true,
        margin: 25,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1500,
        autoplayHoverPause: true,

        dots: false,
        nav: true,
        navText: ["<i class='glyphicon glyphicon-chevron-left'></i>", "<i class='glyphicon glyphicon-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            }
        }
    });

    //Fancybox ---------
    $('[data-fancybox="gereral"]').fancybox({
        //slide effect- zoom-in-out
        transitionEffect: "slide",
        loop: true,

        buttons: [
            //'slideShow',
            //'share',
            'zoom',
            'fullScreen',
            'close'
            //'download'
        ],
        thumbs: {
            autoStart: false
        }
    });
    $('[data-fancybox="floor"]').fancybox({
        //slide effect- zoom-in-out
        transitionEffect: "slide",
        loop: true,

        buttons: [
            //'slideShow',
            //'share',
            'zoom',
            'fullScreen',
            'close'
            //'download'
        ],
        thumbs: {
            autoStart: false
        }
    });
    $('[data-fancybox="map"]').fancybox({
        //slide effect- zoom-in-out
        transitionEffect: "slide",
        loop: true,

        buttons: [
            //'slideShow',
            //'share',
            'zoom',
            'fullScreen',
            'close'
            //'download'
        ],
        thumbs: {
            autoStart: false
        }
    });

    $('[data-fancybox="ame"]').fancybox({
        //slide effect- zoom-in-out
        transitionEffect: "slide",
        loop: true,

        buttons: [
            //'slideShow',
            //'share',
            'zoom',
            'fullScreen',
            'close'
            //'download'
        ],
        thumbs: {
            autoStart: false
        }
    });

    $('[data-fancybox="interior"]').fancybox({
        //slide effect- zoom-in-out
        transitionEffect: "slide",
        loop: true,

        buttons: [
            //'slideShow',
            //'share',
            'zoom',
            'fullScreen',
            'close'
            //'download'
        ],
        thumbs: {
            autoStart: false
        }
    });
    $('[data-fancybox="overview"]').fancybox({
        //slide effect- zoom-in-out
        transitionEffect: "slide",
        loop: true,

        buttons: [
            //'slideShow',
            //'share',
            'zoom',
            'fullScreen',
            'close'
            //'download'
        ],
        thumbs: {
            autoStart: false
        }
    });
    $('[data-fancybox="overview-mob"]').fancybox({
        //slide effect- zoom-in-out
        transitionEffect: "slide",
        loop: true,

        buttons: [
            //'slideShow',
            //'share',
            'zoom',
            'fullScreen',
            'close'
            //'download'
        ],
        thumbs: {
            autoStart: false
        }
    });


    $(".i-am").click(function() {
        $('#interested').modal('show');
    });
    $(".register-btn").click(function() {
        $('#interested').modal('show');
    });

    $(".price-click").click(function() {
        $('#pricepop').modal('show');
    });

    $(".brochure").click(function() {
        $('#brochure').modal('show');
    });

    $(".floor-pop").click(function() {
        $('#floor-pop').modal('show');
    });
    //AOS Initialization
    AOS.init({
        //easing: 'ease-in-out-sine'
        easing: 'ease-out-back'
    });

    // Mian PopUp
    if (!Get_Cookie('popout')) {
        //console.log($('.popupDiv'));
        $(window).load(function() {
            // var width = $(window).width();
            // if(width >= 767){
            setTimeout(function() {
                $('#mainpop').modal('show');
            }, 5000);
            // }
        });
    }
    $('.modal .close').click(function() {
        Set_Cookie('popout', 'it works', '', '/', '', '');
    });


    // Jquery Mobile Validation
    jQuery.validator.addMethod("country", function(value, element) {
        return this.optional(element) || /^[^+]/.test(value);
    }, "Enter Number Without Country Code");
    jQuery.validator.addMethod("number", function(value, element) {
        return this.optional(element) || value.match(/^[1-9][0-9]*$/);
    }, "Please enter the number without beginning with '0'");
    jQuery.validator.addMethod("mobile", function(value, element) {
        return this.optional(element) || $(element).intlTelInput("isValidNumber");
    }, "Please enter a valid mobile number");
    jQuery.validator.addMethod("alphabets", function(value, element) {
        return this.optional(element) || /^[a-zA-Z ]*$/.test(value);
    }, "Please enter Alphabets only");
    jQuery.validator.addMethod("email", function(value, element) {
        return this.optional(element) || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
    }, "Please enter a valid email address.");
    jQuery.validator.addMethod("valueNotEquals", function(value, element, arg) {
        return arg !== value;
    }, "Value must not equal arg.");
    if ($('#enquire-now').length > 0) {
        $('#enquire-now').validate({
            rules: {
                fname: {
                    required: true,
                    maxlength: 100
                },
                mobile: {
                    required: true,
                    number: true,
                    minlength: 10,
                    maxlength: 10
                },
                email: {
                    required: true,
                    email: true
                },
                country: {
                    valueNotEquals: ""
                }
            },
            messages: {
                fname: {
                    required: "Enter Your Name"
                },
                mobile: {
                    required: "Enter Your Number"
                },
                email: {
                    required: "Enter Your Email"
                },
                country: {
                    valueNotEquals: "Select Country"
                }
            }
        });
    }
    if ($('#contact-form').length > 0) {
        $('#contact-form').validate({
            rules: {
                fname: {
                    required: true,
                    maxlength: 100
                },
                mobile: {
                    required: true,
                    number: true,
                    minlength: 10,
                    maxlength: 10
                },
                email: {
                    required: true,
                    email: true
                },
                country: {
                    valueNotEquals: ""
                }
            },
            messages: {
                fname: {
                    required: "Enter Your Name"
                },
                mobile: {
                    required: "Enter Your Number"
                },
                email: {
                    required: "Enter Your Email"
                },
                country: {
                    valueNotEquals: "Select Country"
                }
            }
        });
    }
    if ($('#main-popup').length > 0) {
        $('#main-popup').validate({
            rules: {
                fname: {
                    required: true,
                    maxlength: 100
                },
                mobile: {
                    required: true,
                    number: true,
                    minlength: 10,
                    maxlength: 10
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                fname: {
                    required: "Enter Your Name"
                },
                mobile: {
                    required: "Enter Your Number"
                },
                email: {
                    required: "Enter Your Email"
                }
            }
        });
    }
    if ($('#price-popup').length > 0) {
        $('#price-popup').validate({
            rules: {
                fname: {
                    required: true,
                    maxlength: 100
                },
                mobile: {
                    required: true,
                    number: true,
                    minlength: 10,
                    maxlength: 10
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                fname: {
                    required: "Enter Your Name"
                },
                mobile: {
                    required: "Enter Your Number"
                },
                email: {
                    required: "Enter Your Email"
                }
            }
        });
    }


})(jQuery);