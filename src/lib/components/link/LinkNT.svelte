<script lang="ts">
	const { text, href } = $props();
</script>

<span class="bg-snow hover:bg-snowflake">
	<a target="_blank" rel="noopener noreferrer" class="text-bg inline-block px-2 py-1" {href}
		>{text}</a
	>
</span>
