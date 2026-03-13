<script lang="ts">
	const { text, href } = $props();
</script>

<span class="bg-yellow hover:bg-amber-50">
	<a class="text-bg inline-block px-2 py-1" {href}>{text}</a>
</span>
