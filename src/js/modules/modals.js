
import {checkInputs} from "./checkInputs";


function hideContent(item, activeClass, hideClass) {
    item.classList.remove(activeClass);
    item.classList.add(hideClass);
    document.body.style.overflow = '';
    document.body.style.marginRight = `0px`;


    
    
}

function returnActiveTab(selector, activeClass, i) {
    const tabs = document.querySelectorAll(selector);
    tabs.forEach(tab => {
        tab.classList.remove(activeClass);
    });
    tabs[i].classList.add(activeClass);

}
returnActiveTab('.balcon_icons_img', 'do_image_more', 0);
const modals = (state) => {


    function modalContent(state, trigger, item, closeTrigger, closeStrict = false) {
        const btn = document.querySelectorAll(trigger),
            pop = document.querySelector(item),
            close = document.querySelector(closeTrigger),
            activeClass = 'show',
            hideClass = 'hide',
            windows = document.querySelectorAll('[data-modal]'),
            scroll = hideScroll();


        function closeWindow() {

            windows.forEach(item => {
                item.classList.remove('show');
                item.classList.add('hide');
            });
        }


        btn.forEach(item => {
            showHidePop(state, item, pop, close);
        });


        function showContent(item) {
            pop.classList.add(activeClass);
            pop.classList.remove(hideClass);
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
            // clearInterval(timerId);
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



        function showHidePop(state, trigger, item, closeTrigger) {

            function triggerActive(state) {
                trigger.addEventListener('click', (e) => {
                    let target = e.target;
                    e.preventDefault();
                    if (target.classList.contains('popup_calc_button')) {
                        checkInputs(state, '.popup_calc_content input', closeWindow, showContent, pop, '#width', '#height', 'value');

                    } else if (target.classList.contains('popup_calc_profile_button')) {
                        checkInputs(state, '.checkbox-custom', closeWindow, showContent, pop, 'input[name="cold"]', 'input[name="warm"]', 'checked', '.popup_calc_profile input');
                    } else {
                        if (closeStrict) {
                            closeWindow(state);
                            showContent(item);
                        }
                        if (closeStrict == false) {
                            showContent(item);
                        }
                    }

                });
            }
            triggerActive(state);

            item.addEventListener('click', (e) => {
                const target = e.target;
                if (closeStrict) {
                    if (target && target == closeTrigger || target == closeTrigger.children[0]) {
                        hideContent(item, 'show', 'hide');

                    }
                } else {
                    if (target && target == closeTrigger || target == item || target == closeTrigger.children[0]) {
                        hideContent(item, 'show', 'hide');
                    }
                }
            });

        }

        // document.addEventListener('click', (e) => {
        //     console.log(e.target);


        // });

        // let timerId = setTimeout(() => {
        //     showContent(linkPop);
        // }, 6000);
    }





    modalContent(state, '.header_btn', '.popup_engineer', '.popup_engineer .popup_close');
    modalContent(state, '.phone_link', '.popup', '.popup .popup_close');
    modalContent(state, '.glazing_price_btn', '.popup_calc', '.popup_calc_close');
    modalContent(state, '.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', true);
    modalContent(state, '.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', true);

};




export default modals;
export {
    hideContent
};