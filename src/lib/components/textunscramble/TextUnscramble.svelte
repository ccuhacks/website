<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap, ScrollTrigger } from '$lib/gsap.js';

	interface Props {
		text: string;
		class?: string;
		chars?: string;
		speed?: number;
		revealDelay?: number;
	}

	let {
		text,
		class: className = '',
		chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#0123456789',
		speed = 2,
		revealDelay = 0.2
	}: Props = $props();

	let containerEl: HTMLDivElement;

	onMount(() => {
		// initial scrambled state
		gsap.set(containerEl, {
			scrambleText: {
				text: text,
				chars: chars,
				speed: speed,
				revealDelay: revealDelay,
				tweenLength: false
			}
		});

		
		gsap.to(containerEl, {
			scrambleText: {
				text: text,
				chars: chars,
				speed: speed,
				revealDelay: revealDelay,
				tweenLength: false
			},
			duration: 1.5,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: containerEl,
				start: 'top 100%',
				toggleActions: 'play none none none'
			}
		});

		return () => {
			ScrollTrigger.getAll().forEach((st) => st.kill());
		};
	});
</script>

<div bind:this={containerEl} class={className}>
	{text}
</div>
