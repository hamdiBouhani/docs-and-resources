/* Mobile Dropdown */
var mobile = false;
$(document).ready(function() {

    // add ability to link directly to Let's talk popup
    if(window.location.href.indexOf('#talk-modal') != -1) {
        $('#talk-modal').modal('show');
    }
	
	// If the window height is very low, (such as on a smartphone turned to landscape), adjust the vertical positioning of the floating head
	function adjustFloatingHead() {
		if ($(window).innerHeight() < 580) {
			var newTop = ($(window).innerHeight() - 90) / 2;
			$("#floating-head").css("margin-top", newTop);
		} else {
			$("#floating-head").css("margin-top", 420);
		}
	}
	adjustFloatingHead();

    function checkSize() {
        if ($(".mobile-talk").css("display") == "block") {
            return true;
        } else {
            return false;
        }
    };
    // check mobile on resize of the window
    function smallScreenSizesFix(checkValue) {
        if($( window ).width() <= checkValue){
            $('#nav').css('height', $( window ).height()+"px");
            $('.menu-items').css('height', $( window ).height()+"px");
        }
        else {
            $('#nav').css('height',"");
            $('.menu-items').css('height', "");
        }
    }
    let WidthCheckSize = 768;
    smallScreenSizesFix(WidthCheckSize);
    // check mobile on resize of the window
    $(window).resize(function() {
        smallScreenSizesFix(WidthCheckSize);
        // mobile = checkSize();
        // if (mobile == false) {
        //     $('#menu').removeClass('menuopen');
        //     $('#nav').show();
        //     $('#nav').removeClass('active');
        //     $('.outer').removeClass('slidein').css('height', 'initial');
        //     $('.dropdown').find('.sub_menu2_content').show();
        // } else {
        //     $('#nav').hide();
        // }
		adjustFloatingHead();
        mobile = checkSize();
        if (mobile == false) {
            $('#menu').removeClass('menuopen');
            $('#nav').removeClass('active');
            $('#nav').css('display', "");
            $('.outer').removeClass('slidein');
        }
    });
    // check for mobile on initial load
    mobile = checkSize();
    // If desktop size then close all mobile nav
    if (mobile == false) {
        $('#menu').removeClass('menuopen');
        $('#nav').removeClass('active');
        $('.outer').removeClass('slidein');
    }

    // GLOBALS
    var mnav = $('#nav');
    var menu = $('#menu');

    // set height of slidein
    var h = window.innerHeight;
    if (mobile == true) {
        $('.outer').height(h);
    }

    // toggle initial dropdown with primary nav
    $('#toggle').on('click', function(e){
        if (mobile == true) {
            e.preventDefault();
            mnav.slideToggle(350).addClass('active');
            menu.toggleClass('menuopen');
        }
    });

    // sub menu toggle
    $('.sub1').on('click', function() {
        if (mobile == true) {
            var sub_menu = $(this).children('.outer');
            sub_menu.addClass('slidein');
        }
    });

    // close sub menu
    $('.mnavback').on('click', function(e) {
        if (mobile == true) {
            $('#nav .outer').removeClass('slidein');
            e.stopPropagation();
        }
    });

    // Accordion dropdown section
    var alldrops = $('.dropdown').find('.sub_menu2_content')
    var alldropicons = $('.dropdown').find('.plusminus')

    function close_accordion() {
        if (mobile == true) {
            alldrops.slideUp();
            alldropicons.removeClass('fa-minus').addClass('fa-plus');
        }
    }

    // 2nd level sub-nav dropdowns
    $('.enterprise_drop').click(function(e) {
        // the enterprise section of the products nav is different
        if (mobile == true) {
            var enterprise = $(this).parent().next('.sub_menu2_content');

            if($(this).children('.plusminus').hasClass('fa-minus')) {
                close_accordion();
            } else {
                close_accordion();
                enterprise.slideToggle();
                $(this).children('.plusminus').toggleClass('fa-plus fa-minus');
            }
            return false;
        }
    });

    $('.sub_menu2_drop').click(function(e) {
        if (mobile == true) {
            var menu2_drop = $(this).next('.sub_menu2_content')

            if($(this).children('.plusminus').hasClass('fa-minus')) {
                close_accordion();
            } else {
                close_accordion();
                menu2_drop.slideToggle();
                $(this).children('.plusminus').toggleClass('fa-plus fa-minus');
            }
            return false;
        }
    });

    //Top-level nav items should expand onclick, rather than onhover
    $("#nav > .categories > .sub1 > a").on("click", function(e) {
        var self = $(this).parent();
        if (self.hasClass("active")) {
            self.removeClass("active");
        }
        else {
            if (!mobile) {
                $("#nav > .categories > .sub1").removeClass("active");
                self.addClass("active");
            } else {
                $(this).hide();
                $(document.elementFromPoint(e.clientX, e.clientY)).trigger("click");
                $(this).css("display","table-cell");
            }
        }
        e.stopPropagation();
    });

    // dropdown click behavior
    $(document).click(function(event) {
        // close dropdown when clicking off
        if($(event.target).closest('.outer .container .shad').length==0) {
            $("#nav > .categories > .sub1").removeClass("active");
            // keep dropdown open when clicking within dropdown
        }
    });

//		highlight the solution on hover
    $( ".inner-1 h6" ).hover(
        function() {
            if (!$(this).hasClass("product-selected")) {
                $(this).addClass("product-hover");
            }
        }, function() {
            $(this).removeClass("product-hover");
        }
    );
    $(".inner-1 h6").on("click",function(){
        $(".inner-1 h6").removeClass("product-selected");
        $(this).addClass("product-selected");
    });

    //Top-level breadcrumbs with no links should expand the corresponding menu dropdown
    $(".breadcrumbs #partners-link").click(function(e) {
        e.stopPropagation();
        if (!mobile) {
            if ($(".categories .category.partners").hasClass("active")) {
                $("#nav > .categories > .sub1").removeClass("active");
            } else {
                $("#nav > .categories > .sub1").removeClass("active");
                $(".categories .category.partners").addClass("active")
            }
        }
    });
    $(".breadcrumbs #company-link").click(function(e) {
        e.stopPropagation();
        if (!mobile) {
            if ($(".categories .category.category-about").hasClass("active")) {
                $("#nav > .categories > .sub1").removeClass("active");
            } else {
                $("#nav > .categories > .sub1").removeClass("active");
                $(".categories .category.category-about").addClass("active")
            }
        }
    });
    $(".breadcrumbs #communities-link").click(function(e) {
        e.stopPropagation();
        if (!mobile) {
            if ($(".categories .category.communities").hasClass("active")) {
                $("#nav > .categories > .sub1").removeClass("active");
            } else {
                $("#nav > .categories > .sub1").removeClass("active");
                $(".categories .category.communities").addClass("active")
            }
        }
    });
    $(".breadcrumbs #services-link").click(function(e) {
        e.stopPropagation();
        if (!mobile) {
            if ($(".categories .category.support").hasClass("active")) {
                $("#nav > .categories > .sub1").removeClass("active");
            } else {
                $("#nav > .categories > .sub1").removeClass("active");
                $(".categories .category.support").addClass("active")
            }
        }
    });
    $(".breadcrumbs #solutions-link").click(function(e) {
        e.stopPropagation();
        if (!mobile) {
            if ($(".categories .category.products-solutions").hasClass("active")) {
                $("#nav > .categories > .sub1").removeClass("active");
            } else {
                $("#nav > .categories > .sub1").removeClass("active");
                $(".categories .category.products-solutions").addClass("active")
            }
        }
    });

});
