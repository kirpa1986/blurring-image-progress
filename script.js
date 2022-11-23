const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading-text');

fetch('https://api.unsplash.com/photos/random?client_id=W4Ve29x57Bt3IJ6C7M8k1ywiPEueoYlfZVjQnEHeAb4&orientation=landscape')
.then(res => res.json())
.then(res => {
    bg.style.background = `url("${res.urls.regular}") no-repeat center center/cover`
})

let initialBlur = 30;
let initialOpacity = 1;
const opacityStep = parseFloat(initialOpacity/100);
const blurStep = parseFloat(initialBlur/100);
bg.style.filter = `blur(${initialBlur}px)`;
loadText.style.opacity = `${initialOpacity}`;
let load = 0;

let int = setInterval(blurring, 20);

function blurring() {
    load++;
    initialBlur -= blurStep;
    initialOpacity -= opacityStep;
    loadText.textContent = `${load}%`;
    bg.style.filter = `blur(${initialBlur}px)`
    loadText.style.opacity = `${initialOpacity}`;
    if (load === 100) clearInterval(int);


}