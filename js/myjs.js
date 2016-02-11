(function ($) {
})(jQuery);
$(window).load(function () {
    $(".FullScreen").hide();
    $("body").css({"overflow-x":"auto"});
});
$(document).ready(function (e) {
    //setTimeout(function () {
    //    $(".FullScreen").hide();
    //    $("nav,section").show();
    //    $("#navbar-example").width($(window).width());
    //    $('#page1 p').show();
    //}, 3000);
    $("#navbar-example").width($(window).width());
    $(window).resize(function () {
        $("#navbar-example").width($(window).width()); //process here
    });
    $(".exper-box, .back-top").hover(function () {
            $(this).animate({
                    backgroundColor: "#00aadd"
                },
                300);
        },
        function () {
            $(this).animate({
                    backgroundColor: "#303030"
                },
                300);
        });
    $('.banner').unslider({
        speed: 500,               //  The speed to animate each slide (in milliseconds)
        delay: 3000,              //  The delay between slide animations (in milliseconds)
        complete: function () {
        },  //  A function that gets called after every slide animation
        keys: true,               //  Enable keyboard (left, right) arrow shortcuts
        dots: true,               //  Display dot navigation
        fluid: true              //  Support responsive design. May break non-responsive designs
    });


    //$('[data-spy="scroll"]').each(function () {
    //    var $spy = $(this).scrollspy('refresh')
    //});
    $('#navbar-example').scrollspy();
    $('#navbar-example').on('activate.bs.scrollspy', function () {
        var pre = $("#navbar-example li.active > a").text();
        if (pre != "About") $('.back-top').fadeIn();
        else $('.back-top').fadeOut();
        PageAniamtion(pre);
        // do something…
    })
})
function PageAniamtion(liText) {
    switch (liText) {
        case 'About':
        {
            $('#page1 p').show();
            break;
        }
        case 'Skill':
        {
            $('#page2 h3').show();
            $('#page2 p').show();
            break;
        }
        case 'Experience':
        {
            $('#page3 h3').show();
            $('#page3 .exper-box').show();
            break;
        }
        case 'More':
        {
            $('#page4 .row').show();
            break;
        }
        case 'Contact':
        {
            $('#page5 h3').show();
            $('#page5 article').show();
            break;
        }
    }
}