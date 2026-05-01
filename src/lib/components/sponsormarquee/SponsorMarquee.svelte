<script lang="ts">
	const sponsors = [
		{ name: 'JLCPCB', logo: '/assets/sponsors/jlcpcb.png' },
		{ name: 'Wolfram Research', logo: '/assets/sponsors/wolfram.png' },
		{ name: '.XYZ', logo: '/assets/sponsors/genxyz.png' }
	];
</script>

<div class="marquee-container w-full max-w-115">
	<div class="group">
		{#each sponsors as sponsor}
			<div class="card">
				<img src={sponsor.logo} alt={sponsor.name} />
			</div>
		{/each}
		{#each sponsors as sponsor}
			<div class="card" aria-hidden="true">
				<img src={sponsor.logo} alt={sponsor.name} />
			</div>
		{/each}
	</div>
</div>

<style>
	.marquee-container {
		position: relative;
		width: 100%;
		overflow: hidden;
		-webkit-mask: linear-gradient(90deg, transparent 0%, white 15%, white 85%, transparent 100%);
		mask: linear-gradient(90deg, transparent 0%, white 15%, white 85%, transparent 100%);
	}

	.group {
		display: inline-flex;
		align-items: center;
		gap: clamp(1.5rem, 4vw, 3rem);
		padding-block: 1rem;
		width: max-content;
		animation: scroll 8s linear infinite;
		will-change: transform;
	}

	.card {
		flex: 0 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
		/* min-width: 8rem; */
	}

	.card img {
		width: auto;
		max-height: 4em;
	}

	@keyframes scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}
</style>
