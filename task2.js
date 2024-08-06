function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; 

    key.classList.add('playing');
    audio.currentTime = 0; 
    audio.play();
}
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; 
    this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

keys.forEach(key => key.addEventListener('click', function() {
    const keyCode = this.getAttribute('data-key');
    const event = new KeyboardEvent('keydown', {'keyCode': keyCode});
    window.dispatchEvent(event);
}));
