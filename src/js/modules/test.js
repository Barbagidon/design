const phone = document.querySelector('[name = "phone"]');

function createMask(event) {
    // let matrix = '+7 (___) ___ __ __',
    //     i = 0,
    //     def = matrix.replace(/\D/g, ""), //получаем из матрицы только цифровые значения
    //     val = this.value.replace(/\D/g, '');



    // if (def.length >= val.length) {
    //     val = def; // не даем удалить юзеру все цифры
    // }
    // this.value = matrix.replace(/./g, (a) => {
    //     console.log(`i: ${i}`);
    //     console.log(val);
    //     console.log(`val.length: ${val.length}`);

    //     return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;


    // });



    let matrix = 'p _ (i _ s _ k _ a) _ j _o _ p _ a',
        i = 0,
        val = this.value.replace(/\D/g, '');



    this.value = matrix.replace(/./g, (a) => {
        console.log(`a: ${a}`);
        console.log(`val: ${val}`);
        console.log(`i: ${i}`);
        console.log(`val.length: ${val.length}`);

        return /[_]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;

    });












    // this.value = matrix.replace(/./g, (a) => {

    //     return /[_\d]/.test(a) ? console.log('loh'): "";

    // });





    // if (event.type === 'blur') {
    //     if (this.value.length == 0) {
    //         console.log(this.value.length);

    //         this.value = '';
    //     } else {
    //         setCursorPosition(this.value.length, this);

    //     }
    // }

}

phone.addEventListener('input', createMask);