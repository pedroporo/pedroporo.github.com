var elements = document.querySelectorAll('.highlight');
var speed = 80
var hex = new Array("00", "14", "28", "3C", "50", "64", "78", "8C", "A0", "B4", "C8", "DC", "F0")
var r = 1
var g = 1
var b = 1
var seq = 1

function changeTextVerDolorDeOjos(element) {
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    rainbow = "#" + randColor.toUpperCase();
    element.style.color = rainbow;
}
function changetext(element){
    rainbow = "#" + hex[r] + hex[g] + hex[b]
    //console.log(rainbow)
    element.style.color = rainbow;
}

function change() {
    /*for (var i = 0; i < elements.length; i++) {
        changeTextVerDolorDeOjos(elements[i]);
    }*/
    for (var i = 0; i < elements.length; i++) {
        changetext(elements[i]);
    }
    if (seq == 6) {
        b--
        if (b == 0)
            seq = 1
    }
    if (seq == 5) {
        r++
        if (r == 12)
            seq = 6
    }
    if (seq == 4) {
        g--
        if (g == 0)
            seq = 5
    }
    if (seq == 3) {
        b++
        if (b == 12)
            seq = 4
    }
    if (seq == 2) {
        r--
        if (r == 0)
            seq = 3
    }
    if (seq == 1) {
        g++
        if (g == 12)
            seq = 2
    }
}

function starteffect() {
    flash = setInterval(change, speed);
}

starteffect();