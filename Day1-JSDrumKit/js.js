function playSound(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if (!audio) return; //stop if any other key pressed
	audio.currentTime=0; //to rewind to beginning (to play a single key multiple times)
	audio.play();
	key.classList.add('playing');
}

function removeTransition(e){
	if (e.propertyName!== 'transform') return; // skip if not transform
	this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
