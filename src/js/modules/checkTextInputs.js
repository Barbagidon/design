const checkTextInputs = (selector) => {
    const inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('input', (e) => {
            if (input.value.match(/[^а-яё 0-9]/ig)) {
                console.log(e.target);
            
                input.value = "";
                input.blur(); 
                
            }

        });

    });



};

export default checkTextInputs;