$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > 0);
    });
});

$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});