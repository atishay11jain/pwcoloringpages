$(document).on('click', '#connectbtn', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $('#productsSection').offset().top - 100
    }, 100);
});

$(document).ready(function () {
    if (history.state?.clicked === "connectbtn") {
        $('html, body').animate({
            scrollTop: $('#productsSection').offset().top - 100
        }, 100);
    }
});