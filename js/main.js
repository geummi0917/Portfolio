$(document).ready(function () {

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
    var sectionProfile = document.querySelector('#aboutme')

    // 홈 타이틀 클릭하면 프로필로 이동
    document.querySelector('#home').scrollIntoView({
        behavior: "smooth"
    });

})