<script>
	import TeamMemberCard from '$lib/components/main/team/TeamMemberCard.svelte';
	import Swiper from 'swiper';
	import { Navigation, Autoplay } from 'swiper/modules';
	import { onMount } from 'svelte';

	const teamMembers = [
		{
			name: 'Ritam Das',
			role: 'Lead Organizer',
			img: '/assets/team/ritam.png'
		},
		{
			name: 'Ketan Chowdhury',
			role: 'Executive Organizer',
			img: '/assets/team/ketan.png'
		},
		{
			name: 'Divyanka Shaw',
			role: 'Executive Organizer',
			img: '/assets/team/divyanka.png'
		},
		{
			name: 'Hiten Panda',
			role: 'Executive Organizer',
			img: '/assets/team/hiten.png'
		},
		{
			name: 'Yash Raghuwanshi',
			role: 'Organizer',
			img: '/assets/team/yash.png'
		},
		{
			name: 'Souptik Samanta',
			role: 'Organizer',
			img: '/assets/team/default.png'
		},
		{
			name: 'Sadrita Neogi',
			role: 'Organizer',
			img: '/assets/team/sadrita.png'
		}
	];

	let swiperInstance = $state();
	let swiperEl = $state();

	onMount(() => {
		swiperInstance = new Swiper(swiperEl, {
			modules: [Navigation, Autoplay],
			slidesPerView: 'auto',
			spaceBetween: 20,
			direction: 'horizontal',
			loop: true,
			// speed: 3000,
			speed: 400,
			centeredSlides: true,
			// autoplay: {
			// 	delay: 0,
			// 	disableOnInteraction: true
			// },
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		});

		return () => {
			if (swiperInstance) swiperInstance.destroy();
		};
	});
</script>

<div class="swiper-wrapper-container">
	<div bind:this={swiperEl} class="swiper">
		<div class="swiper-wrapper">
			{#each teamMembers as member}
				<div class="swiper-slide">
					<TeamMemberCard name={member.name} role={member.role} img={member.img} />
				</div>
			{/each}
		</div>
		<div class="swiper-button-prev"></div>
		<div class="swiper-button-next"></div>
	</div>
</div>

<style>
	.swiper {
		/* Forces the slider to move at a completely uniform speed */
		/* --swiper-wrapper-transition-timing-function: linear !important; */
	}
	/* somehow swiper needs explicit styles and width defs */
	.swiper-slide {
		width: auto;
		display: flex;
		justify-content: center;
	}
	.swiper-button-prev,
	.swiper-button-next {
		color: var(--color-snow);
		scale: 0.7;
		background: var(--color-raisin);
		border-radius: 9999px;
		/* border: 2px solid var(--color-snow); */
		padding: 0.7em;
	}
</style>
