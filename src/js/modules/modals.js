const modals = () => {
    let btnPressed = false;

    function modalContent(trigger, item, closeTriggerSelector, closeBackSelector) {


        const btn = document.querySelectorAll(trigger),
            pop = document.querySelector(item),
            close = document.querySelectorAll(closeTriggerSelector),
            closeBack = document.querySelectorAll(closeBackSelector),
            activeClass = 'show',
            hideClass = 'hide',
            windows = document.querySelectorAll('[data-modal'),
            scroll = hideScroll(),
            forms = document.querySelectorAll('form');


        function showContent() {
            addAnimation('fadeIn', pop);
            windows.forEach(window => {
                window.classList.remove('fadeOutDown');
                addAnimation('fadeInUp', window);
            });
            forms.forEach(form => {
                form.classList.add('animated','fadeInDown');

            });
            pop.classList.add(activeClass);
            pop.classList.remove(hideClass);

            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
            triggerJump();


            btnPressed = true;
        }

        function addAnimation(selector, pop) {
            pop.classList.add('animated', selector);
        }







        function hideContent() {
            windows.forEach(window => {
                window.classList.remove('fadeInUp');
                addAnimation('fadeOutDown', window);

            });
            setTimeout(() => {
                pop.classList.remove(activeClass);
                pop.classList.add(hideClass);

            }, 700);

            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
            const gift = document.querySelector('.fixed-gift');
            gift.style.right = '';

        }

        function showHideContent(trigger, func, active = '') {
            trigger.forEach(item => {
                item.addEventListener('click', (e) => {
                    let target = e.target;
                    if (target && target.classList.contains('pulse')) {
                        item.style.display = 'none';
                    }
                    if (!active) {
                        func();
                    } else {
                        if (target && target.classList.contains(active)) {
                            func();
                        }
                    }

                });
            });
        }
        showHideContent(btn, showContent);
        showHideContent(close, hideContent);
        showHideContent(closeBack, hideContent, 'popup-design');
        showHideContent(closeBack, hideContent, 'popup-consultation');
        showHideContent(closeBack, hideContent, 'popup-gift');


       

        function hideScroll() {
            const div = document.createElement('div');
            document.body.append(div);
            div.style.width = '50px';
            div.style.height = '50px';
            div.style.overflowY = 'scroll';
            div.style.visibility = 'hidden';
            const result = div.offsetWidth - div.clientWidth;
            return result;
        }

        function triggerJump() {
            const gift = document.querySelector('.fixed-gift');
            gift.style.right = `${+getComputedStyle(gift).right.replace(/\D/ig, '') + scroll}px`;

        }



        function showModalByTime(selector) {
            setTimeout(() => {
                let showMode;
                windows.forEach(item => {
                    if (getComputedStyle(item).display !== 'none') {
                        showMode = 'block';
                    }
                });

                if (!showMode) {
                    const popup = document.querySelector(selector);
                    popup.style.display = 'block';
                    addAnimation('fadeIn', popup);


                }
            }, 3000000);

        }


        showModalByTime('.popup-consultation');




        // document.body.addEventListener('click', (e) => {
        //     console.log(e.target);

        // });

    }

    function openByScroll(selector) {
        window.addEventListener('scroll', () => {
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) {
                document.querySelector(selector).click();
            }

        });
    }


    modalContent('.button-design', '.popup-design', '.popup-close', '.popup-design');
    modalContent('.button-consultation', '.popup-consultation', '.popup-close', '.popup-consultation');
    modalContent('.pulse', '.popup-gift', '.popup-close', '.popup-gift');
    openByScroll('.fixed-gift');

};




export default modals;