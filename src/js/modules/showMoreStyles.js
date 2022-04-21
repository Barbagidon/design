import {
    getResource
} from "./services/requests";

const showMoreStyles = (trigger, wrapperSelector) => {

    const btn = document.querySelector(trigger),
        wrapper = document.querySelector(wrapperSelector);


    btn.addEventListener('click', (e) => {
        getResource('assets/db.json')
            .then(res => {
                res.styles.forEach(({
                    src,
                    title,
                    link
                }) => {
                    const div = document.createElement('div');
                    div.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'bounceInUp');
                    wrapper.appendChild(div);
                    div.innerHTML = `
                    <div class=styles-block>
						<img src=${src} alt>
						<h4>${title}</h4>
						<a href=${link}>Подробнее</a>
					</div>
				</div>
                     `;
                });
            })
            .then(() => {
                    btn.classList.add('animated', 'fadeOutDown');
                    setTimeout(() => {
                        btn.remove();
                    }, 500);
                }


            )
            .catch(() => {
                const div = document.createElement('div');
                div.style.cssText = 'text-align: center';
                div.innerHTML = '<p>Что - то пошло не так. Скоро все починим:)</p>';
                wrapper.appendChild(div);
                

            });

    });












};

export default showMoreStyles;