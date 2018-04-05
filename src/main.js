const gifMap = require('./images.map');

const background = () => {
    const randomBackground = `./images/background/${gifMap[0][Math.floor(Math.random() * gifMap[0].length)]}`;
    setInterval(() => document.getElementById('background').innerHTML = `<img style="opacity: 1" class="cover" src="${randomBackground}"></img>`, 1000);
};

const cover1 = () => {
    const randomFirstOverlay = `./images/overlayFirst/${gifMap[1][Math.floor(Math.random() * gifMap[1].length)]}`;
    // setInterval(() => `<img src="${randomFirstOverlay}"></img>`, 500);
    setInterval(() => document.getElementById('cover1').innerHTML = `<img style="opacity: 0.25" class="cover" src="${randomFirstOverlay}"></img>`, 200);
};

const cover2 = () => {
    const randomSecondOverlay = `./images/overlaySecond/${gifMap[2][Math.floor(Math.random() * gifMap[2].length)]}`;
    // setInterval(() => `<img src="${randomSecondOverlay}"></img>`, 250);
    setInterval(() => document.getElementById('cover2').innerHTML = `<img style="opacity: 0.25" class="cover" src="${randomSecondOverlay}"></img>`, 500);
};



setInterval(() => background(), 3000);
setInterval(() => cover1(), 500);
setInterval(() => cover2(), 250);