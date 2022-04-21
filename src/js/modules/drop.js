import {
    postData
} from "./services/requests";

const drop = () => {

    const fileInputs = document.querySelectorAll('[name="upload"]');





    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(event => {
        fileInputs.forEach(item => {
            item.addEventListener(event, preventDefault);

        });

    });

    function preventDefault(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['drageneter', 'dragover'].forEach(action => {
        fileInputs.forEach(input => {
            input.addEventListener(action, () => addStyle(input));

        });

    });

    ['dragleave', 'drop'].forEach(action => {
        fileInputs.forEach(input => {
            input.addEventListener(action, () => removeStyle(input));

        });

    });

    function addStyle(item) {
        item.closest('.file_upload').style.border = 'dashed yellow';
        console.log('jopa');
    }

    function removeStyle(item) {
        item.closest('.file_upload').style.border = 'none';

    }


    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            if (input.closest('.main')) {
                let data = new FormData();
                data.append('file', input.files[0]);
                postData('assets/server.php', data)
                    .then(res => console.log(res));


            }

            let dots;
            const arr = input.files[0].name.split('.');
            arr[0].length > 5 ? dots = '...' : dots = '.';
            const name = arr[0].substring(0, 5) + dots + arr[1];
            input.previousElementSibling.textContent = name;

        });

    });



};

export default drop;