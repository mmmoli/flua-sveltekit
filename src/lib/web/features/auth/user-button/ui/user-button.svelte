<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import { Button } from '~ui/button';
</script>

{#if $page.data.session}
	{#if $page.data.session.user?.image}
		<span style="background-image: url('{$page.data.session.user.image}')" class="avatar" />
	{/if}
	<Button variant="ghost" on:click={() => signOut()} class="button">Sign out</Button>
{:else}
	<Button on:click={() => signIn('github')}>Sign In</Button>
{/if}
