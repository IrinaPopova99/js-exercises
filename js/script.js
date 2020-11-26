window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let tabs = require('./parts/tabs'),
        slider = require('./parts/slider'),
        modal = require('./parts/modal'),
        timer = require('./parts/timer');

    
    tabs;
    slider();
    timer();
    modal();
});