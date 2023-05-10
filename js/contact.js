let kaa = document.querySelector('.kaa');
let kak = document.querySelector('.kak');
let kaak = document.querySelector('.kaak');
let kaas = document.querySelector('.kaas');

kaa.onclick = function () {
    document.getElementById('map').innerHTML = `${almaty}`;

}

kak.onclick = function () {
    document.getElementById('map').innerHTML = `${karagandy}`;

}

kaas.onclick = function () {
    document.getElementById('map').innerHTML = `${astana}`;

}

kaak.onclick = function () {
    document.getElementById('map').innerHTML = `${aktobe}`;

}

let karagandy = '<h4>Расположение в Караганде</h4> <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A2c251251b47045f1fb3424260855fe9f194d505955f4dbe4d6ccfa41a106c2da&amp;source=constructor" width="420" height="420" frameborder="0"></iframe>';
let almaty = '<h4>Расположение в Алматы</h4> <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac0ee2042f85b50575bff7fb12fa6d35633dbb02eea7e9501b4626a45d9260398&amp;source=constructor" width="420" height="420" frameborder="0"></iframe>';
let astana = '<h4>Расположение в Астане</h4> <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A4092fec612077894c7e0dada21d67b4f64dd3fd43b15fa7e2de6e413f631044f&amp;source=constructor" width="420" height="420" frameborder="0"></iframe>';
let aktobe = '<h4>Расположение в Актобе</h4> <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A2ed2e16229ba5d6c77d688c3954e1cf2e9792bc78987d14b76aee79a18a55251&amp;source=constructor" width="420" height="420" frameborder="0"></iframe>';