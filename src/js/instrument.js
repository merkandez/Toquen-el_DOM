const pianoKeys = document.querySelectorAll(".piano-keys .key");
let volumeControl = document.querySelector('.volume-slider input');
let volume = volumeControl.value / 1

document.getElementById("ckeckboxKeys").addEventListener("change", function(){
    let keys = document.querySelectorAll(".spanShow")
    if (this.checked){
        keys.forEach(key=>{
            key.classList.remove('hide')
        })
    }
    else{
        keys.forEach(key=>{
            key.classList.add('hide')
        })
    }
})

const playTune=(key) => {
    const audio = new Audio(`/public/assets/sounds/${key}.mp3`);
    audio.play();
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    audio.volume=volume;
    if (clickedKey) {
    clickedKey.classList.add("active");
    setTimeout(() => {
      clickedKey.classList.remove("active");
    }, 150);  
}
}

volumeControl.addEventListener('input', (e) => {
    volume = e.target.value / 1;
});

pianoKeys.forEach(key =>{
    key.addEventListener("click",() => playTune(key.dataset.key));
}
);

const pressedKey = (e) => {
    // Asegurarse de que solo las teclas relevantes desencadenen sonidos
    const key = e.key.toLowerCase();
    if (key >= 'a' && key <= 'z') { // Limitar a teclas alfabéticas por ejemplo
        playTune(key);
    }
}

document.addEventListener("keydown", pressedKey);
rangeVolume.addEventListener("input", handleVolume);



