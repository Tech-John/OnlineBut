//Mouse Circle
const mouseCircle = document.querySelector(".mouse-circle");
const mouseDot = document.querySelector(".mouse-dot");
const mouseCircleFn = (x, y) => {
        mouseCircle.getElementsByClassName.cssText = `top: ${y}px; left: ${x}px; opacity: 1`;
        mouseDot.getElementsByClassName.cssText = `top: ${y}px; left: ${x}px; opacity: 1`;
        //End of Mouse Circle
        //Animation Circles
        const circle = document.querySelectorAll('circle')
        const mainImg = document.querySelector('.main-circle img');
        let mX = 0;
        let mY = 0;
        const animateCircles = (e, x, y) => {
                if (x < mX) {
                    circle.forEach(circle => {
                        circle.style.left = '100px';
                    })
                    mainImg.style.left = '100'
                }
                if (x < mX) {
                    mX = e.clientX
                    mY = e.clientY
                }
            }
            //End Animation Circles
        document.body.addEventListener("mousemove", (e) => {
            let x = e.clientX;
            let y = e.clientY;
            mouseCircleFn(x, y);
            animateCircles(e, x, y);
        });
        document.body.addEventListener("mouseleave", function() {
            mouseCircle.style.opacity = "0";
            mouseDot.style.opacity = "0";
        })