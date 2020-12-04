/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/parts/calc.js":
/*!**************************!*\
  !*** ./js/parts/calc.js ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 27:0-14 */
/***/ ((module) => {

function calc() {
    let countInput = document.querySelectorAll('.block-counter-input')[0],
        resultInput = document.querySelectorAll('.block-counter-input')[1],
        districtInput = document.querySelector('.district'),
        result = 0;
        console.log(districtInput.selectedIndex)
    countInput.addEventListener('input', function() {
        result = this.value * 10;
        if (this.value == 0 || this.value == '' || districtInput.selectedIndex == 0) {
            resultInput.value = 0;
            districtInput.selectedIndex = 0;
        } else {
            resultInput.value = result;
        }
    });

    districtInput.addEventListener('change', function() {
        
        if (countInput.value == 0 || countInput.value == '') {
            resultInput.value = 0;
        } else {
            resultInput.value = result * this.options[this.selectedIndex].value;
        }
    });
}

module.exports = calc;

/***/ }),

/***/ "./js/parts/modal.js":
/*!***************************!*\
  !*** ./js/parts/modal.js ***!
  \***************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

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

/***/ }),

/***/ "./js/parts/slider.js":
/*!****************************!*\
  !*** ./js/parts/slider.js ***!
  \****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

function slider() {

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

    setInterval(showImage(imageNumber += 1), 3000);

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
}

module.exports = slider;

/***/ }),

/***/ "./js/parts/tabs.js":
/*!**************************!*\
  !*** ./js/parts/tabs.js ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

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

/***/ }),

/***/ "./js/parts/timer.js":
/*!***************************!*\
  !*** ./js/parts/timer.js ***!
  \***************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

function timer() {    
    function getTime(deadline) {
        let total = Date.parse(deadline) - Date.parse(new Date()),
            days = Math.floor((((total/1000)/60)/60)/24),
            hours = Math.floor((((total/1000)/60)/60)%60),
            minutes = Math.floor(((total/1000)/60)%60),
            seconds = Math.floor((total/1000)%60);
        return {
            'total': total,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        }
        
    }

    function setClock(id, deadline) {
        let timer = document.querySelector(id),
            days = timer.querySelector("#dd"),
            hours = timer.querySelector("#hh"),
            minutes = timer.querySelector("#mm"),
            seconds = timer.querySelector("#ss"),
            timeInterval = setInterval(updateClock, 1000);

            function updateClock() {
                let total = getTime(deadline);

                function addZero(num) {
                    if (num < 10) {
                        return '0' + num;
                    }
                    else return num;
                }

                days.textContent = total.days;
                hours.textContent = addZero(total.hours);
                minutes.textContent = addZero(total.minutes);
                seconds.textContent = addZero(total.seconds);

                if (total.total <= 0) {
                    clearInterval(timeInterval);
                    days.textContent = "00";
                    hours.textContent = "00";
                    minutes.textContent = "00";
                    seconds.textContent = "00";
                }
            }
        
    }

    setClock('.timer', '2020-12-20')
}

module.exports = timer;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let tabs = __webpack_require__(/*! ./parts/tabs */ "./js/parts/tabs.js"),
        calc = __webpack_require__(/*! ./parts/calc */ "./js/parts/calc.js"),
        slider = __webpack_require__(/*! ./parts/slider */ "./js/parts/slider.js"),
        modal = __webpack_require__(/*! ./parts/modal */ "./js/parts/modal.js"),
        timer = __webpack_require__(/*! ./parts/timer */ "./js/parts/timer.js");

    
    tabs();
    calc();
    slider();
    timer();
    modal();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map