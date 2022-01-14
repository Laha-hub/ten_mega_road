'use strict';

{
    // Array.from(document.querySelectorAll('.navigation-button'))
    document.querySelectorAll('.navigation-button').forEach(item => {
        item.addEventListener('click', () => {
            item.parentElement.parentElement.classList.toggle('change'); // item.p~.p~ = .card
        })
    })
}
