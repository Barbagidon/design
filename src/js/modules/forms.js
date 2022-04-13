const forms = () => {
    'use strict';
    const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        upload = document.querySelectorAll('[name="upload"]');



    const alert = {
        loading: 'Загрузка...',
        ok: 'Ваша заявка принята. Свяжемся с вами в ближайшее время',
        spinner: 'assets/img/spinner.gif',
        success: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    };

    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: 'POST',
            body: data,
        });

        return await res.text();
    };

    function formClear(input) {
        input.forEach(item => {
            item.value = '';
        });
        upload.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран';

        });
    }


    upload.forEach(item => {
        item.addEventListener('input', () => {
            let dots;
            const arr = item.files[0].name.split('.');
            arr[0].length > 5 ? dots = '...' : dots = '.';
            const name = arr[0].substring(0, 5) + dots + arr[1];
            item.previousElementSibling.textContent = name;
        });

    });


    function createMessage() {
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                let statusMessage = document.createElement('div');
                form.parentNode.appendChild(statusMessage);

                let img = document.createElement('img');
                statusMessage.appendChild(img);
                img.style.cssText = 'display: block; margin: 0 auto';

                let message = document.createElement('div');
                message.style.cssText = 'text-align: center;';
                statusMessage.appendChild(message);



                let link;
                let data = new FormData(form);
                form.closest('.popup-design') || form.classList.contains('calc_form') ? link = path.designer : link = path.question;

                const makeFormContent = (src, text) => {
                    form.classList.add('animated', 'fadeOutLeft');
                    setTimeout(() => {
                        form.style.display = 'none';
                        img.setAttribute('src', src);
                        message.textContent = text;
                        statusMessage.classList.add('animated', 'fadeInRight');


                    }, 400);

                };

                makeFormContent('assets/img/spinner.gif', alert.loading);




                postData(link, data)
                    .then(res => {
                        console.log(res);
                        makeFormContent('assets/img/ok.png', alert.ok);
                        setTimeout(() => {
                            form.style.display = 'block';
                            form.classList.remove('fadeOutLeft');
                            form.classList.add('fadeInDown');
                            statusMessage.classList.add('animated', 'fadeOutLeft');
                            statusMessage.style.display = 'none';

                        }, 3000);


                    });

                formClear(inputs);





            });

        });
    }
    createMessage();



};
export default forms;