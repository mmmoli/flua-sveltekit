<script lang="ts">
	import { enhance } from '$app/forms';
	export let action: string;
	let editing = false;
	let loading = false;
	export let value: string;
</script>

<form
	method="POST"
	{action}
	use:enhance={() => {
		loading = true;
		return ({ update }) => {
			update().finally(async () => {
				loading = false;
				editing = false;
			});
		};
	}}
>
	<input name="room-name" {value} />
</form>
