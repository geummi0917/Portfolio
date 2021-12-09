(function(window, document) {
    'use strict';

    var homeTitle = document.querySelector('.home--title p');

    function titleChange() {
        $('.home--title p').animate({
            "font-size": "120px",
        }, 1000)
    }


    setTimeout(() => {
        titleChange();
        homeTitle.style.color = "orange";
    }, 300);


})(window, document)