/*menünün üstten 210 px indikten sonra gösterilmeye devam etmesi*/
$("document").ready(function($){

    var nav = $(".menu");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 210) {
            nav.addClass("f-menu-ul");
        } else {
            nav.removeClass("f-menu-ul");
        }
    });
});
