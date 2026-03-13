<script lang="ts">
	import { onMount } from 'svelte';

	const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#0123456789';

	type Segment = { text: string; isContent: boolean };
	type LineData = Segment[];

	const lineData: LineData[] = [
		[{ text: 'YRE VJ URVSP LWOSH JWPOX I SFF', isContent: false }],
		[
			{ text: 'BCU XR KUYFG ', isContent: false },
			{ text: 'A HACKATHON', isContent: true },
			{ text: 'QJ EMD', isContent: false }
		],
		[
			{ text: 'XA', isContent: false },
			{ text: 'FOR TEENAGERS', isContent: true },
			{ text: ' X ', isContent: false },
			{ text: 'BY TEENAGERS', isContent: true }
		],
		[
			{ text: 'C LQW', isContent: false },
			{ text: 'KOLKATA CITY', isContent: true },
			{ text: 'B VCA LUJBD A', isContent: false }
		],
		[
			{ text: 'CX POG LJK JP', isContent: false },
			{ text: '200 PARTICIPANTS', isContent: true },
			{ text: 'C', isContent: false }
		],
		[
			{ text: 'XXX XXXX ', isContent: false },
			{ text: 'COMING SOON.', isContent: true },
			{ text: ' XXXX XXX', isContent: false }
		],
		[{ text: 'YRE VJ URVSP LWOSH JWPOX I SFF', isContent: false }]
	];

	type CharCell = {
		orig: string;
		display: string;
		isContent: boolean;
		animId: number | null;
		frame: number;
		maxFrames: number;
	};

	let chars: CharCell[][][] = $state(
		lineData.map((line) =>
			line.map((seg) =>
				seg.text.split('').map((ch) => ({
					orig: ch,
					display: ch,
					isContent: seg.isContent,
					animId: null,
					frame: 0,
					maxFrames: 0
				}))
			)
		)
	);
	function shuffleSafe(li: number, si: number, ci: number) {
		if (!chars[li]?.[si]?.[ci]) return;
		if (chars[li][si][ci].orig === ' ') return;

		shuffle(li, si, ci);
	}

	function shuffleLR(li: number, si: number, ci: number) {
		// flatten indices for this line
		let flat: { si: number; ci: number }[] = [];

		chars[li].forEach((seg, s) => {
			seg.forEach((_, c) => {
				flat.push({ si: s, ci: c });
			});
		});

		const idx = flat.findIndex((p) => p.si === si && p.ci === ci);

		if (idx === -1) return;

		// center
		shuffleSafe(li, si, ci);

		// left neighbor
		if (idx - 1 >= 0) {
			const n = flat[idx - 1];
			shuffleSafe(li, n.si, n.ci);
		}

		// right neighbor
		if (idx + 1 < flat.length) {
			const n = flat[idx + 1];
			shuffleSafe(li, n.si, n.ci);
		}
	}

	function shuffle(li: number, si: number, ci: number) {
		const cell = chars[li][si][ci];

		if (cell.orig === ' ') return;

		if (cell.animId !== null) {
			cancelAnimationFrame(cell.animId);
		}

		cell.frame = 0;
		cell.maxFrames = 20 + Math.floor(Math.random() * 10);

		function animate() {
			const c = chars[li][si][ci];

			c.frame++;

			if (c.frame >= c.maxFrames) {
				c.display = c.orig;
				c.animId = null;
				chars = [...chars];
				return;
			}

			c.display = CHARS[Math.floor(Math.random() * CHARS.length)];

			chars = [...chars];
			c.animId = requestAnimationFrame(animate);
		}

		cell.animId = requestAnimationFrame(animate);
	}

	onMount(() => {
		setTimeout(() => {
			type Target = { li: number; si: number; ci: number };

			const targets: Target[] = [];

			// collect all non-content characters
			lineData.forEach((line, li) => {
				line.forEach((seg, si) => {
					if (!seg.isContent) {
						seg.text.split('').forEach((ch, ci) => {
							if (ch !== ' ') {
								targets.push({ li, si, ci });
							}
						});
					}
				});
			});

			let index = 0;
			function animate() {
				for (let i = 0; i < 1 && index < targets.length; i++) {
					const t = targets[index++];
					shuffle(t.li, t.si, t.ci);
				}

				if (index < targets.length) {
					requestAnimationFrame(animate);
				}
			}

			requestAnimationFrame(animate);
		}, 15);
	});
</script>

<div class="mt-10 text-xl leading-normal select-none">
	{#each chars as line, li}
		<div>
			{#each line as seg, si}
				{#each seg as cell, ci}
					<span
						role="none"
						class={cell.isContent ? 'text-yellow' : 'text-dis-txt'}
						onmouseenter={() => shuffleLR(li, si, ci)}>{cell.display}</span
					>
				{/each}
			{/each}
		</div>
	{/each}
</div>
