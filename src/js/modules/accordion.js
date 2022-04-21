const accordion = (triggersSelector) => {

    const triggers = document.querySelectorAll(triggersSelector);


    triggers.forEach(btn => {
        btn.addEventListener('click', function () {
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');

            if (this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
            }
            else{
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });

    });





    //     blocks = document.querySelectorAll(blockSelector);


    // blocks.forEach(block => {
    //     block.classList.add('animated', 'flipInX');

    // });


    // triggers.forEach(trigger => {
    //     trigger.addEventListener('click', function () {
    //         if (!this.classList.contains('active')) {
    //             triggers.forEach(trigger => {
    //                 trigger.classList.remove('active');
    //             });
    //             this.classList.add('active', 'active-style');

    //         }

    //     });

    // });



};

export default accordion;