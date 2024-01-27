<script lang="ts">
	import * as AlertDialog from '~ui/alert-dialog';
	const C = {
		Title: AlertDialog.Title,
		Description: AlertDialog.Description
	};

	export let handleAccept: () => void;
	export let handleCancel: () => void;
</script>

<AlertDialog.Root open closeOnEscape={false} closeOnOutsideClick={false}>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<slot {C} />
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel on:click={handleCancel}>No thanks</AlertDialog.Cancel>
			<AlertDialog.Action on:click={handleAccept}>Yup</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
