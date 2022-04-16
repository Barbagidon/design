const mask = (selector) => {



    function createMask(event) {

        let setCursorPosition = (pos, elem) => {
            elem.focus();
            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos);
            }
            if (elem.createTextRange) {
                let range = elem.createTextRange();

                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();

            }


        };


        let matrix = '+7 (___) ___ __ __',
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            i = 0;
        if (val.length < def.length) {
            val = def;
        }

        this.value = matrix.replace(/./g, (a) => {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
        });



        if (this.value.charAt(1) != '7') {
            this.value = '';
            this.blur();
        }

        if (event.type === 'blur') {
            if (this.value.length <= 2) {
                this.value = '';
            }
        } else {
            setCursorPosition(this.value.length, this);
        }


    }


    let inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('click', createMask);
        input.addEventListener('input', createMask);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);

    });





};
export default mask;