var isDesktop = false;


/*---LEFT BAR ACCORDION----*/
$(function() {
    $('#nav-accordion').dcAccordion({
        eventType: 'click',
        autoClose: true,
        saveState: true,
        disableLink: true,
        speed: 'slow',
        showCount: false,
        autoExpand: true,
//        cookie: 'dcjq-accordion-1',
        classExpand: 'dcjq-current-parent'
    });
});

//Main self-executing script
var Script = function () {
//    sidebar dropdown menu auto scrolling

    jQuery('#sidebar .sub-menu > a').click(function () {
        var o = ($(this).offset());
        diff = 250 - o.top;
        if(diff>0)
            $("#sidebar").scrollTo("-="+Math.abs(diff),500);
        else
            $("#sidebar").scrollTo("+="+Math.abs(diff),500);
    });



//    sidebar toggle
    $(function() {
        function responsiveView() {
            var wSize = $(window).width();
            // if (wSize <= 768) {
                $('#container').addClass('sidebar-close');
                $('#sidebar').css('margin-left', '-210px');
                // $('#sidebar > ul').hide();
            // }

            // if (wSize > 768) {
                // $('#container').removeClass('sidebar-close');
                // $('#sidebar > ul').show();
            // }
        }
        $(window).on('load', responsiveView);
        $(window).on('resize', responsiveView);
    });

    // $('.fa-bars').click(function () {
    //     console.log("show nav");
    //     var isHidden = $('#sidebar > ul').offset().left == -210;
    //     if (isHidden === false) {
    //         hideSideBar();
    //     } else {
    //         showSideBar();

    //     }
    // });

    $('.sidebar-menu .sub-menu a').click(function() {
        $('#sidebar').css({
            'margin-left': '-210px'
        });
        // $('#sidebar > ul').hide();
        $("#container").addClass("sidebar-closed");
        $("#sidebar").addClass("closed")
        // hideSideBar(10);
    });

    function hideSideBar() {
         if(isDesktop) {
            $('#main-content').css({
                'margin-left': '0px'
            });
        }
        $('#sidebar').animate({
            'margin-left': '-210px'
        }, SIDEBARSPEED);
        // $('#sidebar > ul').hide();
        $("#container").addClass("sidebar-closed");
    }

    function showSideBar() {
        if(isDesktop) {
            $('#main-content').css({
                'margin-left': '210px'
            });
        }
        // $('#sidebar > ul').show();
        $('#sidebar').animate({
            'margin-left': '0'
        }, SIDEBARSPEED);
        $("#container").removeClass("sidebar-closed");
    }

    $('.main-content-wrapper').click(function () {
        var isShow = $('#sidebar > ul').offset().left == 0;
        if(isShow) {
            hideSideBar();
        }
    });

// custom scrollbar
    // $("#sidebar").niceScroll({styler:"fb",cursorcolor:"#4ECDC4", cursorwidth: '3', cursorborderradius: '10px', background: '#404040', spacebarenabled:false, cursorborder: ''});

    // $("html").niceScroll({styler:"fb",cursorcolor:"#4ECDC4", cursorwidth: '6', cursorborderradius: '10px', background: '#404040', spacebarenabled:false,  cursorborder: '', zindex: '1000'});

// widget tools

    jQuery('.panel .tools .fa-chevron-down').click(function () {
        var el = jQuery(this).parents(".panel").children(".panel-body");
        if (jQuery(this).hasClass("fa-chevron-down")) {
            jQuery(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
            el.slideUp(200);
        } else {
            jQuery(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
            el.slideDown(200);
        }
    });

    jQuery('.panel .tools .fa-times').click(function () {
        jQuery(this).parents(".panel").parent().remove();
    });


//    tool tips

    $('.tooltips').tooltip();

//    popovers

    $('.popovers').popover();



// custom bar chart

    if ($(".custom-bar-chart")) {
        $(".bar").each(function () {
            var i = $(this).find(".value").html();
            $(this).find(".value").html("");
            $(this).find(".value").animate({
                height: i
            }, 2000)
        })
    }


}();