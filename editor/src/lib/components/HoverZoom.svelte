<script>
	import { onMount } from 'svelte';
	import anime from 'animejs';

	export let text = 'Hover over me!';
	export let color = '#000';
	export let size = '2rem';
	export let font = 'Arial, sans-serif';
	export let zoomSize = 1.5;

	let textElement;

	onMount(() => {
		anime({
			targets: textElement,
			scale: 1,
			duration: 0 // Initialize to no scale at the beginning
		});
	});

	function handleMouseOver() {
		anime({
			targets: textElement,
			scale: zoomSize,
			easing: 'easeInOutQuad',
			duration: 500,
			begin: function(anim) {
				textElement.style.zIndex = '100'; // Bring to front
				textElement.style.backgroundColor = "#ffffff"; // Add background color
				textElement.style.padding = '0 10px'; // Optional: add padding for background
			}
		});
	}

	function handleMouseOut() {
		anime({
			targets: textElement,
			scale: 1,
			easing: 'easeInOutQuad',
			duration: 500,
			complete: function(anim) {
				textElement.style.zIndex = '10'; // Reset z-index
				textElement.style.backgroundColor = 'transparent'; // Remove background color
				textElement.style.padding = '0'; // Remove padding
			}
		});
	}
</script>

<style>
    .zoom-text {
        display: inline-block;
        cursor: pointer;
        transition: transform 0.3s;
        position: relative;
    }
</style>

<span
	class="zoom-text"
	bind:this={textElement}
	style="color: {color}; font-size: {size}; font-family: {font};"
	on:mouseover={handleMouseOver}
	on:mouseout={handleMouseOut}
>
  {text}
</span>
