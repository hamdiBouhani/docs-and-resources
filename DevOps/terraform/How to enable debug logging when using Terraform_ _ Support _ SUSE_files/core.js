/* Set default server path for pages on different domains
 ---------------------------------------------------- */
var isStage = (window.location.hostname.indexOf("stage") === 0 || window.location.hostname.indexOf("downloadstage") === 0 || window.location.hostname.indexOf("susefillstage") === 0 || window.location.hostname.indexOf("elearningstage") === 0 || window.location.hostname.indexOf('trainingstage') === 0) ? true : false;
var isTest = (window.location.hostname.indexOf("wwwtest") === 0 || window.location.hostname.indexOf("downloadtest") === 0 || window.location.hostname.indexOf("susefilltest") === 0 || window.location.hostname.indexOf("elearningtest") === 0 || window.location.hostname.indexOf('trainingtest') === 0) ? true : false;
var serverStr = ((isTest) ? "https://wwwtest" : ((isStage) ? "https://stage" : "https://www")) + ".suse.com";
var secureServerStr = serverStr; // suse.com has a different model then novell.com and both paths are currently the same

// default server path for local dev environments
var isDev = (window.location.hostname.indexOf('dev') >= 0 || window.location.hostname.indexOf('localhost') >= 0) ? true : false;
var serverStr = ((isDev) ? 'https://' + document.domain : serverStr);

/* Cookie Functions
 ---------------------------------------------------- */
function readCookie(name) {
    var cks = document.cookie.split(';');
    for (var i = cks.length-1; i >= 0; i--) {
        var c = cks[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(name + "=") === 0) {
            return c.substring(name.length+1,c.length);
        }
    }
    return null;
}

function deleteCookie(name, path, domain) {
    if (readCookie(name)) {
        document.cookie = name + "=" +
            ((path) ? ";path=" + path : ";path=/") +
            ((domain) ? ";domain=" + domain : ";domain=.suse.com") +
            ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
    }
}

function createCookie(name, value, days, path, domain) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toGMTString();
    }
    document.cookie = name + "=" + value + expires +
        ((path) ? ";path=" + path : ";path=/") +
        ((domain) ? ";domain=" + domain : ";domain=.suse.com");
}

function ucWords(this_string) {
    if (typeof(this_string) == 'undefined' || this_string == null) return "";
    return this_string.toLowerCase().replace(/^(.)|\s+(.)/g, function(letter) {
        return letter.toUpperCase();
    });
}


function openExternal(URL, w, h, s, n, r) { // open link in new window (for external links)
    // It is possible to bypass w and h by passing in 'noW', 'noH'
    var attr = "";
    if(typeof w != "undefined" && w!= 'noW') {
        attr += "width=" + w;
    }
    if(typeof h != "undefined" && h != 'noH') {
        attr += ",height=" + h;
    }
    if(attr.length > 0) { // when no width or height is specified, use window core defaults, do not add any other values
        attr += (typeof s != "undefined" && s === true) ? ',scrollbars=yes' : ',scrollbars=no'; // default on sized window = no scrollbars
        attr += (typeof r != "undefined" && r === false) ? ',resizable=no' : ',resizable=yes'; // default on sized window = resizable
    }
    if(attr.charAt(0)==",") {
        attr = attr.substring(1);
    }
    if(URL.indexOf("play.php") != -1){
        assetClick(URL, false);
    }
    var winExt = (!n) ? window.open(URL,'_blank',attr) : window.open(URL,n,attr);
    if(winExt && winExt.blur) {
        winExt.focus();
    }
}

function resizeIframe(){
    if ("header_letstalk" in window.frames && !navigator.userAgent.match(/MSIE \d\./i)) { // don't use for IE 9
        var iframe_content_height = $('#header_letstalk').contents().find('#talk-modal').height() + 5;
        if (iframe_content_height > 5) $("#header_letstalk").css("height", (iframe_content_height) + "px");
        //resize bug:
        setTimeout(function() {
            var new_iframe_content_height = $('#header_letstalk').contents().find('#talk-modal').height() + 5;
            if ( new_iframe_content_height > iframe_content_height ) {
                if (iframe_content_height > 5) $("#header_letstalk").css("height", new_iframe_content_height + "px");
            }
        }, 10);
    }
}

function getAllUrlParams() {
    var keyPairs = [],
        params = window.location.search.substring(1).split('&');
    for (var i = params.length - 1; i >= 0; i--) {
        keyPairs.push(params[i].split('='));
    };
    return keyPairs;
}

function decodeQueryString(link) {
    var querystring = link.substring(link.indexOf('?')+1).split('&');
    var qParams = {}, pair, d = decodeURIComponent;
    for (var i = querystring.length -1; i>= 0; i--){
        pair = querystring[i].split('=');
        qParams[d(pair[0])] = d(pair[1] || '');
    }
    return qParams;
}

function buildQueryString(url, obj) {
    if (url.indexOf('?') !== -1) {
        var link = url.split('?');
        link = link[0]+'?';
    } else {
        link = url+'?';
    }
    $.each(obj, function(key, value){
        if(link.slice(-1) === "?"){
            link = link+key+'='+value;
        } else {
            link = link+'&'+key+'='+value;
        }
    });
    return link;
}

// Set a cookie when user fills out Promo form
function assetFormFill(formID) {
    var campaignID = "";
    var campaignIDField = $("#"+formID+" input[name=customCampaignInput]");
    if (campaignIDField.length > 0) {
        campaignID = campaignIDField.val();
    } else {
        campaignID = "true";
    }
    createCookie("assetFFill", campaignID, 1);
    return true;
}

// If the user has filled out the Promo form for this campaign already,
//   find the thankYouPage URL and go ahead and redirect them.
function checkAssetFormFill(formID) {
    var theAssetFormFill = readCookie("assetFFill");
    var campaignID = "";
    var campaignIDField = $("#"+formID+" input[name=customCampaignInput]");
    if (campaignIDField.length > 0) {
        campaignID = campaignIDField.val();
    }
    if (theAssetFormFill != null && theAssetFormFill == campaignID) {
        var thankYouPageHiddenField = $("#"+formID+" input[name=thankyouPage]");
        if (thankYouPageHiddenField.length > 0) {
            window.location.href = thankYouPageHiddenField.val();
        }
    }
}

function setUrlForLogin(thisUrl) {
    if (!thisUrl) {
        thisUrl = window.location.href;
    }
    createCookie('login_source',thisUrl,1,'/','suse.com');
}

$(function() {
    // Cookies alert
    if(readCookie('cookiesAlert') == null) {
        var cookiesAlert = $('.cookies-alert'),
            langPopup = $('.lang-select.popup');
        cookiesAlert.insertBefore($('.menus-container'));
        cookiesAlert.show();
        $('.cookies-alert .button-clear').on('click', function(e){
            e.preventDefault();
            //function createCookie(name, value, days, path, domain) {
            createCookie('cookiesAlert', 'off', 1825, '/', '.suse.com');
            cookiesAlert.hide();
        });
    }

    $('#login-link').on('click', function(e){
        e.preventDefault();
        setUrlForLogin();
        return true;
    });

    if (window.location.href.indexOf('rac=true') > 0) {
        $("#talk-modal").modal("show");
    }

    // Record the URL of first visit
    var firstTouchURL = readCookie("firstTouchURL");
    const hostnames = ['www.suse.com', 'suse.com'];
    if (firstTouchURL == null && hostnames.includes(window.location.hostname)) {
        createCookie("firstTouchURL", window.location.href, 1825, '/', '.suse.com');
    }

    // If there is a <header class="nocontent">, but no <div class="top-banner">, add it in after the header
    if ($("header.nocontent").length > 0 && $("div.top-banner").length === 0) {
        $("header.nocontent").after('<div class="top-banner"></div>');
    }


    /* Mobile detection
     ---------------------------------------------------- */
    var isMobile = false;
    var isMobileInitialized = false;
    var mobileScreenSize = 767;
    var desktopOverrideCookie = "forcedesktop";
    var hasNotification = false;
    if(readCookie(desktopOverrideCookie) != null) {
        mobileScreenSize = 0; // desktop version cookie set so override screen setting
    }

    //used for anchor link smooth scrolling
    function filterPath(string) {
        return string
            .replace(/^\//,'')
            .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
            .replace(/\/$/,'');
    }

    //activate all anchor links
    var locationPath = filterPath(location.pathname);

    var scrollElement = 'html, body';
    $('html, body').each(function () {
        var initScrollTop = $(this).attr('scrollTop');
        $(this).attr('scrollTop', initScrollTop + 1);
        if ($(this).attr('scrollTop') == initScrollTop + 1) {
            scrollElement = this.nodeName.toLowerCase();
            $(this).attr('scrollTop', initScrollTop);
            return false;
        }
    });

    $('a[href^=#]').each(function() {
        var thisPath = filterPath(this.pathname) || locationPath;
        if (locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/, '')){
            if ($('#'+this.hash.replace(/#/, '')).length && !$(this).hasClass("prevent-scroll")) {
                $(this).click(function(event) {
                    var thishash = this.hash.replace(/#/, '');
                    var targetOffset = $('#'+thishash).offset().top;
                    var target = this.hash;
                    event.preventDefault();
                    if (isMobile) {
                        $(".active_hash").removeClass("active_hash");
                        $('#'+thishash).addClass("active_hash");
                        //window.location.replace("#"+thishash);
                        history.pushState(null,null,'#' + thishash);
                        targetOffset = targetOffset - 63;
                        $(scrollElement).animate({scrollTop: targetOffset}, 500);
                    }
                    else {
                        var headerOffset = 106;
                        if ($(".breadcrumbs-container").length > 0) headerOffset += $(".breadcrumbs-container").outerHeight();
                        if ($(".global-notification-container").length > 0) headerOffset += $(".global-notification-container").outerHeight() - 15;
                        if ($(".product-nav-row1").length > 0) headerOffset += 75;
                        if ($(".promo_nav").length > 0) headerOffset += 80;

                        $(scrollElement).animate({scrollTop: targetOffset - headerOffset}, 500);
                        $(".active_hash").removeClass("active_hash");
                        $('#'+thishash).addClass("active_hash");
                        //window.location.replace("#"+thishash);
                        if(history.pushState) {
                            history.pushState(null, null, "#"+thishash);
                        } else {
                            window.location.replace("#"+thishash);
                        }
                    }
                    return false;
                });
            }
        }
    });

    //if they've come to a page w/ the anchor link set, select by default
    if(location.hash){
        var thishash = location.hash.replace(/#_/, '').replace('#', '');
        if (thishash.indexOf('?') >= 0) {
            thishash = thishash.substring(0, thishash.indexOf('?'));
        }
        $('#'+thishash).addClass("active_hash");
    }


    // location filter input contact us
    $('#locationfilterinput').on('change',function() {
        var inputval = $('#locationfilterinput').val().toUpperCase();
        $('.filteredlocation').each(function() {
            if ($(this).text().toUpperCase().search(inputval) > -1) {
                $(this).slideDown();
            } else {
                $(this).slideUp();
            }
        });
    }).on('keyup', function() {
        $(this).change();
    });
    $('#locationslist .dropdown-menu a').on('click', function() {
        var country = $(this).data('country');
        $('.filteredlocation').each(function() {
            if ($('.country', this).text() == country) {
                $(this).slideDown();
            } else {
                $(this).slideUp();
            }
        });
        return false;
    });

    // toggle sections
    $('.showhidelinks').on('click', function() {
        $('.showhidetarget').hide();
        $($(this).attr('href')).show();
        $('.showhidelinks').removeClass('selected');
        $(this).addClass('selected');
        return false;
    });

    if (!location.href.indexOf('search/#?') > 0) {
        if(location.hash.length > 1 && jQuery(location.hash+'.showhidetarget').length) {
            jQuery('.showhidelinks[href="'+location.hash+'"]').click();
            jQuery(document.body).animate({ scrollTop: jQuery('.showhidelinks[href="'+location.hash+'"]').offset().top - 65 }, 500);
        }
    }














    // Reset iframe src when closing video player modal
    $('#videoModalOne').on('hidden.bs.modal', function () {
        $("#videoPlayerFrame").attr("src", "");
    });

    //Hide Feedback form iframe until it's opened
    $('#feedback-modal').on('shown.bs.modal',function(){
        $(this).find('iframe').attr('src',$(this).find('iframe').attr('data-src-to-load'));
    });

    // products/ customer stories slider
    $('#slideshow .left-arrow, #slideshow .right-arrow').on('click',function() {
        if($(this).is('.left-arrow')) {
            var coming = 'righthidden';
            var going = 'lefthidden';
        } else {
            var coming = 'lefthidden';
            var going = 'righthidden';
        }
        var quotes = $(this).siblings('.quotes');
        quotes.find('.quote').removeClass('lefthidden').removeClass('righthidden');
        var nextquote = quotes.find('.selected').removeClass('notransition').addClass(going).removeClass('selected').next('.quote');
        if(nextquote.length == 0) {
            nextquote = quotes.find('.quote:first');
        }
        nextquote.addClass('notransition').addClass(coming);
        setTimeout(function() {
            nextquote.removeClass('notransition').addClass('selected').removeClass(coming);
        }, 10);
    });



    $( ".ttip" ).tooltip({
        // default: my: "left top+15", at: "left bottom"
        position: {
            my: "center-115 bottom-20",
            at: "center top",
            using: function( position, feedback ) {
                $( this ).css( position );
                $( "<div>" )
                    .addClass( "arrow" )
                    .addClass( feedback.vertical )
                    .addClass( feedback.horizontal )
                    .appendTo( this );
            }
        },
        tooltipClass:"support",
    });


    /*
      if ($('#utilitynav-login').length && typeof logged_in_data_promise !== 'undefined' && typeof logged_in_data_promise.responseJSON !== 'undefined' && logged_in_data_promise.responseJSON.isLoggedIn == "true") {
          var username = ucWords(logged_in_data_promise.responseJSON['X-firstname']) + " " + ucWords(logged_in_data_promise.responseJSON['X-lastname']);
          var loggedin_html = '<div id="utilitynav-logout" class="hidden-xs"><span>' + username + ',</span> <a href="/AGLogout">Logout</a></div>';
          $('#utilitynav-login').replaceWith(loggedin_html);
      }
  */

    // Function to determine IEVersion or false
    function detectIEVersion() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');
        if (msie > 0) return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        var edge = ua.indexOf('Edge/');
        if (edge > 0) return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        return false;
    }

    // 1. determine if the current browser is <= IE11
    // 2. loop through all ttips that are in a table
    //    a. Get the computed height of the parent table cell
    //    b. Center the ttip vertically
    var IEVersion = detectIEVersion();
    if (IEVersion !== false && IEVersion <= 11) {
        jQuery( "table span.ttip" ).each(function( index ) {
            var top = (jQuery(this).parent().outerHeight() / 2) - (jQuery(this).outerHeight() / 2); //
            jQuery(this).css("top", top);
        });
    }

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    // If the parameter key 'tab' exists scroll to it and click it.
    var paramValue = getParameterByName('tab');
    var element_tab = "#tab"+paramValue;

    if (paramValue !== null) {
        switch(getParameterByName('tab')) {
            case 'tech-specs':
                cbAnimate('#tab2');
                break;
            case 'faqs':
                cbAnimate('#tab3');
                break;
            case 'resources':
                cbAnimate('#tab4');
                break;
            case '2':
                cbAnimate('#tab2');
                break;
            case '3':
                cbAnimate('#tab3');
                break;
            case '4':
                cbAnimate('#tab4');
                break;
            default: if ($(element_tab).length > 0){
                cbAnimate(element_tab);
            } else {
            }
        }
    }

    function cbAnimate(element) {
        $('html, body').animate({scrollTop: $(element).offset().top -210 }, 900);
        $( element ).trigger( "click" );
    };

    // Pass Marketo ID to Google Analytics:
    if(!readCookie('_mkto_trk')) {
        setTimeout(function(){
            if(readCookie('_mkto_trk')) {
                if (typeof ga !== "undefined") {
                    ga('set', 'dimension19', readCookie('_mkto_trk'));
                }
            }
        }, 500);
    } else {
        if (typeof ga !== "undefined") {
            ga('set', 'dimension19', readCookie('_mkto_trk'));
        }
    }

    // Run geo-sensitive code after the geo-location promise returns
    // Show local communities link if the user's country is one of the local communities
    if ( typeof demandbase_data_promise == 'object' ) {
        jQuery.when(demandbase_data_promise).done(function(demandbase_ip_data) {
            if (typeof demandbase_ip_data == 'object') {

                // Default to demandbase country code
                var country_name = '';
                var country_code = '';
                if (typeof demandbase_ip_data.registry_country == 'string') {
                    country_name = demandbase_ip_data.country;
                    country_code = demandbase_ip_data.country_code;
                }

                // If the sessionStorage.getItem('header_country_name') is set, use that instead
                if (typeof sessionStorage.getItem('header_country_name') == 'string') {
                    country_name = sessionStorage.getItem('header_country_name');
                }

                // If user_country cookie is set, use that instead -- on second thought, maybe not
                //if (readCookie("user_country") != null) {
                //	country_code = readCookie("user_country");
                //}

                // Show the corresponding local links
                country_name = country_name.toLowerCase();
                $("header #menu .category.communities .dropdown p.local-hidden").each(function() {
                    thisCountry = $(this).data("country").toLowerCase();
                    if (thisCountry == country_name) $(this).removeClass("local-hidden");
                    //if (thisCountry == "benelux" && (country_name == "belgium" || country_name == "netherlands" || country_name == "luxembourg")) $(this).removeClass("local-hidden");
                    if (thisCountry == "nordic-region" && (country_name == "denmark" || country_name == "finland" || country_name == "iceland" || country_name == "norway" || country_name == "sweden" || country_name == "greenland" || country_name == "faroe islands")) $(this).removeClass("local-hidden");
                });


                // Show Anti-Slavery link if user is in the UK
                if (country_code == 'UK' || country_code == 'GB' || country_code == 'IE') {
                    $("#anti-slavery").show();
                } else {
                    $("#anti-slavery").hide();
                }
				
				
            }
        });
    }
	
    // Close the floating head animation
    $("#floating-head #head-close").click(function(e) {
        e.stopPropagation();
        //$("#floating-head").fadeOut();  This would be the easiest, but NOOOooooo....
        // there is a adjustFloatingHead() function in play, which uses top-margin to vertically center the talking head up to a maximum of 420px

        var stepSize = 500; // animation duration for each step of the animation

        var scrollTop = $(window).scrollTop();
        var elementOffset = $('#head-text').offset().top;
        var dY = (scrollTop - elementOffset + 113);
        var oldHeight = $("#head-text").outerHeight();
        var oldWidth = $("#head-text").outerWidth();
        var newHeight = $("header #utilitynav a.butn").outerHeight();
        var newWidth = $("header #utilitynav a.butn").outerWidth() + 1;
        var newRight = 0;

        $("#floating-head").css("z-index", "999");
        $("#floating-head #head-close").fadeOut(stepSize);
        $("#floating-head #head-image").fadeOut(stepSize);

        if ($(".mobile-talk").css("display") == "block") {
            // mobile nav is being used
            dY = (scrollTop - elementOffset);
            newWidth = oldWidth;
            newHeight = oldHeight;
        } else if ($("#menu").hasClass("fixed") && $("#menu").hasClass("fixed-expanded")) {
            // page is scrolled down, then up a bit; utilitynav is visible but compressed
            dY = (scrollTop - elementOffset + 103);
            newRight = 15;
        } else if ($("#menu").hasClass("fixed")) {
            // page is scrolled down, utilitynav is not visible
            dY = (scrollTop - elementOffset);
            newWidth = oldWidth;
            newHeight = oldHeight;
        } else {
            // page is scrolled up to top
            dY = (scrollTop - elementOffset + 113);
            newRight = 15;
        }

        setTimeout(function(){
            $( "#head-text" ).animate({
                top: dY,
                right: newRight,
                height: newHeight,
                width: newWidth,
            }, stepSize, function() {
                $("#floating-head").fadeOut(stepSize);
            });
        }, stepSize + 100);

        // set a cookie that the head should remain closed for the duration of the session
        document.cookie = "chatSticky=closed; path=/;";

    });

    //scroll back to top button
    $(window).on('load resize', function(){
        var height = $(document).outerHeight();
        var width = $(document).outerWidth();
        var btn = $('#scrollTop');
    });
    $(document).scroll(function(){
        var y = $(this).scrollTop();
        if (y > 1000){
            $('#scrollTop').fadeIn();
        } else {
            $('#scrollTop').fadeOut();
        }
    });
    backToTop = function(){
        $(window).scrollTop(0);
        ga('send', 'event', 'Return to Top', 'click', window.location.href, {'anonymizeIp': true});
    }

    // If the user has a programID in the QueryString, store it for later use.
    var programID = getParameterByName('programID');
    if (programID) {
        var expiry = new Date();
        expiry.setTime(new Date().getTime()+(10*60*1000));
        document.cookie = "programID="+programID+"; expires="+ + expiry.toGMTString()+"; path=/";
    }
    
	// personalize aspects of the site based on cookie data
    function runPersonalization() {
        var cookieVal = readCookie("FedUser");
        var mainClassSelector = $("main").attr('class');
        if (typeof mainClassSelector !== typeof undefined && mainClassSelector !== false) {
            var mainClass = $("main").attr('class').toString();
            // if cookie is true and current language is Eng, change nav to federal nav.
            if (readCookie("FedUser") === "true" && mainClass.length == 0) {
                $("header").addClass("federal");
                $("#home-logo").attr("href", "https://rancher.com/government");
            }
        }
    }

	// Run personalization code
	runPersonalization();
});


let largestHeight = 0;
function calculateLargestHeight(jqueryClassSelector) {
    jqueryClassSelector.each(function() {
        if ($( this ).height() > largestHeight) {
            largestHeight = $( this ).height();
        }
    });
    return largestHeight;
}











































////////////////////////////////////////// Everything below this will be moved into header.js soon ///////////////////////////////////////////////////



$(function() {
    var hasNotification = false;


////////////////////////////////////////// ADJUST BANNER ON PAGE LOAD AND RESIZE ///////////////////////////////////////////////////
    topBannerAdjustment();
    $(window).resize(function(){
        topBannerAdjustment();
    })
////////////////////////////////////////// END ADJUST BANNER ON PAGE LOAD AND RESIZE ///////////////////////////////////////////////////

////////////////////////////////////////// END BREADCRUMB AND GLOBAL NOTIFICATION ADJUSTMENT ///////////////////////////////////////////////////
//jgunther: if there are no breadcrumbs margin top isn't needed until mobile view. /solutions/kubernetes 09/13/2018
// if ($('.breadcrumbs').length > 0 || $( window ).width() <= 768) {
//     adjustedMargin = $('.breadcrumbs').height();
//     $('.top-banner').css('margin-top', adjustedMargin + 'px');
// } else if ($('.breadcrumbs').length === 0) {
//     $('.top-banner').css('margin-top', '0'); //jgunther looks like the top-banner padding calculation is off by 6px when there are no breadcrumbs on the page /solutions/kubernetes 09/13/2018
// }
//check for global notification and apply styles as needed
// var adjustedMargin;
// if ($('#global-notification').length > 0){
//     hasNotification = true;
//     adjustedMargin = $('#global-notification').height();
//     //jgunther: if there are no breadcrumbs margin top isn't needed until mobile view. /solutions/kubernetes 09/13/2018
//     if ($('.breadcrumbs').length > 0 || $( window ).width() <= 768) {
//         $('.top-banner').css('margin-top', adjustedMargin + 'px');
//     } else if ($('.breadcrumbs').length === 0) {
//         $('.top-banner').css('margin-top', '6px'); //jgunther looks like the top-banner padding calculation is off by 6px when there are no breadcrumbs on the page /solutions/kubernetes 09/13/2018
//     }
// }
////////////////////////////////////////// END BREADCRUMB AND GLOBAL NOTIFICATION ADJUSTMENT ///////////////////////////////////////////////////


////////////////////////////////////////// INITIALIZE STICKY NAV HELPERS ///////////////////////////////////////////////////
// sticky nav
    var lastScrollTop = 0;
    var lastScrollTop2 = 0;
    var products_nav = $('.product-nav-row1');
////////////////////////////////////////// END INITIALIZE STICKY NAV HELPERS ///////////////////////////////////////////////////

////////////////////////////////////////// BREADCRUMB ADJUSTMENT ///////////////////////////////////////////////////
    if ($(".breadcrumbs").length === 0 && $("#product-nav").length > 0) {
        $("#product-nav").addClass("no-breadcrumbs");  // modify stickynav CSS if no breadcrumb bar
    }
////////////////////////////////////////// END BREADCRUMB ADJUSTMENT ///////////////////////////////////////////////////

////////////////////////////////////////// INITIALIZE HEADER COMPONENTS ///////////////////////////////////////////////////
    var menu = $('#menu');
    var utilnav = $('#utilitynav');
    var gNotification = $('#global-notification');
    var stickyNav = $('.sticky_nav');
    var topBanner = $('.top-banner');
    var stickyInnerNav = $('.inner-menu');
 
// var scrolling = false;
// $(window).scroll(function(e) {
//     if (!scrolling) {
//         e.preventDefault();
//         e.stopPropagation();
//
//         scrolling = true;
//         scrolling = false;
//     }
// });
////////////////////////////////////////// END INITIALIZE HEADER COMPONENTS ///////////////////////////////////////////////////

////////////////////////////////////////// PROMO NAV ///////////////////////////////////////////////////
// if the global notifications are on add class to promo_nav to adjust its position
    if (gNotification.length > 0) {
        $(".promo_nav").addClass("global-notification");
    }

    $(window).scroll(function() {
        //emergency stop scrolling if there is a flicker
        var scrollTop = $(this).scrollTop();
        if (lastScrollTop2 == scrollTop) {
            lastScrollTop2 = lastScrollTop;
            lastScrollTop = scrollTop;
        } else {
            var productNavScrollTop = 0;
            if (hasNotification){
                productNavScrollTop =+ 34;
            }
            if ($("#product-nav").length) {
                productNavScrollTop = $("#product-nav").offset().top - menu.height();
                if (utilnav.hasClass("fixed")) productNavScrollTop = productNavScrollTop - utilnav.height();
                if ($(".breadcrumbs").length) productNavScrollTop = productNavScrollTop - $(".breadcrumbs").height();

            }

            if (window.innerWidth > 768) {
                if(scrollTop < lastScrollTop) {
                    // scrolling up
                    var cookieAlertAdjustment = 0;
                    var menuAdjustment = 40;
                    if($(".cookies-alert").css("display") === "block") cookieAlertAdjustment = $(".cookies-alert").outerHeight();
                    var adjustment = menuAdjustment + cookieAlertAdjustment;
                    products_nav.addClass('expanded');
                    $(".product-nav-row1").css("top", calculateHeaderHeight());
                    // if(scrollTop > 40) {
                    if(scrollTop > adjustment) {
                        menu.css('top', '49px');
                        menu.addClass('fixed-expanded');
                        stickyInnerNav.addClass('expanded-inner');
                        utilnav.addClass('fixed');
                        gNotification.addClass('fixed');
                        stickyNav.addClass('fixed');
                        stickyNav.css('top', calculateHeaderHeight());
                    } else {
                        menu.removeClass('fixed');
                        menu.removeClass('fixed-expanded');
                        stickyInnerNav.removeClass('expanded-inner');
                        menu.css('top', '77px');
                        utilnav.removeClass('fixed');
                        gNotification.removeClass('fixed');
                        stickyNav.removeClass('fixed');
                        stickyNav.css('top', calculateHeaderHeight());
                    }
                    if (scrollTop < productNavScrollTop) {
                        products_nav.removeClass('fixed expanded');
                        $(".product-nav-row1-container").removeClass("fixedHeight");
                        $(".product-nav-row1-container").css("height", "auto");
                    }
                } else if (scrollTop > lastScrollTop) {
                    // scrolling down
                    var cookieAlertAdjustment = 0;
                    var menuAdjustment = 80;
                    if($(".cookies-alert").css("display") === "block") cookieAlertAdjustment = $(".cookies-alert").outerHeight();
                    var adjustment = menuAdjustment + cookieAlertAdjustment;
                    utilnav.removeClass('fixed');
                    menu.removeClass('fixed-expanded');
                    stickyInnerNav.removeClass('expanded-inner');
                    // if(scrollTop > 80) {
                    if(scrollTop > adjustment) {
                        menu.addClass('fixed');
                        menu.css('top', '0px');
                        gNotification.addClass('fixed');
                        stickyNav.addClass('fixed');
                        stickyNav.css('top', calculateHeaderHeight());
                    } else {
                        menu.removeClass('fixed');
                        gNotification.removeClass('fixed');
                        stickyNav.removeClass('fixed');
                    }
                    products_nav.removeClass('expanded');
                    if (scrollTop > productNavScrollTop) {
                        if ($(".product-nav-row1-container").length && !$(".product-nav-row1-container").hasClass("fixedHeight")) {
                            // Make a div the same height as the product nav to replace the product nav spot so that the page doesn't jitter when the product nav is removed from the document layout flow.
                            // Also, the height of the product nav changes when it gets stickied to the top of the page, so only set the height once
                            $(".product-nav-row1-container").addClass("fixedHeight");
                            $(".product-nav-row1-container").height(products_nav.outerHeight());
                        }
                        products_nav.addClass('fixed');
                        $(".product-nav-row1").css("top", calculateHeaderHeight());
                        if (hasNotification){
                            products_nav.addClass('hasNotification');
                        }
                    }
                }
            } else {
                if (scrollTop == 0) {
                    stickyNav.removeClass('fixed');
                } else {
                    stickyNav.addClass('fixed');
                    stickyNav.css('top', topBanner.outerHeight());
                }
            }

            lastScrollTop2 = lastScrollTop;
            lastScrollTop = scrollTop;


            // Stop scrolling event if up and down infinite loop

            targetElementScrollTop = 0;
        }



    });
////////////////////////////////////////// END PROMO NAV ///////////////////////////////////////////////////


////////////////////////////////////////// DROPDOWN MENU ///////////////////////////////////////////////////
    $('.menudropdowns .outer').each(function(i) {
        $('#menu .category').eq(i).append(this);
    });
////////////////////////////////////////// END DROPDOWN MENU ///////////////////////////////////////////////////

////////////////////////////////////////// SHOPPING CART ///////////////////////////////////////////////////
    if ($("#utilitynav-cart").length > 0) {
        $.getJSON('https://buy.suse.com/DRHM/store?Action=DisplayDRCartSummaryJSONPage&SiteID=suse&ThemeID=30993100&Env=BASE&jsonp=?', function (cartJsonData) {
            var cart_summary = jQuery('#utilitynav-cart');
            var shop_link = jQuery('#utilitynav-chat');
            if (typeof cartJsonData.lineItems == 'number' && cartJsonData.lineItems > 0) {
                cart_summary.show().css("display", "inline-block");
                shop_link.hide();
                jQuery('#cart-number').html(cartJsonData.lineItems);
            } else {
                shop_link.show().css("display", "inline-block");
            }
        });
    }
////////////////////////////////////////// END SHOPPING CART ///////////////////////////////////////////////////


////////////////////////////////////////// LET'S TALK ///////////////////////////////////////////////////
    $('#talk-modal').on('shown.bs.modal', function () {
        var width = $(this).find('.modal-dialog').width() - 2;
        if( $(this).find('iframe').length == 0 ) {

            //determine the current language
            var mainElement = $("main");
            var langString = "";
            if (mainElement.length > 0) {
                var mainClass = mainElement.attr('class');
                if (mainClass != undefined && mainClass.length == 5 && mainClass.indexOf("-") == 2) {
                    langString = "/" + mainClass;
                }
            }

            $(this).find('.modal-body .row').html('<iframe src="'+serverStr+langString+'/racframe/" width="'+width+'" height="675" id="header_letstalk"></iframe>');
            $(this).find('.modal-body iframe').on('load',resizeIframe);
            $(window).resize(function() {
                var width = $('#talk-modal .modal-dialog').width();
                if(width) {
                    $('#talk-modal iframe').width(width-2);
                    resizeIframe();
                }
            });
        } else {
            $('#talk-modal iframe').width(width);
        }
    });
////////////////////////////////////////// END LET'S TALK ///////////////////////////////////////////////////



////////////////////////////////////////// LANGUAGE MENU ///////////////////////////////////////////////////
// populate titles for language links
    $(".lang-select a").each(function(i) {
        var lang = $(this).attr("data-country");
        switch(lang) {
            case "en-us": $(this).attr("title", "English"); break;
            case "de-de": $(this).attr("title", "German"); break;
            case "es-es": $(this).attr("title", "Spanish"); break;
            case "fr-fr": $(this).attr("title", "French"); break;
            case "zh-cn": $(this).attr("title", "Simplified Chinese"); break;
            case "ja-jp": $(this).attr("title", "Japanese"); break;
            case "pt-br": $(this).attr("title", "Portuguese"); break;
            default: break;
        }
    });

    $('#utilitynav-language').append($('#footer-language .popup').clone(true)).on('click',function(e) {
        var popup = $('.popup',this);
        if(!popup.is(':visible')) {
            popup.slideDown();
            $('#utilitynav-language .menu-item').addClass("active-menu");
            e.stopPropagation();
            $('#lang-dropdown').on('click', function(e) {
                e.stopPropagation();
            });

            $(document).on('click', function (e) {
                popup.slideUp();
                setTimeout(function(){ $('#utilitynav-language .menu-item').removeClass("active-menu"); }, 400);
            });
        }
    });
    $('.lang-select .popup').on('click', function(e) {
        e.stopPropagation();
    });



    $('#select-country select').change(function() {
        e.preventDefault();
        var country = $(this).val();
        alert(country);
        var countryname = $(this).data("country-name");
        var previousURL = window.location.href;
        var baseURL = location.origin;
        var ajaxURL = baseURL+"/set-country/"+country;
        $.ajax({
            url:ajaxURL,
            success: function(data) {
                if (data.success) {
                    window.location.href = previousURL;
                }
            }
        });
    });

    $('#footer-language').on('click',function(e) {
        var popup = $('.popup',this);
        if(!popup.is(':visible')) {
            popup.slideDown();
            e.stopPropagation();
            $('body').one('click',function() {
                popup.slideUp();
            });
        }
    });

    $('.lang-select .lang-left a').on('click',function(e) {
        e.preventDefault();
//		var country = $(this).data('country');
//		var outer_context = this;
//		$.get( serverStr + "/get-country-list/" + country, function( data ) {
//			var popup = $('.lang-select');
//			popup.empty();
//			var html = '<p>Please Select a Country</p><hr><div class="countries">';
//			if(data.primary.length) {
//				$.each(data.primary, function(i, v) {
//					html += '<a ' + (v.hasOwnProperty('current') ? 'class="current"' : '') + 'href="' + serverStr + '/change-language/' + jQuery(outer_context).attr('data-country') + '/' + v.country_code + '/' + v.name + '" onclick="changeHeaderCountry(this)" data-country-name="'+v.name+'"  data-country="'+v.country_code+'">' + v.name + '</a>';
//				});
//				html += '<hr>';
//			}
//			if(data.secondary.length) {
//				$.each(data.secondary, function(i, v) {
//					html += '<a ' + (v.hasOwnProperty('current') ? 'class="current"' : '') + 'href="' + serverStr + '/change-language/' + jQuery(outer_context).attr('data-country') + '/' + v.country_code + '/' + v.name + '" onclick="changeHeaderCountry(this)" data-country-name="'+v.name+'" data-country="'+v.country_code+'">' + v.name + '</a>';
//				});
//			}
//			html += '</div>';
//			popup.html(html);
//		});
//		return false;
        window.location = serverStr + '/change-language/' + $(this).attr('data-country') + '/';
    });
////////////////////////////////////////// END LANGUAGE MENU ///////////////////////////////////////////////////



////////////////////////////////////////// LOGIN FORM ///////////////////////////////////////////////////
    var which_drop = '#login_drop';
    var account_firstname = '';
    if (typeof logged_in_data_promise == 'object') {
        jQuery.when(logged_in_data_promise).done(function() {
            //console.log(logged_in_data_promise);
            if (logged_in_data_promise.responseJSON != null && typeof logged_in_data_promise.responseJSON !== 'undefined') {
                which_drop = '#account_drop';
                account_firstname = ucWords(logged_in_data_promise.responseJSON['firstName']);
                if (account_firstname.trim().length > 0) {
                    $('.account-firstname').text(account_firstname);
                } else {
                    which_drop = '#login_drop';
                    isLoggedIn = false;
                }
            } else {
                which_drop = '#login_drop';
                isLoggedIn = false;
            }
            //console.log(which_drop);

            // Moved the following code inside the promise, since we don't know if they're logged in until the promise is satisfied
            $("#utilitynav-login").append($('#login_form #login_drop, #account_data #account_drop').clone(true)).on('click',function(e) {
                var popup = $(which_drop, this);
                if(!popup.is(':visible')) {
                    popup.slideDown();
                    $('#login_trigger').addClass("active-menu");
                    e.preventDefault();
                    e.stopPropagation();
                }
            });
            $("#utilitynav-login a").on('click',function(e) {
                e.preventDefault();
            });
            $(document).on('click', function(event) {
                if (!$(event.target).closest(which_drop).length) {
                    $(which_drop).slideUp();
                    setTimeout(function(){ $('#login_trigger').removeClass("active-menu"); }, 400);
                }
            });

        });
    }
////////////////////////////////////////// END LOGIN FORM ///////////////////////////////////////////////////






////////////////////////////////////////// BANNER ADJUSTMENT FUNCTIONS ///////////////////////////////////////////////////
// adjust header height for fixed scrolling and sticky navs and anchor scrolls
    function calculateHeaderHeight() {
        // start at one because there is 1 pixel overlap between #utilitynav and #nav
        var headerHeight = -1;
        // adjust for notification
        headerHeight += notificationBannerAdjustment();
        // adjust for breadcrumbs
        headerHeight += breadcrumbsBannerAdjustment();

        // adjust for scrolling and mobile changes to the banner
        if ($('#menu').hasClass('fixed-expanded')) {
            headerHeight += ($('#utilitynav').height() + $('#menu .container-fluid').height());
        } else if ($('#menu').hasClass('fixed')) {
            headerHeight += $('#menu .container-fluid').height();
        } else {
            if ($( window ).width() > 768){
                headerHeight += 134;
            } else {
                headerHeight += $('#menu .container-fluid').height();
            }
        }
        return headerHeight;
    }

// return breadcrumb height
    function breadcrumbsBannerAdjustment() {
        if ($('.breadcrumbs-container').length > 0 || $( window ).width() <= 768) {
            return $('.breadcrumbs-container').height();
        }
        return 0;
    }

// return notification height
    function notificationBannerAdjustment() {
        if ($('#global-notification').length > 0) {
            return $('#global-notification').height();
        }
        return 0;
    }


    function topBannerAdjustment() {
        if (window.innerWidth > 768) {
            var topBannerAdjustment = 134;
            topBannerAdjustment += notificationBannerAdjustment();
            topBannerAdjustment += breadcrumbsBannerAdjustment();
            if ($('.breadcrumbs-container')) {
                $('.top-banner').css('padding-top', topBannerAdjustment);
            }
        } else { //jgunther 01/08/2019 In mobile, the breadcrumbs dissapear but the global notification remains so still need to adjust for global notification
            var topBannerAdjustment = 60;
            topBannerAdjustment += notificationBannerAdjustment();
            $('.top-banner').css('padding-top', topBannerAdjustment);
        }
    }
////////////////////////////////////////// END BANNER ADJUSTMENT FUNCTIONS ///////////////////////////////////////////////////

////////////////////////////////////////// SHOW RAC MODAL ///////////////////////////////////////////////////
    // if rac=true show Let's Talk modal
    if (window.location.href.indexOf('rac=true') > 0) {
        $("#talk-modal").modal("show");
    }
////////////////////////////////////////// END SHOW RAC MODAL ///////////////////////////////////////////////////

// When the user clicks the link to exit the Federal Nav, set a cookie that they are no longer interested in the Federal User experience, and refresh the page.
//    - If they happen to be in the Federal section, redirect to the homepage.
	$(".fedexit").click(function(e) {
		e.stopPropagation();
		e.preventDefault();
		createCookie('FedUser', 'false', 31); 
		if(window.location.href.indexOf('https://rancher.com/government') > 0) { 
			window.location.href = '/'; 
		} else { 
			window.location.href = "";
		}
	})


});
////////////////////////////////////////// Don't put code below this  put it above instead jgunther ///////////////////////////////////////////////////

