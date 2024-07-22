const pianoKeys = document.querySelectorAll(".piano-keys .key");

let audio = new Audio("/public/assets/sounds/a.mp3");

const playTune=(key) => {
    audio.src=`/public/assets/sounds/${key}.mp3`;
    audio.play();
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    },150)
}

pianoKeys.forEach(key =>{
    key.addEventListener("mousedown",() => playTune(key.dataset.key));
}
);

const pressedKey = (e) =>{
    playTune(e.key);
}

document.addEventListener("keydown", pressedKey);

