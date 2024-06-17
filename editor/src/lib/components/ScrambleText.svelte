<script>
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	export let text = '';
	export let chars = 'lowerCase';
	export let revealDelay = 0;
	export let speed = 1;
	export let color = ''; // New color prop

	const dispatch = createEventDispatcher();
	let element;

	function scrambleText(element, options) {
		const { text, chars, revealDelay, speed, color } = options;
		let scrambledText = '';
		let revealIndex = 0;

		function getRandomChar() {
			if (chars === 'lowerCase') return String.fromCharCode(97 + Math.floor(Math.random() * 26));
			if (chars === 'upperCase') return String.fromCharCode(65 + Math.floor(Math.random() * 26));
			if (chars === '0123456789') return String.fromCharCode(48 + Math.floor(Math.random() * 10));
			return chars.charAt(Math.floor(Math.random() * chars.length));
		}

		function update() {
			scrambledText = text.split('').map((char, i) => {
				if (i < revealIndex) {
					return char;
				} else {
					return getRandomChar();
				}
			}).join('');

			element.innerHTML = scrambledText;

			if (color) {
				element.style.color = color;
			}

			if (revealIndex < text.length) {
				revealIndex++;
				setTimeout(update, speed * 100);
			} else {
				dispatch('complete');
			}
		}

		setTimeout(update, revealDelay * 1000);
	}

	onMount(() => {
		scrambleText(element, { text, chars, revealDelay, speed, color });
	});
</script>

<span bind:this={element}></span>
