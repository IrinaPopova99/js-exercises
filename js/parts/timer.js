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
