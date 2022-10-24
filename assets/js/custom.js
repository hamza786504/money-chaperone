$(document).ready(function () {
    if (window.matchMedia('(min-width: 992px)').matches) {
        $("#sticker").sticky({ topSpacing: 0 });
        $("#scroller").sticky({ topSpacing: 43 });
    };

    if (window.matchMedia('(max-width: 992px)').matches) {
        $("#site-header").sticky({ topSpacing: 0 });
    };
});



