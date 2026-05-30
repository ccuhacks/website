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
	import { ChevronsRight, ChevronsLeft } from '@lucide/svelte/icons';
	import { sponsorsGrouped, sponsorLabels } from '$lib/data/sponsors';

	const gridinfo = [
		{ lg: '150', sm: 'HACKERS' },
		{ lg: '13-19', sm: 'AGES' },
		{ lg: '24', sm: 'HOURS' }
	];
</script>

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
		<!-- <span class="text-center text-xl md:text-2xl"> -->
		<!-- <span class="text-snowflake mb-4 text-2xl">{'>>> '} REGISTER NOW {'<<<'}</span> -->
		<!-- <br /> -->
		<div class="bg-lavender hover:bg-snow text-raisin mb-2 flex w-full items-center justify-center">
			<a href="/register?utm_source=mainpage">
				<span class="flex items-center gap-4 px-4 text-center text-2xl">
					<ChevronsRight /> REGISTER VIA DEVFOLIO <ChevronsLeft />
				</span>
			</a>
		</div>
		<!-- </span> -->
		<div class="mt-2 w-full text-center">
			<SmCmt
				>Need help registering? Contact us at
				<a href="mailto:team@ccuhacks.in" class="hover:text-lavender underline">team@ccuhacks.in</a>
			</SmCmt>
		</div>
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

	<!-- {#each Object.entries(sponsorsGrouped.sponsors) as [tier, tierSponsors]}
		{#if tierSponsors.length}
			<div class="mt-8 w-full">
				<div>{sponsorLabels[tier]}</div>

				<div class="mt-4 flex flex-wrap justify-center gap-2">
					{#each tierSponsors as sponsor}
						<div class="card m-2">
							<img src={sponsor.logo} alt={sponsor.name} class="h-10" />
						</div>
					{/each}
				</div>
			</div>
		{/if}
	{/each} -->

	{#each Object.entries(sponsorsGrouped) as [tier, tierSponsors]}
		{#if tierSponsors.length}
			<div class="mt-8 w-full">
				<div class="mt-4 flex flex-wrap justify-center gap-2">
					{#each tierSponsors as sponsor}
						<div class="card m-2">
							<img src={sponsor.logo} alt={sponsor.name} class="h-10" />
						</div>
					{/each}
				</div>
			</div>
			<div class="text-snowflake mt-4 flex flex-row items-center justify-center gap-2">
				<ChevronsRight />{sponsorLabels[tier]}<ChevronsLeft />
			</div>
		{/if}
	{/each}
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
	class="font-jetbrains bg-raisin border-content-gutter mx-auto flex max-w-115 flex-col items-center border px-3 py-12 md:px-6"
>
	<SmCmt>// SCHEDULE</SmCmt>
	<div class="mt-6 w-full">TBD.</div>
</section>

<section
	class="font-jetbrains bg-raisin border-content-gutter mx-auto flex max-w-115 flex-col items-center overflow-hidden border px-3 py-12 md:px-6"
>
	<SmCmt>// THE TEAM</SmCmt>
	<div class="mt-6 w-115 overflow-hidden">
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
