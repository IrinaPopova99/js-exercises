function modal() {
    let buttonMore = document.querySelectorAll('.more'),
        cross = document.querySelector('.cross'),
        popup = document.querySelector('.popup');

    buttonMore.forEach(buttonMore => {    
        buttonMore.addEventListener('click', () => {
            popup.style.display = 'block';
            document.body.style.overflow = 'hidden';
            // this.classList.add('animated');
        });
    });

    cross.addEventListener('click', () => {
        popup.style.display = 'none';
        document.body.style.overflow = '';
    });
}

module.exports = modal;