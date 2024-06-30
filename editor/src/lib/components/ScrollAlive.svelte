<script>
	import { onMount } from 'svelte';
	import anime from 'animejs';

	export let text = 'This is a test';
	export let color = '#000000';
	export let scrolledColor = '#e70e0e';
	export let size = '1rem';
	export let font = 'Arial, sans-serif';

	let textContainer;
	let animation;
	let progress = 0;

	onMount(() => {
		const characters = Array.from(textContainer.querySelectorAll('.zoom-char'));

		animation = anime({
			targets: characters,
			translateY: -10,
			color: scrolledColor,
			delay: (el, i) => i * 100,
			duration: 30,
			elasticity: 20,
			easing: 'easeInOutSine',
			autoplay: false,
			loop: false
		});

		textContainer.addEventListener('wheel', handleWheel);
	});

	function handleWheel(event) {
		event.preventDefault();
		const delta = Math.sign(event.deltaY);
		progress = Math.min(100, Math.max(0, progress + delta * .2));
		animation.seek(animation.duration * (progress / 100));
	}
</script>

<style>
    .container {
        width: 100%;
    }

    .text-container {
        width: auto;
        height: auto;
        padding: 10px;
        position: relative;
        overflow-y: scroll;
        white-space: pre-wrap;
    }

    .zoom-char {
        display: inline-block;
        cursor: pointer;
        position: relative;
        transition: transform 0.3s;
    }
</style>

<div class="container">
	<div class="text-container" bind:this={textContainer}>
		{#each text.split(' ') as word, character}
			<span
				class="zoom-char"
				style="font-size: {size}; font-family: {font};"
				data-word-index={character}
				data-syllable-index={word}
			>
				{word}
			</span>
		{/each}
	</div>
</div>

