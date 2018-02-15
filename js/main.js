// when the user presses a key, find the corresponding audio file on the page and play it

(()=> {

	console.log('drumkit.js loaded');

	function removeHighlight(e) {
		// console.log(e);
		if (e.propertyName != "transform") { 
			return; 
		} else {
			e.target.classList.remove('playing');
		}
	}


	// run this whenever a key is pressed
	function logKey(e) {
		//debugger;
		//console.log(e);
		const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

		key.classList.add('playing');

		// catch null keyboard presses
		if (!audio) { return; }

		// play the audio
		audio.currentTime = 0;
		audio.play();
	}

	const keys = Array.from(document.querySelectorAll('.key'));

	keys.forEach(key => key,addEventListener('transitionend',removeHighlight));

	window.addEventListener('keydown', logKey);

})();