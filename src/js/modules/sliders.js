const sliders = (slides, dir, prev, next) => {
    let slideIndex = 1,
        paused = false;
    const items = document.querySelectorAll(slides);

    function plusSlides(n) {
        if (n < 1) {
            slideIndex = items.length;
        }

        if (n > items.length) {
            slideIndex = 1;
        }

        items.forEach(item => {
            item.classList.add('animated');
            item.classList.remove('show');
            item.classList.add('hide');
        });

        items[slideIndex - 1].classList.remove('hide');
        items[slideIndex - 1].classList.add('show');
    }

    plusSlides(1);

    function showSlides(n) {
        plusSlides(slideIndex += n);
    }

    function buttonAction(btn, number, classNameRemove, classNameAdd) {
        btn.addEventListener('click', () => {
            showSlides(number);
            items[slideIndex - 1].classList.remove(classNameRemove);
            items[slideIndex - 1].classList.add(classNameAdd);
        });
    }

    try {
        const nextBtn = document.querySelector(next),
            prevBtn = document.querySelector(prev);

        buttonAction(nextBtn, 1, 'fadeInLeftBig', 'fadeInRightBig');
        buttonAction(prevBtn, -1, 'fadeInRightBig', 'fadeInLeftBig');
    } catch (e) {}


    function activateAnimation() {
        if (dir === 'vertical') {
            paused = setInterval(() => {
                showSlides(1);
                items[slideIndex - 1].classList.remove('fadeInDown');
                items[slideIndex - 1].classList.add('fadeInDown');
            }, 3000);
        } else {
            paused = setInterval(() => {
                showSlides(1);
                items[slideIndex - 1].classList.remove('fadeInRightBig');
                items[slideIndex - 1].classList.add('fadeInRightBig');


            }, 3000);
        }
    }

    activateAnimation();

    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });

    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();

    });



};

export default sliders;