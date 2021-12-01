"usr strict"

document.addEventListener('DOMContentLoaded', function() {
    const form1 = document.getElementById('form1');
    const form2 = document.getElementById('form2');
    form2.addEventListener('submit', formSend);

    async function formSend1(e) {
        e.preventDefault();
        let error = formValidate(form1);

    }
    async function formSend2(e) {
        e.preventDefault();
        let error = formValidate(form2);

    }

    function formValidate(form1) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);
            if (input.classList.contains('._email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                    formAddError(input);
                    error++;
                } else {
                    if (input.value === '') {
                        formAddError(input);
                        error++;

                    }
                }
            }
        }
    }

    function formValidate(form2) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);
            if (input.classList.contains('._email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                    formAddError(input);
                    error++;
                } else {
                    if (input.value === '') {
                        formAddError(input);
                        error++;

                    }
                }
            }
        }
    }

    function formAddError(input) {
        input.paentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.paentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function emailTest(input) {
        return !/^\2+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});