<script>
	import { onMount } from 'svelte';
	import ScrollAlive from './ScrollAlive.svelte';

	export let text = 'This is a long horizontal text that will be animated word by word as you scroll through.';
	export let animationName = 'fadeIn';
	export let variant = 'sequence';
	export let loop = false;

	let words;
	let elements = [];
	let scrollContainer;
	let indicator;

	$: words = text.split(' ');

	function handleScroll() {
		const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
		const indicatorWidth = (clientWidth / scrollWidth) * clientWidth;
		const indicatorPosition = (scrollLeft / scrollWidth) * clientWidth;

		indicator.style.width = `${indicatorWidth}px`;
		indicator.style.left = `${indicatorPosition}px`;
	}

	function addElement(element) {
		if (element) elements.push(element);
	}

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible');
				}
			});
		}, { threshold: 0.5 });

		elements.forEach(element => {
			observer.observe(element);
		});
	});
</script>

<style>
    .scroll-container {
        display: flex;
        overflow-x: scroll;
        white-space: nowrap;
        border: 1px solid #ccc;
        padding: 10px;
        max-width: 100%;
        position: relative;
    }

    .scroll-indicator {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 10px;
        background: #f0f0f0;
        z-index: 10;
    }

    .scroll-indicator .indicator {
        height: 100%;
        background-color: #007bff;
        transition: width 0.2s ease;
    }

    .word {
        margin-right: 10px;
        opacity: 0;
        transition: opacity 0.5s ease-out;
    }

    .word.visible {
        opacity: 1;
    }
</style>

<div class="scroll-indicator">
	<div class="indicator" bind:this={indicator}></div>
</div>
<div class="scroll-container" bind:this={scrollContainer} on:scroll={handleScroll}>
	{#each words as word, i}
		<div class="word" bind:this={el => addElement(el)}>
			<ScrollAlive text={word} animationName={animationName} variant={variant} loop={loop} />
		</div>
	{/each}
</div>

