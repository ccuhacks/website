<script>
	import Link from '$lib/components/link/Link.svelte';
	import AccordionItem from '$lib/components/accordionitem/AccordionItem.svelte';
</script>

<div class="join join-vertical flex w-full">
	<AccordionItem name="faq" title="What is a hackathon?">
		A hackathon is a sprint-like event where students build and ship projects in a short amount of
		time. It's a great opportunity to learn new skills, meet new people, and have fun!
	</AccordionItem>
	<AccordionItem name="faq" title="Where is the Venue?">
		The venue for ccuhacks 2026 is yet to be announced, check back after Tuesday, 9th June!
	</AccordionItem>
	<AccordionItem name="faq" title="Who can attend?">
		Any student aged 13-19 can attend ccuhacks!
	</AccordionItem>
	<AccordionItem name="faq" title="How much does it cost?">
		We're introducing a small registration fee of <span class="text-lavender">₹200 (INR)</span> per person
		to help cover event logistics, food costs, etc. We're non profit, so all proceeds will go towards
		making your experience at ccuhacks even better!
	</AccordionItem>
	<AccordionItem name="faq" title="I need financial assistance.">
		Almost everyone will have to pay the 200 INR fee to register for the hackathon but if the fee is
		of significant hardship, we'd like to help you out based on need/merit. Email us at
		<Link text="team@ccuhacks.in" href="mailto:team@ccuhacks.in" />
	</AccordionItem>
	<AccordionItem name="faq" title="Do I need experience to attend?">
		Nope! Whether you're a seasoned developer or just starting out, there's a place for you at
		ccuhacks. We welcome students of all skill levels and backgrounds.
	</AccordionItem>
	<AccordionItem name="faq" title="What should I bring?">
		Just bring yourself, your laptop, and any chargers you might need. We'll provide the rest.
	</AccordionItem>
	<AccordionItem name="faq" title="Is staying overnight allowed?">
		Nope! ccuhacks is split across two days. Participants will go home at night and return the next
		day to continue hacking. (They can continue their work at home as it accounts for the hackathon
		duration)
	</AccordionItem>
	<AccordionItem name="faq" title="I have more questions!">
		Feel free to reach out to us at <Link text="team@ccuhacks.in" href="mailto:team@ccuhacks.in" />
	</AccordionItem>
</div>
