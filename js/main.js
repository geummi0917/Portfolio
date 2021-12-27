$(document).ready(function() {

    // 앵커 이동 부드럽게
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // $("#home--title").tooltip({
    //     tooltipClass:'tooltipUI',
    //     content: function(callback) {
    //       callback($(this).prop('title'));
    //     }
    // })
    
    var controller = new ScrollMagic.Controller();
    var sectionProfile = document.querySelector('.section--profile')
    
    // 홈 타이틀 클릭하면 전체 페이지 나타내기
    $('#home--title svg').click(function () {
        var section = document.querySelectorAll('.body__container > .section');
        var portfolio = document.querySelector('.section--portfolio');
        for (let i = 0; i < section.length; i++) {
            section[i].style.display = "block";
        }
        
        // 스크롤 시 헤더 나타내기
        var scene = new ScrollMagic.Scene({
                triggerElement: sectionProfile,
                triggerHook: 0.5,
            })
            .addTo(controller)
            .setClassToggle("header", "visible");


        // 홈 타이틀 클릭하면 프로필로 이동
        document.querySelector('#profile').scrollIntoView({
            behavior: "smooth"
        });
        
    })

    // // 프로필 섹션에서 각 항목 누르면 나타나기
    // $('.tab').click(function(e) {
    //     var tabNum = document.querySelectorAll('.tab');
    //     var boxNum = document.querySelectorAll('.box');
        
    //     for(let i=0; i<tabNum.length; i++) {
    //         if(e.target.value === i) {
    //             boxNum[i].style.display = "flex";
    //             tabNum[i].classList.toggle("clicked", true);
    //         } else {
    //             boxNum[i].style.display = "none";
    //             tabNum[i].classList.toggle("clicked", false);
    //         }
    //     }
    // })

    const modalOpen = () => {
        document.querySelector('modal').classList.remove('hidden');
    }

    const modalClose = () => {
        document.querySelector('modal').classList.add('hidden');
    }

    document.querySelector('profile__box').addEventListener("click", "open");

})