<script lang="ts">
	import Link from '$lib/components/link/Link.svelte';
	import LinkNT from '$lib/components/link/LinkNT.svelte';
	import ScrambleGrid from '$lib/components/main/scramblegrid/ScrambleGrid.svelte';
	import Header from '$lib/components/main/header/Header.svelte';
	import ScanLine from '$lib/components/scanline/ScanLine.svelte';
	import InfoBox from '$lib/components/main/infobox/InfoBox.svelte';
	import SmCmt from '$lib/components/main/header/SmCmt.svelte';

	const gridinfo = [
		{ lg: '200', sm: 'HACKERS' },
		{ lg: '13-19', sm: 'AGES' },
		{ lg: '24', sm: 'HOURS' }
	];
</script>

<section
	class="font-monocraft bg-raisin border-gold-b mx-auto flex max-w-115 flex-col items-center border px-3 py-12 md:px-6"
>
	<Header />
	<ScrambleGrid />

	<div class="text-yellow mt-10 grid w-full grid-cols-3 text-center">
		{#each gridinfo as info}
			<InfoBox lg={info.lg} sm={info.sm} />
		{/each}
	</div>

	<ScanLine />
</section>
<section
	class="font-monocraft bg-raisin border-gold-b mx-auto flex max-w-115 flex-col items-center border px-3 py-12 md:px-6"
>
	<div class="text-gold text-center text-xl">
		Looking to volunteer? <br />
		Looking to sponsor? <br />
		{'>>> '}
		<span class="text-raisin">
			<Link text="team@ccuhacks.in" href="mailto:team@ccuhacks.in" />
		</span>
		{' <<<'}
		<br>
		<span class="text-raisin">
			<LinkNT text="team@ccuhacks.in" href="/sponsorship_prospectus.pdf" />
		</span>
	</div>
</section>
<section
	class="font-monocraft bg-raisin border-gold-b mx-auto flex max-w-115 flex-col items-center border px-3 py-12 md:px-6"
>
	<SmCmt>// ABOUT</SmCmt>
	<p class="text-gold mt-6 md:text-lg">
		<span class="text-yellow">CCUHACKS</span> is a teenager-run hackathon in Kolkata, India: a
		<span class="text-yellow">24-hour sprint</span>
		where students <span class="text-yellow">aged 13–19</span>
		build, break, and ship <span class="text-yellow">cool stuff.</span> Mentors, meals, and hardware on
		us.
	</p>
</section>
