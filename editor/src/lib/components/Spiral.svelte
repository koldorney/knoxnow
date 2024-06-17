<script>
	import { onMount } from 'svelte';
	import anime from 'animejs';

	export let text = "Hello World!";
	let ballElement;
	let trailElement;
	let textElement;

	let words = [];

	$: words = text.split(' ');

	function unrollCarpet() {
		const trailLength = `${text.length * 7}px`;

		anime({
			targets: trailElement,
			width: trailLength,
			easing: 'easeInOutSine',
			duration: 2000,
			complete: stampText
		});

		anime({
			targets: ballElement,
			translateX: parseInt(trailLength) - 10, // Adjust ball position to match trail length
			scale: [1, 0.2],
			easing: 'easeInOutSine',
			duration: 2000,
		});
	}

	function stampText() {
		let delay = 0;
		textElement.innerHTML = ""; // Clear existing text
		words.forEach((word, index) => {
			setTimeout(() => {
				textElement.innerHTML += ` ${word}`;
			}, delay);
			delay += 500; // Delay between words
		});
	}

	onMount(() => {
		ballElement.addEventListener('mouseover', unrollCarpet);
	});
</script>

<style>
    .carpet-roll-container {
        display: inline-block;
        position: relative;
    }

    .trail {
        position: absolute;
        top: 50%;
        left: 0;
        width: 0;
        height: 2px;
        background-color: black;
        transform: translateY(-50%);
    }

    .ball {
        width: 20px;
        height: 20px;
        background-color: black;
        border-radius: 50%;
        position: absolute;
        top: calc(50% - 15px); /* Ensure the ball starts above the trail */
        left: 0;
        transform: translateY(0);
    }

    .text {
        position: absolute;
        top: calc(50% - 7px); /* Position text above the trail */
        left: 0;
        transform: translateY(-50%);
        white-space: nowrap;
    }
</style>

<div class="carpet-roll-container">
	<div class="trail" bind:this={trailElement}></div>
	<div class="ball" bind:this={ballElement}></div>
	<div class="text" bind:this={textElement}></div>
</div>
