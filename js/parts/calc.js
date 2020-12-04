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