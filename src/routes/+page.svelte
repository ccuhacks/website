<script lang="ts">
	import Link from '$lib/components/link/Link.svelte';
	import LinkNT from '$lib/components/link/LinkNT.svelte';
	import ScrambleGrid from '$lib/components/main/scramblegrid/ScrambleGrid.svelte';
	import Header from '$lib/components/main/header/Header.svelte';
	import ScanLine from '$lib/components/scanline/ScanLine.svelte';
	import FAQ from '$lib/components/main/faq/FAQ.svelte';
	import InfoBox from '$lib/components/main/infobox/InfoBox.svelte';
	import SmCmt from '$lib/components/main/header/SmCmt.svelte';
	import SponsorMarquee from '$lib/components/sponsormarquee/SponsorMarquee.svelte';
	import TeamView from '$lib/components/main/team/TeamView.svelte';

	const gridinfo = [
		{ lg: '150', sm: 'HACKERS' },
		{ lg: '13-19', sm: 'AGES' },
		{ lg: '24', sm: 'HOURS' }
	];
	const sponsors = [
		{ name: 'JLCPCB', logo: '/assets/sponsors/jlcpcb.png' },
		{ name: 'Wolfram Research', logo: '/assets/sponsors/wolfram.png' },
		{ name: '.XYZ', logo: '/assets/sponsors/genxyz.png' },
		{ name: 'StacksKB', logo: '/assets/sponsors/stackskb_alt.png' }
	];
</script>

<!-- <ScanLine /> -->
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

	<div class="mt-10 flex flex-col items-center">
		<span class="text-3xl md:text-4xl">
			<LinkNT href="https://ccuhacks.fillout.com/rsvp" text=">>> RSVP NOW <<<" />
		</span>
		<span class="mt-4 text-3xl md:text-4xl">
			<LinkNT href="https://ccuhacks.devfolio.co/overview" text="Devfolio" />
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
		build, break, and ship <span class="text-lavender">cool stuff.</span> Mentors, meals, and snacks on
		us.
	</p>
</section>

<section
	class="font-jetbrains bg-raisin border-content-gutter mx-auto flex max-w-115 flex-col items-center border px-3 py-12 md:px-6"
>
	<SmCmt>// SPONSORS</SmCmt>
	<!-- <div class="mt-6 overflow-hidden">
		<SponsorMarquee />
	</div> -->

	<div class="mt-6 flex flex-wrap gap-2">
		{#each sponsors as sponsor}
			<div class="card m-1/2">
				<img src={sponsor.logo} alt={sponsor.name} class="h-12" />
			</div>
		{/each}
	</div>
</section>

<section
	class="font-jetbrains bg-raisin border-content-gutter mx-auto flex max-w-115 flex-col items-center border px-3 py-12 md:px-6"
>
	<SmCmt>// FAQ</SmCmt>
	<div class="mt-6 w-full">
		<FAQ />
	</div>
</section>

<section
	class="font-jetbrains bg-raisin border-content-gutter mx-auto flex max-w-115 flex-col items-center overflow-hidden border px-3 py-12 md:px-6"
>
	<SmCmt>// THE TEAM</SmCmt>
	<div class="mt-6 w-115 overflow-hidden">
		<!-- <TeamMemberCard name="Ritam Kom Das" role="Executive Organizer" img="/assets/team/ritam.png" /> -->
		<TeamView />
	</div>
</section>

<section
	class="font-jetbrains bg-raisin border-content-gutter mx-auto flex max-w-115 flex-col items-center border px-3 py-12 md:px-6"
>
	<div class="text-snowflake text-center text-lg md:text-xl">
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
