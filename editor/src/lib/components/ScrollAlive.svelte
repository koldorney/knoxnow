<script>
	import { onMount } from 'svelte';
	import anime from 'animejs';

	export let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus.';
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
		textContainer.addEventListener('scroll', handleScroll);
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
        width: 100%;
        height: 400px;
        border: 1px solid #ccc;
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
		{#each text.split(' ') as char, index}
   <span
		 class="zoom-char"
		 style="font-size: {size}; font-family: {font};"
		 data-index={index}
	 >
    {char}
   </span>
		{/each}
	</div>
</div>
