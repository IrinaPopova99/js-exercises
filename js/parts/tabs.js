function tabs() {  
    let links = document.querySelectorAll('#links'),
        cards = document.querySelectorAll('.card'),
        menu = document.querySelector('.menu');

    function hideContent(a) {
        for(let i = a; i < cards.length; i++){
            cards[i].classList.remove('show');
            cards[i].classList.add('hide');
        }
    }

    function showContent(a) {
        if (cards[a].classList.contains('hide')) {
            cards[a].classList.remove('hide');
            cards[a].classList.add('show');
        }
    }

    menu.addEventListener('click', function(e) {
        let target = e.target;
        for (let i = 0; i < links.length; i++) {
            if (target == links[i]) {
                hideContent(0);
                showContent(i);
            }
        }
    });

    hideContent(1);
}

module.exports = tabs;