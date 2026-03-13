<script lang="ts">
	const { sm, lg } = $props();
</script>

<div class="border-gold-b flex flex-col gap-1 border p-2">
	<div class=" text-2xl md:text-3xl">{lg}</div>
	<div class="text-gold text-sm">{sm}</div>
</div>
