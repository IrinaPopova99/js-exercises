window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let tabs = require('./parts/tabs'),
        calc = require('./parts/calc'),
        slider = require('./parts/slider'),
        modal = require('./parts/modal'),
        timer = require('./parts/timer');

    
    tabs();
    calc();
    slider();
    timer();
    modal();
});