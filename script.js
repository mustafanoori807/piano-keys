function checkKey(code) {
    switch (code) {
        case 'A':
        case 'S':
        case 'D':
        case 'F':
        case 'G':
        case 'H':
        case 'J':
            return 'white';
    }
    switch (code) {
        case 'W':
        case 'E':
        case 'T':
        case 'Y':
        case 'U':
            return 'black';
    }
}


function playAudio(src, path) {
    try {
        let audio = new Audio(`assets/sounds/${path}-keys/${src}.mp3`);
        audio.play();
    } catch (e) {
        console.log(e);
    }
}


document.addEventListener("keydown", (key) => {
    let xKey = key.key.toUpperCase();
    if (checkKey(xKey) === 'white') {
        playAudio(xKey, 'white');
    } else if (checkKey(xKey) === 'black') {
        playAudio(xKey, 'black');
    } else {
        console.log('Wrong key');
    }
});