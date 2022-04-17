const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        no = document.querySelector('.portfolio-no'),
        allImage = document.querySelectorAll('.portfolio-block');

    function remAddClass(item, rClass, aClass) {
        item.classList.remove(rClass);
        item.classList.add(aClass);

    }

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.nodeName == 'LI' && !target.classList.contains('active')) {
            no.classList.remove('animated', 'zoomIn');
            setTimeout(() => {
                no.classList.add('animated', 'zoomIn');
            }, 10);
            remAddClass(no, 'hide', 'show');


            items.forEach(item => {
                item.classList.remove('active');
            });


            allImage.forEach(image => {
                remAddClass(image, 'show', 'hide');

                image.classList.remove('animated', 'bounceIn');
                setTimeout(() => {
                    image.classList.add('animated', 'bounceIn');
                }, 10);
                
                if (image.classList.contains(target.className) && !image.classList.contains('show')) {
                    remAddClass(no, 'show', 'hide');
                    remAddClass(image, 'hide', 'show');

                } else {

                }

            });

            target.classList.add('active');

        }

    });

};

export default filter;