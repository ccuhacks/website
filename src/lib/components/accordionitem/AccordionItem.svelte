<script>
	import TextUnscramble from "../textunscramble/TextUnscramble.svelte";
	const { name, title, children } = $props();
</script>

<div class="collapse-plus collapse border-b border-content-gutter rounded-none">
	<input type="radio" {name} checked />
	<div class="collapse-title font-semibold text-snow">
		<TextUnscramble text={title} class="text-snow" />
	</div>
	<div class="collapse-content text-sm text-snowflake">
		{@render children()}
	</div>
</div>
