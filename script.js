let a9 = document.getElementById('a9');
let a7 = document.getElementById('a7');
let a8 = document.getElementById('a8');
let a6 = document.getElementById('a6');
let a5 = document.getElementById('a5');
let a4 = document.getElementById('a4');
let a3 = document.getElementById('a3');
let a2 = document.getElementById('a2');
let a1 = document.getElementById('a1');
let a10 = document.getElementById('a10');
window.addEventListener('scroll',function(){
    let value =window.scrollY;
    a9.style.top = value * 0.50 + 'px';
    a7.style.top = value * 0.30 + 'px';
    a8.style.top = value * 0.30 + 'px';
    a6.style.top = value * 0.25 + 'px';
    a5.style.top = value * 0.15 + 'px';
    a4.style.top = value * 0.10 + 'px';
    a3.style.top = value * 0.10 + 'px';
    a2.style.top = value * 0.10 + 'px';
    a1.style.top = value * 0.10 + 'px';
    a10.style.top = value * 0.10 + 'px';
})


