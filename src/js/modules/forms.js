const forms = () => {
    'use strict';
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');



    const messages = {
        loading: 'Загрузка...',
        ok: 'Спасибо. Мы с вами свяжемся.',
        failure: 'Все сломалось',
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

    const clearInputs = () => {
        inputs.forEach(input => {
            input.value = '';
        });
    };


    function createMessage() {
        form.forEach(item => {
            item.addEventListener('submit', (e) => {
                e.preventDefault();

                let message = document.createElement('div'); /// create a message
                message.classList.add('status');
                item.parentNode.appendChild(message);

                item.classList.add('animated', 'fadeOutUp'); /// anim for disable form

                setTimeout(() => {
                    item.style.display = 'none'; ///delete form from dom
                }, 400);

                let statusImg = document.createElement('img');
                statusImg.setAttribute('src', messages.spinner);
                statusImg.classList.add('animated', 'fadeinUp');
                message.appendChild(statusImg); /// add spinner in the message

                let textMessage = document.createElement('div');
                textMessage.textContent = messages.loading;
                message.appendChild(textMessage);



                const formData = new FormData(item);
                let api;

                item.closest('.popup-design') ? api = path.designer : api = path.question;
                console.log(api);

                postData(api, formData)
                    .then(res => {
                        console.log(res);
                        statusImg.setAttribute('src', messages.success);
                        textMessage.textContent = messages.ok;
                    }).catch(() => {
                        statusImg.setAttribute('src', messages.fail);
                        textMessage.textContent = messages.failure;
                    }).finally(() => {

                    });

            });

        });
    }

    createMessage();
};
export default forms;