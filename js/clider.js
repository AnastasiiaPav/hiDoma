let offset = 0;
const slider = document.querySelector('.slider-line')


document.querySelector('.button-right').addEventListener('click', function(){
    offset = offset + 256;
    if (offset > 1024) {
        offset = 0;
    }
    slider.style.left = -offset + 'px';
});

document.querySelector('.button-left').addEventListener('click', function () {
    offset = offset - 256;
    if (offset < 0) {
        offset = 1024;
    }
    slider.style.left = -offset + 'px';
});