<script lang="ts">
	import { Input } from '~ui/input';
	import { toast } from 'svelte-sonner';
	import { roomFormSchema } from '../model/form-schema';
	import { superForm } from 'sveltekit-superforms/client';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { Button } from '~ui/button';
	import { actionKey } from '../lib/action-key';
	export let form: SuperValidated<typeof roomFormSchema>;
	let processing = false;
	const {
		form: formData,
		errors,
		constraints,
		enhance
	} = superForm(form, {
		onSubmit: () => {
			processing = true;
		},
		onUpdate: () => {
			processing = false;
			toast.success('Le done!');
		}
	});
</script>

<form method="POST" action={`?/${actionKey}`} use:enhance>
	<input type="hidden" name="id" bind:value={$formData.id} />
	<label for="name">Name</label>
	<Input
		type="text"
		placeholder="name"
		aria-invalid={$errors.name ? 'true' : undefined}
		class="max-w-xs"
		name="name"
		{...$constraints.name}
		bind:value={$formData.name}
	/>
	{#if $errors.name}<span class="invalid">{$errors.name}</span>{/if}

	<label for="name">Description</label>
	<Input
		type="text"
		placeholder="description"
		aria-invalid={$errors.description ? 'true' : undefined}
		class="max-w-xs"
		name="description"
		{...$constraints.description}
		bind:value={$formData.description}
	/>
	{#if $errors.description}<span class="invalid">{$errors.description}</span>{/if}

	<div><Button disabled={processing} variant="secondary" type="submit">Submit</Button></div>
</form>

<style>
	.invalid {
		color: red;
	}
</style>
