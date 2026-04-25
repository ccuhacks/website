<script lang="ts">
	const { text, href } = $props();
</script>

<span class="bg-lavender hover:bg-snow text-raisin">
	<a target="_blank" rel="noopener noreferrer" class="text-bg inline-block px-2 py-1" {href}
		>{text}</a
	>
</span>
