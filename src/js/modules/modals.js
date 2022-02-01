const modals = () => {

    function modalContent(trigger, item, closeTrigger, ) {
        const btn = document.querySelectorAll(trigger),
            pop = document.querySelector(item),
            close = document.querySelector(closeTrigger),
            activeClass = 'show',
            hideClass = 'hide',

            scroll = hideScroll();


        function hideContent(item, activeClass, hideClass) {
            item.classList.remove(activeClass);
            item.classList.add(hideClass);
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;

        }

        function showContent(pop) {
            pop.classList.add(activeClass);
            pop.classList.remove(hideClass);
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        }

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

        function showHidePop(trigger, item, closeTrigger) {


            trigger.addEventListener('click', (e) => {
                let target = e.target;
                if (target && target.classList.contains('pulse')) {
                    trigger.style.display = 'none';
                }
                showContent(pop);

            });
            item.addEventListener('click', (e) => {
                let target = e.target;
                if (target && target == closeTrigger || target == item) {
                    if (target && target.classList.contains('popup-gift popup-close') || target.classList.contains('popup-gift')) {
                        trigger.style.display = 'inline';
                    }
                    hideContent(item, 'show', 'hide');
                }
            });

        }


        btn.forEach(item => {
            showHidePop(item, pop, close);
        });

        function setTimer(showSelector, checkSelector, time) {
            setTimeout(() => {
                let display;
                const windows = document.querySelectorAll(checkSelector);
                const showElem = document.querySelector(showSelector);
                windows.forEach(item => {
                    if (getComputedStyle(item).display != 'none') {
                        display = 'block';
                        
                    }
                });
                if (!display) {
                    showContent(showElem);
                }
    
            }, time);
    
        }


        // setTimer(".popup-consultation", "[data-modal]", 3000);



    }

   

    modalContent('.button-design', '.popup-design', '.popup-design .popup-close');
    modalContent('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    modalContent('.pulse', '.popup-gift', '.popup-gift .popup-close');
    

};




export default modals;