<script lang="ts">
	import './layout.css';
	import '../app.css';

	import favicon from '$lib/assets/favicon.svg';
	import Lenis from 'lenis';
	import { gsap, ScrollTrigger } from '$lib/gsap';

	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		const lenis = new Lenis({ autoRaf: true });
		lenis.on('scroll', ScrollTrigger.update);
		18;
		// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
		// This ensures Lenis's smooth scroll animation updates on each GSAP tick
		gsap.ticker.add((time) => {
			lenis.raf(time * 1000); // Convert time from seconds to milliseconds
		});
		// Disable lag smoothing in GSAP to prevent any delay in scroll animations
		gsap.ticker.lagSmoothing(0);
		27;
	});
	const { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
