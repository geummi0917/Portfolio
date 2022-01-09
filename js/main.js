$(document).ready(function () {

    // 동그라미 커서 생성
    const mouseCircle = document.querySelector('.mouse-circle');

    document.body.addEventListener("scroll", cursor);
    window.addEventListener("mousemove", cursor);
    
    function cursor(e) {
        mouseCircle.style.left = e.pageX + "px";
        mouseCircle.style.top = e.pageY + "px";
    }

    // 마우스오버 이벤트
    var logo = document.querySelector('.logo');
    logo.addEventListener("mouseover", () => {
        mouseCircle.classList.toggle('mouseOver');
    })
    logo.addEventListener("mouseout", () => {
        mouseCircle.classList.toggle('mouseOver');
    })


    // 메뉴바 클릭 시 변경
    const menuBar = document.querySelector('.menu-bar');
    var menuList = document.querySelector('.main-menu');

    menuBar.addEventListener("click", function() {
        menuBar.classList.toggle("active");
        menuList.classList.toggle("show");
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
    document.querySelector('#home').scrollIntoView({
        behavior: "smooth"
    });

    // 스크롤 매직 라이브러리
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: '#skills'

    }).on('start', function(){
        drawChart(90, '.html', 'rgb(255, 202, 27)', '.html span');
        drawChart(80, '.css', 'rgb(255, 202, 27)', '.css span');
        drawChart(70, '.js', 'rgb(255, 202, 27)', '.js span');
        drawChart(60, '.git', 'rgb(255, 202, 27)', '.git span');
        drawChart(70, '.github', 'rgb(255, 202, 27)', '.github span');
        drawChart(30, '.react', 'rgb(255, 202, 27)', '.react span');

    }).addTo(controller);

    // 차트 그리기
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
    
})