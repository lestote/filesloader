const gifMap = require('./images.map');

const background = () => {
    const randomBackground = `./images/background/${gifMap[0][Math.floor(Math.random() * gifMap[0].length)]}`;
    return document.getElementById('background').innerHTML = `<img style="opacity: 1" class="cover" src="${randomBackground}"></img>`;
};

const cover1 = () => {
    const randomFirstOverlay = `./images/overlayFirst/${gifMap[1][Math.floor(Math.random() * gifMap[1].length)]}`;
    return document.getElementById('cover1').innerHTML = `<img style="opacity: 0.25" class="cover" src="${randomFirstOverlay}"></img>`;
};

const cover2 = () => {
    const randomSecondOverlay = `./images/overlaySecond/${gifMap[2][Math.floor(Math.random() * gifMap[2].length)]}`;
    return document.getElementById('cover2').innerHTML = `<img style="opacity: 0.25" class="cover" src="${randomSecondOverlay}"></img>`;
};

const cover3 = () => {
    const randomOtherOverlay = `./images/overlayOther/${gifMap[3][Math.floor(Math.random() * gifMap[3].length)]}`;
    return document.getElementById('cover2').innerHTML = `<img style="opacity: 0.25" class="cover" src="${randomOtherOverlay}"></img>`;
};



setInterval(() => background(), 3000);
setInterval(() => cover1(), 500);
setInterval(() => cover2(), 250);
setInterval(() => cover3(), 7000);