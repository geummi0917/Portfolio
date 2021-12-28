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

    var controller = new ScrollMagic.Controller();
    var sectionProfile = document.querySelector('.section--profile')
    
    // 홈 타이틀 클릭하면 전체 페이지 나타내기
    $('#home--title svg').click(function () {
        var section = document.querySelectorAll('.body__container > .section');
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


})