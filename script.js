'use strict';

{
    // navbar
    const container = document.querySelector('.container');
    document.querySelector('.open-navbar-icon').addEventListener('click', () => {
        container.classList.add('change');
    });

    document.querySelector('.close-navbar-icon').addEventListener('click', () => {
        container.classList.remove('change');
    });


    const colors = [
        "#6495ed",
        "#7fffd4",
        "#ffa07a",
        "#f08080",
        "#afeeee",
    ];

    let i = 0;

    document.querySelectorAll('.nav-link').forEach(item => {
        item.style.backgroundColor = colors[i++];
    });


    // popular-tours
    document.querySelectorAll('.navigation-button').forEach(item => {
        item.addEventListener('click', () => {
            item.parentElement.parentElement.classList.toggle('change'); // item.p~.p~ = .card
        })
    })
}
