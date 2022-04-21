const pictureSize = (imgSelector) => {
    const images = document.querySelectorAll(imgSelector);


   


    function showImage(imageSelector) {

        let image = imageSelector.querySelector('img');
        image.src = image.src.slice(0, -4) + '-1.png';
        imageSelector.querySelectorAll('p:not(.sizes-hit)').forEach(item => {
            item.style.display = 'none';
        });  
    }


    function hideImage(imageSelector) {
        let image = imageSelector.querySelector('img');
        image.src = image.src.slice(0, -6) + '.png';
        imageSelector.querySelectorAll('p:not(.sizes-hit)').forEach(item => {
            item.style.display = 'block';
        });  
    }


    images.forEach(image => {
        image.addEventListener('mouseover', () => showImage(image));
        image.addEventListener('mouseout', () => hideImage(image));

    });


};


export default pictureSize;