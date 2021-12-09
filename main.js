$(document).ready(function() {

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
    

    $('.tab').click(function(e) {
        var tabNum = document.querySelectorAll('.tab');
        var boxNum = document.querySelectorAll('.box');
        
        for(let i=0; i<tabNum.length; i++) {
            if(e.target.value === i) {
                boxNum[i].style.display = "flex";
                tabNum[i].classList.toggle("clicked", true);
            } else {
                boxNum[i].style.display = "none";
                tabNum[i].classList.toggle("clicked", false);
            }
        }
    })

})