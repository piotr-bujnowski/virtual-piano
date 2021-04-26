document.addEventListener("keypress", function (e) {
    if (e.code === "KeyA") {
        let aKeySound = new Audio("media/A.mp3");
        console.log("The 'A' key is pressed.");
        aKeySound.play();
    }else if (e.code === "KeyS"){
        let sKeySound = new Audio("media/S.mp3");
        console.log("The 'S' key is pressed.");
        sKeySound.play();
    }else if (e.code === "KeyD"){
        let dKeySound = new Audio("media/D.mp3");
        console.log("The 'D' key is pressed.");
        dKeySound.play();
    }else if (e.code === "KeyF"){
        let fKeySound = new Audio("media/F.mp3");
        console.log("The 'F' key is pressed.");
        fKeySound.play();
    }else if (e.code === "KeyG"){
        let gKeySound = new Audio("media/G.mp3");
        console.log("The 'G' key is pressed.");
        gKeySound.play();
    }else if (e.code === "KeyH"){
        let hKeySound = new Audio("media/H.mp3");
        console.log("The 'H' key is pressed.");
        hKeySound.play();
    }else if (e.code === "KeyJ"){
        let jKeySound = new Audio("media/J.mp3");
        console.log("The 'J' key is pressed.");
        jKeySound.play();
    }else if (e.code === "KeyW"){
        let jKeySound = new Audio("media/W.mp3");
        console.log("The 'W' key is pressed.");
        jKeySound.play();
    }else if (e.code === "KeyE"){
        let jKeySound = new Audio("media/E.mp3");
        console.log("The 'E' key is pressed.");
        jKeySound.play();
    }else if (e.code === "KeyT"){
        let jKeySound = new Audio("media/T.mp3");
        console.log("The 'T' key is pressed.");
        jKeySound.play();
    }else if (e.code === "KeyY"){
        let jKeySound = new Audio("media/Y.mp3");
        console.log("The 'Y' key is pressed.");
        jKeySound.play();
    }else if (e.code === "KeyU"){
        let jKeySound = new Audio("media/U.mp3");
        console.log("The 'U' key is pressed.");
        jKeySound.play();
    }else {
        console.log("Error: " + e.code + " is an unbound key!")
    }
});



