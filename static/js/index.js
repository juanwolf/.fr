$(document).ready(function () {
    console.log("Bonjour");

    $("#menu-button").click(function () {
        var hasClassActived = $("#menu-link-list").hasClass("active-true");
        $("#menu-link-list").removeClass();
        $(".container").removeClass("active-true");
        $(".container").removeClass("active-false");
        if (!hasClassActived) {
            $("#menu-link-list").addClass("active-true");
            $(".container").addClass("active-true");
        } else {
            $("#menu-link-list").addClass("active-false");
            $(".container").addClass("active-false");
        }
    });

    $(".container").click(function() {
        var hasClassActived = $("#menu-link-list").hasClass("active-true");
        if (hasClassActived) {
            $("#menu-link-list").removeClass();
            $(".container").removeClass("active-true");
            $(".container").removeClass("active-false");
            $("#menu-link-list").addClass("active-false");
            $(".container").addClass("active-false");
        }
    });
});
