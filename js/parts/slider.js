let slides = document.querySelectorAll('.slide'),
    dotsBlock = document.querySelector('.dots')
    dots = document.querySelectorAll('.dot'),
    nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    imageNumber = 0;

showImage(imageNumber);

function showImage(a) {
    if (a < 0) {
        imageNumber = slides.length - 1;
        a = slides.length - 1;
    }
    if (a >= slides.length) {
        imageNumber = 0;
        a = 0;
    }
    for(let i = 0; i < slides.length; i++){
        slides[i].classList.remove('show');
        slides[i].classList.add('hide');
        dots[i].classList.remove('dot-active')
    }
    slides[a].classList.add('show');
    slides[a].classList.remove('hide');
    dots[a].classList.add('dot-active');
}


nextBtn.addEventListener('click', () => {
    showImage(imageNumber += 1)
});

prevBtn.addEventListener('click', () => {
    showImage(imageNumber -= 1)
});

dotsBlock.addEventListener('click', function(event) {
    for (let i = 0; i < dots.length; i++) {
        if (event.target.classList.contains('dot') && event.target == dots[i]) {
            showImage(i);
        }
    }
});