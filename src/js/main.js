document.addEventListener("keypress", function (e) {
    if (e.code === "KeyA") {
        playKey("A")
        console.log("The 'A' key is pressed.");
    }else if (e.code === "KeyS"){
        playKey("S")
        console.log("The 'S' key is pressed.");
    }else if (e.code === "KeyD"){
        playKey("D")
        console.log("The 'D' key is pressed.");
    }else if (e.code === "KeyF"){
        playKey("F")
        console.log("The 'F' key is pressed.");
    }else if (e.code === "KeyG"){
        playKey("G")
        console.log("The 'G' key is pressed.");
    }else if (e.code === "KeyH"){
        playKey("H")
        console.log("The 'H' key is pressed.");
    }else if (e.code === "KeyJ"){
        playKey("J")
        console.log("The 'J' key is pressed.");
    }else if (e.code === "KeyW"){
        playKey("W")
        console.log("The 'W' key is pressed.");
    }else if (e.code === "KeyE"){
        playKey("E")
        console.log("The 'E' key is pressed.");
    }else if (e.code === "KeyT"){
        playKey("T")
        console.log("The 'T' key is pressed.");
    }else if (e.code === "KeyY"){
        playKey("Y")
        console.log("The 'Y' key is pressed.");
    }else if (e.code === "KeyU"){
        playKey("U")
        console.log("The 'U' key is pressed.");
    }else {
        console.log("Error: " + e.code + " is an unbound key!")
    }
});

let aKey = document.querySelector(".white-keys:nth-child(1)");
let sKey = document.querySelector(".white-keys:nth-child(2)");
let dKey = document.querySelector(".white-keys:nth-child(3)");
let fKey = document.querySelector(".white-keys:nth-child(4)");
let gKey = document.querySelector(".white-keys:nth-child(5)");
let hKey = document.querySelector(".white-keys:nth-child(6)");
let jKey = document.querySelector(".white-keys:nth-child(7)");

let wKey = document.querySelector(".w");
let eKey = document.querySelector(".e");
let tKey = document.querySelector(".t");
let yKey = document.querySelector(".y");
let uKey = document.querySelector(".u");

aKey.addEventListener("click", function (e) {
   playKey("A");
});

sKey.addEventListener("click", function (e) {
    playKey("S");
});

dKey.addEventListener("click", function (e) {
    playKey("D");
});

fKey.addEventListener("click", function (e) {
    playKey("F");
});

gKey.addEventListener("click", function (e) {
    playKey("G");
});

hKey.addEventListener("click", function (e) {
    playKey("H");
});

jKey.addEventListener("click", function (e) {
    playKey("J");
});

wKey.addEventListener("click", function (e) {
    playKey("W");
});

eKey.addEventListener("click", function (e) {
    playKey("E");
});

tKey.addEventListener("click", function (e) {
    playKey("T");
});

yKey.addEventListener("click", function (e) {
    playKey("Y");
});

uKey.addEventListener("click", function (e) {
    playKey("U");
});

let header = document.querySelector("h1");
header.addEventListener("click", function (e) {
   playKey("bMaj7");
});

let header2 = document.querySelector("h2");
header2.addEventListener("click", function (e) {
    playKey("bMaj7");
});


function playKey(key) {
    let keySound = new Audio("media/" + key + ".mp3");
    keySound.play();
}



