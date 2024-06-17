<script>
  import { onMount } from 'svelte';

  export let animationName = 'fadeIn';
  export let text = 'Animate me!';
  export let backgroundColor = '#000';
  export let variant = 'sequence'; // 'sequence', 'shuffle', 'sync'
  export let loop = false; // Determines if the animation loops infinitely

  let letters = [];
  let delays = [];

  function applyVariant() {
    letters = text.split('');
    switch (variant) {
      case 'sequence':
        delays = letters.map((_, index) => `${index * 0.1}s`);
        break;
      case 'shuffle':
        delays = letters.map(() => `${Math.random() * 1}s`);
        break;
      case 'sync':
        delays = letters.map(() => '0s');
        break;
    }
  }

  // Apply the variant on component initialization and when any input prop changes
  $: applyVariant();
</script>

<style>
  @import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';

  .letter {
    display: inline-block;
    position: relative;
    z-index: 10;
    animation-name: var(--animationName);
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-delay: var(--animationDelay);
    animation-iteration-count: var(--animationIterationCount);
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--backgroundColor);
    z-index: -1;
  }
</style>

<div>
  {#each letters as letter, i}
    <span class="letter animate__animated {`animate__${animationName}`}" style="--animationName: {animationName}; --animationDelay: {delays[i]}; --backgroundColor: {backgroundColor}; --animationIterationCount: {loop ? 'infinite' : '1'};">
      {letter === ' ' ? '\u00A0' : letter}
    </span>
  {/each}
</div>
