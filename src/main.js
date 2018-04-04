const gifMap = require('./images.map');

setInterval(() => {
    const randomBackground = `/images/background/${gifMap[0][Math.floor(Math.random() * gifMap[0].length)]}`;
    const randomFirstOverlay = `/images/overlayFirst/${gifMap[1][Math.floor(Math.random() * gifMap[1].length)]}`;
    const randomSecondOverlay = `/images/overlaySecond/${gifMap[2][Math.floor(Math.random() * gifMap[2].length)]}`;

    return document.body.innerHTML = `
        <div class="cover">
            <img src="${randomBackground}"></img>
            <img id="bg1" src="${randomFirstOverlay}"></img>
            <img id="bg2" src="${randomSecondOverlay}"></img>
        </div>
    `;
}, 500);