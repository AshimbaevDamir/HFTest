const a = 'https://shop.hansa-flex.kz/ru_KZ';
const b = 'https://hansa-flex.partcommunity.com/3d-cad-models/hansa-flex?info=hansa_flex&cwid=1035';

const cat = document.querySelector(".online-cat");
const cam = document.querySelector(".cam");

cat.addEventListener('click', () => {
    window.open(a);
});

cam.addEventListener('click', () => {
    window.open(b);
});