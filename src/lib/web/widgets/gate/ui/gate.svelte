<script lang="ts">
	export let granted: boolean;
</script>

{#if granted}
	<slot name="granted" />
{:else}
	<slot name="pending" />
{/if}
