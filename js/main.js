$(document).ready(function () {

    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
      
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    window.addEventListener('resize', () => setScreenSize());

    $('#home').css({
        "height": window.innerHeight+"px"
    })


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
            "background": "conic-gradient("+colorName+" 0% "+i+"%, transparent "+i+"% 100%)"
        });
    }

    function changeNum(i, textClass) {
        $(textClass).text(""+i+"%");
    }

    // 스크롤 매직 라이브러리
    var controller = new ScrollMagic.Controller();

    // 흰 배경에서 로고,메뉴 색상 변경
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
        .addTo(controller);

    // aboutme 애니메이션
    var abElements = [ document.querySelector('.ab__container'), 
                    document.querySelector('.info__container') ];

    for(let i=0; i<abElements.length; i++) {
        var abEvent = new ScrollMagic.Scene({
            triggerElement: abElements[0],
            triggerHook: 0.5
        })
            .setClassToggle(abElements[i], "active")
            .addTo(controller);
    }


    // #skills 애니메이션
    var skillAni = new ScrollMagic.Scene({
        triggerElement: '#skills',
        triggerHook: 0.5
    })
        .on('start', function() {
            drawChart(80, '.html', 'rgb(255, 202, 27)', '.html span');
            drawChart(80, '.css', 'rgb(255, 202, 27)', '.css span');
            drawChart(60, '.js', 'rgb(255, 202, 27)', '.js span');
            drawChart(50, '.git', 'rgb(255, 202, 27)', '.git span');
            drawChart(50, '.github', 'rgb(255, 202, 27)', '.github span');
            drawChart(20, '.react', 'rgb(255, 202, 27)', '.react span');
        })
        .addTo(controller);

    // #portfolio 애니메이션
    var pfElements = [ document.querySelectorAll('.pf__num'),
                    document.querySelectorAll('.pf__img'),
                    document.querySelectorAll('.pf__desc') ];

    for(let i=0; i<pfElements.length; i++) {
        for(let j=0; j<pfElements.length; j++) {
            var pfEvent = new ScrollMagic.Scene({
                triggerElement: pfElements[i][j],
                triggerHook: 1
            })
                .setClassToggle(pfElements[i][j], "active")
                .addTo(controller);
        }
    }

})