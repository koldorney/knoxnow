<script>
	import ScrambleText from '$lib/components/ScrambleText.svelte';
	import HoverZoom from '../../lib/components/HoverZoom.svelte';
	import HoverScramble from '../../lib/components/HoverScramble.svelte';
	import Article from '../../lib/components/Article.svelte';
	import Spiral from '../../lib/components/Spiral.svelte';
	import Alive from '../../lib/components/Alive.svelte';
	import ScrollAlive from '../../lib/components/ScrollAlive.svelte';
</script>

<style>
    .responsive-image {
        width: 10%; /* Image will take 100% of the container's width */
        height: auto; /* Height will adjust proportionally */
    }
</style>

<img src="/giphy.gif" alt="Giphy animation" class="responsive-image">
<Article header="This crazy story">
	<ScrambleText text="OMG I was talking to this guy and " speed=".5" />
	<HoverScramble text=" he punched me out of nowhere" chars='<>'/>
	<HoverZoom text="WHY?" color="#f10403" />
	<Spiral text="Because I deserved it"/>
	<div>
		<Alive animationName="flash" text="Welcome to the animated text!" variant="shuffle" />
		<Alive animationName="fadeIn" text="Welcome to the animated text!" variant="shuffle" />
		<Alive animationName="rotateIn" text="Welcome to the animated text!" variant="sequence" />
		<Alive animationName="tada" text="Welcome to the animated text!" variant="shuffle" />
		<Alive animationName="bounce" text="Welcome to the animated text!" variant="shuffle" />
		<Alive animationName="wobble" text="Welcome to the animated text!" variant="synce" />
		<Alive animationName="rollIn" text="Welcome to the animated text!" variant="sequence" />
	</div>
	<ScrollAlive/>
</Article>
