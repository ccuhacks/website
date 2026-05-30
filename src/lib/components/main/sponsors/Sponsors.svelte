<script lang="ts">
	import { ChevronsRight, ChevronsLeft } from '@lucide/svelte/icons';
	import { sponsorsGrouped, sponsorLabels, SponsorType } from '$lib/data/sponsors';

	const colorMap: Record<string, string> = {
		title: 'text-lavender sponsor-glow',
		gold: 'text-gold sponsor-glow',
		silver: 'text-silver sponsor-glow',
		bronze: 'text-bronze sponsor-glow',
		in_kind: 'text-snowflake',
		food_partner: 'text-snowflake',
		community_partner: 'text-snowflake'
	};
</script>

{#each Object.entries(sponsorsGrouped) as [tier, tierSponsors]}
	{#if tierSponsors.length}
		<div class="mt-8 w-full">
			<div class="mt-4 flex flex-wrap justify-center gap-2">
				{#each tierSponsors as sponsor}
					<div class="card m-2">
						<a href={sponsor.href} target="_blank">
							<img src={sponsor.logo} alt={sponsor.name} class="h-10" />
						</a>
					</div>
				{/each}
			</div>
		</div>
		<div
			class="
			{colorMap[tierSponsors[0]?.type]}
			mt-2 flex w-[60%] flex-row items-center justify-around gap-2"
		>
			<!-- <ChevronsRight /> -->
			{sponsorLabels[tier]}
			<!-- <ChevronsLeft /> -->
		</div>
	{/if}
{/each}

<style>
	:global(.sponsor-glow) {
		text-shadow: 0 0 5px;
	}
</style>
