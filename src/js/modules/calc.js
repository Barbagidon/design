import {
    postData
} from "./services/requests";

const calc = (size, material, options, promo, price, state, calcFormSelector) => {
    const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promoBlock = document.querySelector(promo),
        priceBlock = document.querySelector(price),
        calcForm = document.querySelector(calcFormSelector);


    let res = 0;


    function calcPrice() {

        res = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
        if (sizeBlock.value === "" || materialBlock.value === "") {
            priceBlock.textContent = 'Выберите, пожалуйста, нужный размер и материал';
        } else if (promoBlock.value === 'IWANTPOPART') {
            res = Math.round(+res * 0.7);
            priceBlock.textContent = res;
        } else {
            priceBlock.textContent = res;


        }

        function createState(block, state, stateKey) {
            if (block === promoBlock) {
                state[stateKey] = promoBlock.value;

            } else if (block === priceBlock) {
                state[stateKey] = priceBlock.textContent;


            } else {
                const options = block.options;
                const index = block.selectedIndex;
                state[stateKey] = options[index].textContent.replace(/[\t\n]/gi, '');

            }

            return state;
        }

        createState(sizeBlock, state, 'size');
        createState(materialBlock, state, 'material');
        createState(optionsBlock, state, 'options');
        createState(promoBlock, state, 'promocode');
        createState(priceBlock, state, 'price');




        return state;

    }




    function sendData(state) {

        let data = new FormData(calcForm);

        for (let key in state) {
            data.append(key, state[key]);
        }

        postData('assets/question.php', data)
            .then(res => {
                console.log(res);

                function selectOff(select){
                    select.selectedIndex = 0;
                }

                selectOff(sizeBlock);
                selectOff(materialBlock);
                selectOff(optionsBlock);
                promoBlock.value = '';
                priceBlock.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
                
                

            });




    }

    sizeBlock.addEventListener('change', calcPrice);
    materialBlock.addEventListener('change', calcPrice);
    optionsBlock.addEventListener('change', calcPrice);
    promoBlock.addEventListener('input', calcPrice);
    calcForm.addEventListener('submit', (e) => {
        e.preventDefault();
        sendData(state);

    });





};

export default calc;