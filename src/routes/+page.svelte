<script lang="ts">
	import Link from '$lib/components/link/Link.svelte';
	import LinkNT from '$lib/components/link/LinkNT.svelte';
	import ScrambleGrid from '$lib/components/main/scramblegrid/ScrambleGrid.svelte';
	import Header from '$lib/components/main/header/Header.svelte';
	import ScanLine from '$lib/components/scanline/ScanLine.svelte';
	import FAQ from '$lib/components/main/faq/FAQ.svelte';
	import InfoBox from '$lib/components/main/infobox/InfoBox.svelte';
	import SmCmt from '$lib/components/main/header/SmCmt.svelte';
	import Marquee from '$lib/components/marquee/Marquee.svelte';

	const gridinfo = [
		{ lg: '150', sm: 'HACKERS' },
		{ lg: '13-19', sm: 'AGES' },
		{ lg: '24', sm: 'HOURS' }
	];

</script>

<ScanLine />
<section
	class="font-jetbrains bg-raisin border-content-gutter mx-auto flex max-w-115 flex-col items-center border px-3 py-12 md:px-6"
>
	<Header />
	<ScrambleGrid />

	<div class="text-snow mt-10 grid w-full grid-cols-3 text-center">
		{#each gridinfo as info}
			<InfoBox lg={info.lg} sm={info.sm} />
		{/each}
	</div>

	<div class="mt-10">
		<span class="text-3xl md:text-4xl">
			<LinkNT href="https://ccuhacks.fillout.com/rsvp" text=">>> RSVP NOW <<<" />
		</span>
	</div>
</section>

<section
	class="font-jetbrains bg-raisin border-content-gutter mx-auto flex max-w-115 flex-col items-center border px-3 py-12 md:px-6"
>
	<SmCmt>// ABOUT</SmCmt>
	<p class="text-snowflake mt-6 md:text-lg">
		<span class="text-lavender">ccuhacks</span> is a teenager-run hackathon in Kolkata, India: a
		<span class="text-lavender">24-hour sprint</span>
		where students <span class="text-lavender">aged 13–19</span>
		build, break, and ship <span class="text-lavender">cool stuff.</span> Mentors, meals, and drinks on
		us.
	</p>
</section>

<section
	class="font-jetbrains bg-raisin border-content-gutter mx-auto flex max-w-115 flex-col items-center border px-3 py-12 md:px-6"
>
	<SmCmt>// SPONSORS</SmCmt>
	<div class="mt-6">
		<Marquee />
	</div>
</section>

<section
	class="font-jetbrains bg-raisin border-content-gutter mx-auto flex max-w-115 flex-col items-center border px-3 py-12 md:px-6"
>
	<SmCmt>// FAQ</SmCmt>
	<div class="mt-6">
		<FAQ />
	</div>
</section>

<section
	class="font-jetbrains bg-raisin border-content-gutter mx-auto flex max-w-115 flex-col items-center border px-3 py-12 md:px-6"
>
	<div class="text-snowflake text-center text-lg md:text-xl">
		Looking to volunteer? <br />
		Looking to sponsor? <br />
		{'>>> '}
		<span class="text-raisin">
			<Link text="team@ccuhacks.in" href="mailto:team@ccuhacks.in" />
		</span>
		{' <<<'}
		<br />
		<span class="text-raisin">
			<LinkNT text="view sponsorship prospectus" href="/sponsorship_prospectus.pdf" />
		</span>
	</div>
</section>

