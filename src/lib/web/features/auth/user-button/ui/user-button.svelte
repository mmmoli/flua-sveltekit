<script lang="ts">
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte';
	import SignInButton from 'clerk-sveltekit/client/SignInButton.svelte';
	import UserButton from 'clerk-sveltekit/client/UserButton.svelte';
	import Loading from './user-button-loading.svelte';
</script>

<Loading />

<SignedIn>
	<UserButton afterSignOutUrl="/" />
</SignedIn>
<SignedOut>
	<SignInButton mode="modal" class="inline-block" />
</SignedOut>
