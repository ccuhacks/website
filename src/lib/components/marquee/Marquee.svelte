<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		images?: string[];
		speed?: number;
		direction?: 'left' | 'right';
		class?: string;
	}

	let {
		images = [],
		speed = 50,
		direction = 'left',
		class: className = ''
	}: Props = $props();

	let containerEl: HTMLDivElement;
	let isPaused = $state(false);

	function getDirection() {
		return direction === 'left' ? '' : 'reverse';
	}
</script>

<div 
	bind:this={containerEl} 
	class="marquee-container {className}"
	onmouseenter={() => isPaused = true}
	onmouseleave={() => isPaused = false}
	role="region"
	aria-label="Sponsors marquee"
>
	<div class="marquee-track" style="animation-play-state: {isPaused ? 'paused' : 'running'}">
		{#if images.length > 0}
			{#each images as src, i}
				<div class="marquee-item">
					<img {src} alt="Sponsor {i + 1}" />
				</div>
			{/each}
			<!-- Duplicate for seamless loop -->
			{#each images as src, i}
				<div class="marquee-item">
					<img {src} alt="Sponsor {i + 1}" />
				</div>
			{/each}
		{:else}
			<!-- Placeholder items  -->
			<div class="marquee-item placeholder">
				<span>SPONSOR</span>
			</div>
			<div class="marquee-item placeholder">
				<span>SPONSOR</span>
			</div>
			<div class="marquee-item placeholder">
				<span>SPONSOR</span>
			</div>
			<div class="marquee-item placeholder">
				<span>SPONSOR</span>
			</div>
			<!-- Duplicate for seamless loop -->
			<div class="marquee-item placeholder">
				<span>SPONSOR</span>
			</div>
			<div class="marquee-item placeholder">
				<span>SPONSOR</span>
			</div>
			<div class="marquee-item placeholder">
				<span>SPONSOR</span>
			</div>
			<div class="marquee-item placeholder">
				<span>SPONSOR</span>
			</div>
		{/if}
	</div>
</div>

<style>
	.marquee-container {
		overflow: hidden;
		width: 100%;
		position: relative;
	}

	.marquee-track {
		display: flex;
		gap: 2rem;
		width: max-content;
		animation: marquee 20s linear infinite;
		animation-direction: var(--direction, normal);
	}

	.marquee-item {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.marquee-item img {
		max-height: 80px;
		max-width: 150px;
		object-fit: contain;
		filter: grayscale(100%);
		transition: filter 0.3s ease;
	}

	.marquee-item img:hover {
		filter: grayscale(0%);
	}

	.marquee-item.placeholder {
		min-width: 150px;
		height: 80px;
		background: rgba(255, 255, 255, 0.05);
		border: 1px dashed rgba(255, 255, 255, 0.2);
		border-radius: 8px;
	}

	.marquee-item.placeholder span {
		color: rgba(255, 255, 255, 0.3);
		font-size: 0.875rem;
		font-weight: 600;
		letter-spacing: 0.1em;
	}

	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	/* Right direction */
	:global(.marquee-container.direction-right .marquee-track) {
		animation-direction: reverse;
	}

	:global(.marquee-container.direction-right .marquee-track) {
		animation-name: marquee-reverse;
	}

	@keyframes marquee-reverse {
		0% {
			transform: translateX(-50%);
		}
		100% {
			transform: translateX(0);
		}
	}
</style>