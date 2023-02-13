'use strict';

const containerImg = document.querySelector('#container-image');

const shedImg = [
    {'id': '1', 'url': './img/chrono.jpg'},
    {'id': '2', 'url': './img/inuyasha.jpg'},
    {'id': '3', 'url': './img/ippo.png'},
    {'id': '4', 'url': './img/tenchi.jpg'},
    {'id': '5', 'url': './img/tenjhotenge.jpg'},
    {'id': '6', 'url': './img/yuyuhakusho.jpg'}
]

const loadImg = (shedImg) => {
    shedImg.forEach(image => {
        containerImg.innerHTML += `
            <div class='itemImg'>
                <img src='${image.url}'>
            </div>
        `
    })
}

loadImg(shedImg, containerImg);

let eachImg = document.querySelectorAll('.itemImg');

const previous = () => {
    containerImg.appendChild(eachImg[0]);
    eachImg = document.querySelectorAll('.itemImg');
}

const next = () => {
    let lastImg = eachImg[eachImg.length - 1];
    containerImg.insertBefore( lastImg, eachImg[0]);
    eachImg = document.querySelectorAll('.itemImg');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);