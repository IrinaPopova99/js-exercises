function requestCode() {
    let inputCode = document.querySelector('.popup-input'),
        button = document.querySelector('.popup-button'),
        formPopup = document.querySelector('.popup-form'),
        messageDiv = document.querySelector('.popup-loading'),
        code = 'NY2021';

    let message = {
        loading: 'Подожите...',
        success: 'Вы можете забрать свой подарок в нашем баре',
        failure: 'Что-то пошло не так :(',
        wrongCode: 'Такого кода не существует',
    };
         
    function sendForm(elem) {
        elem.addEventListener('submit', (event) => {
            event.preventDefault();
            if (inputCode.value != code) {
                alert(message.wrongCode);
            } else {
                let formData = new FormData(elem);

                function postData(data) {
                    return new Promise(function(resolve, reject) {
                        let request = new XMLHttpRequest();
                        request.open('POST', 'server.php');
                        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

                        request.addEventListener('readystatechange', () => {                    
                            if (request.readyState < 4) {
                                resolve();
                            } else if (request.readyState === 4 && request.status == 200) {
                                resolve();
                            } else {
                                reject();
                            }

                        });
                        request.send(data);
                    });
                }
                function clearData() {
                    inputCode.value = '';
                }
                postData(formData)
                    .then(() => {messageDiv.innerHTML = message.loading})
                    .then(() => {
                        alert(message.success);
                        messageDiv.innerHTML = '';
                    })
                    .catch(() => {
                        alert(message.failure);
                        messageDiv.innerHTML = '';
                    })
                    .finally(clearData);
            }
        });
    }
    
    sendForm(formPopup);
}

module.exports = requestCode;