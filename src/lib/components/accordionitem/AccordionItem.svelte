<script>
	import TextUnscramble from '../textunscramble/TextUnscramble.svelte';
	const { name, title, children } = $props();
</script>

<div class="collapse-plus border-content-gutter collapse rounded-none border-b">
	<input type="radio" {name} />
	<div class="collapse-title text-snow font-semibold">
		<TextUnscramble text={title} class="text-snow" />
	</div>
	<div class="collapse-content text-snowflake text-sm">
		{@render children()}
	</div>
</div>
