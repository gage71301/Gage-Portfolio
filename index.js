$(document).ready(initialize);

function initialize() {
    navListener();
}

function navListener() {
    $('.toggle-button').on('click', (e) => {
        e.preventDefault()
        $('.navbar-links').toggleClass('active')
    })
}