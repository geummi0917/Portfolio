$(document).ready(function () {

    // 동그라미 커서 생성
    const mouseCircle = document.querySelector('.custom-mouse');

    document.body.addEventListener("scroll", cursor);
    window.addEventListener("mousemove", cursor);
    
    function cursor(e) {
        mouseCircle.style.left = e.pageX + "px";
        mouseCircle.style.top = e.pageY + "px";
    }

    // 커스텀 마우스오버 이벤트
    function mouseOver() {
        mouseCircle.classList.toggle('mouse-over');
    }

    const logo = document.querySelector('.logo');
    const menuBar = document.querySelector('.menu-bar');
    const mainMenu = document.querySelector('.main-menu');
    const menuList = document.querySelectorAll('.main-menu li a');
    
    logo.addEventListener("mouseover", mouseOver);
    logo.addEventListener("mouseout", mouseOver);
    menuBar.addEventListener("mouseover", mouseOver);
    menuBar.addEventListener("mouseout", mouseOver);
    for(let i=0; i<menuList.length; i++) {
        menuList[i].addEventListener("mouseover", mouseOver);
        menuList[i].addEventListener("mouseout", mouseOver);
    }
    
    // 메뉴바 클릭 시 변경
    menuBar.addEventListener("click", function() {
        console.log('얍')
        menuBar.classList.toggle("active");
        mainMenu.classList.toggle("show");
    })

    // 앵커 이동 부드럽게
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // 홈 타이틀 클릭하면 프로필로 이동
    // document.querySelector('#home').scrollIntoView({
    //     behavior: "smooth"
    // });
    
    // 스킬 차트 그리기
    function drawChart(max, chartClass, colorName, textClass) {
        var i = 1;
        var paint = setInterval(function() {
            if(i <= max) {
                fillColor(i, chartClass, colorName);
                changeNum(i, textClass);
                i++
            } else {
                clearInterval(paint);
            }
        }, 10);
    }

    function fillColor(i, chartClass, colorName) {
        $(chartClass).css({
            "background": "conic-gradient("+colorName+" 0% "+i+"%, #ffffff "+i+"% 100%)"
        });
    }

    function changeNum(i, textClass) {
        $(textClass).text(""+i+"%");
    }

    // 스크롤 매직 라이브러리
    var controller = new ScrollMagic.Controller();

    // 흰 배경에서 헤더 색상 변경
    var logoColor = TweenMax.to('.logo a', 0.3, {
        color: "#3b3b3b"
    })

    var menuColor = TweenMax.to('.menu-bar span', 0.3, {
        backgroundColor: "#3b3b3b"
    })

    var colorChange1 = new ScrollMagic.Scene({
        triggerElement: '.ab__container',
        triggerHook: 0.5
    })
        .setTween(logoColor)
        .addTo(controller)

    var colorChange2 = new ScrollMagic.Scene({
        triggerElement: '.ab__container',
        triggerHook: 0.5
    })
        .setTween(menuColor)
        .addTo(controller)

    // 스킬 애니메이션 실행
    var skillAni = new ScrollMagic.Scene({
        triggerElement: '#skills',
        triggerHook: 0.5
    })
    .on('start', function() {
        drawChart(90, '.html', 'rgb(255, 202, 27)', '.html span');
        drawChart(80, '.css', 'rgb(255, 202, 27)', '.css span');
        drawChart(70, '.js', 'rgb(255, 202, 27)', '.js span');
        drawChart(60, '.git', 'rgb(255, 202, 27)', '.git span');
        drawChart(70, '.github', 'rgb(255, 202, 27)', '.github span');
        drawChart(30, '.react', 'rgb(255, 202, 27)', '.react span');
    })
    .addTo(controller)


})