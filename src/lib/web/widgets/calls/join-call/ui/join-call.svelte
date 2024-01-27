<script lang="ts">
	import JoinCallForm from './join-call-form.svelte';
	import Modal from './modal.svelte';
	import { page } from '$app/stores';

	$: displayName = $page.data.session?.user?.name ?? 'Billy No-Mates';

	export let room: {
		name: string;
	};

	export let handleAccept: () => void;
	export let handleReject: () => void;
</script>

<Modal {handleAccept} handleCancel={handleReject} let:C>
	<C.Title>“{room.name}”. You in?</C.Title>
	<C.Description>
		Enter the room and join this call, or leave and miss out on the chat. The choice is yours.
	</C.Description>
	<C.Description>Hint: Join</C.Description>
	<JoinCallForm />
</Modal>
