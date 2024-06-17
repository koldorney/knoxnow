<script>
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	export let text = '';
	export let chars = 'lowerCase';
	export let speed = 1;
	export let color = ''; // New color prop

	const dispatch = createEventDispatcher();
	let element;
	let interval;

	function scrambleText(element, options) {
		const { text, chars, speed, color } = options;
		let scrambledText = '';
		let revealIndex = 0;

		function getRandomChar() {
			if (chars === 'lowerCase') return String.fromCharCode(97 + Math.floor(Math.random() * 26));
			if (chars === 'upperCase') return String.fromCharCode(65 + Math.floor(Math.random() * 26));
			if (chars === '0123456789') return String.fromCharCode(48 + Math.floor(Math.random() * 10));
			return chars.charAt(Math.floor(Math.random() * chars.length));
		}

		function updateScramble() {
			scrambledText = text.split('').map((char, i) => {
				return getRandomChar();
			}).join('');

			element.innerHTML = scrambledText;

			if (color) {
				element.style.color = color;
			}
		}

		function updateDescramble() {
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
				setTimeout(updateDescramble, speed * 100);
			} else {
				dispatch('complete');
			}
		}

		function startScrambling() {
			clearInterval(interval);
			interval = setInterval(updateScramble, speed * 100);
		}

		function stopScrambling() {
			clearInterval(interval);
		}

		element.addEventListener('mouseover', () => {
			stopScrambling();
			revealIndex = 0; // Reset reveal index to start descrambling
			updateDescramble();
		});

		element.addEventListener('mouseout', () => {
			startScrambling();
		});

		startScrambling(); // Start scrambling initially
	}

	onMount(() => {
		scrambleText(element, { text, chars, speed, color });
	});
</script>

<style>
    .scramble-text {
        cursor: pointer;
        display: inline-block;
    }
</style>

<span
	class="scramble-text"
	bind:this={element}
></span>
