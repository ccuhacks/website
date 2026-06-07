<script lang="ts">
	import SmCmt from './SmCmt.svelte';
</script>

<!-- Added flex layout to center the dynamic typing container -->
<div class="text-dis-txt w-full flex justify-center text-base md:text-lg font-bold font-mono tracking-widest">
	<div class="typewriter-loop overflow-hidden whitespace-nowrap border-r-2 border-current pr-1">
		<SmCmt>CCU, INDIA /// 2026</SmCmt>
	</div>
</div>

<div class="my-6 w-full">
	<img src="/assets/logo_long.png" alt="CCUHACKS" class="w-full" />
</div>

<div class="text-snowflake mt-2 w-full text-sm">A HACKATHON FOR TEENAGERS, BY TEENAGERS</div>

<style>
	.typewriter-loop {
		display: inline-block;
		width: 0;
		/* 21ch matches the exact length of "CCU, INDIA /// 2026" */
		animation: 
			typeAndVanish 6s steps(21) infinite,
			blink 0.75s step-end infinite;
	}

	@keyframes typeAndVanish {
		0% { width: 0; }
		35% { width: 21ch; } /* Finishes typing and holds it visible */
		65% { width: 21ch; } /* Holds position before vanishing */
		85% { width: 0; }    /* Deletes/vanishes back to start */
		100% { width: 0; }   /* Short pause before looping again */
	}

	@keyframes blink {
		from, to { border-color: transparent }
		50% { border-color: currentColor; }
	}
</style>
