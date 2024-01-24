<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { roomFormSchema } from '../model/form-schema';
	import { superForm } from 'sveltekit-superforms/client';
	import type { SuperValidated } from 'sveltekit-superforms';

	import * as Form from '~ui/form';
	import { actionKey } from '../lib/action-key';
	export let form: SuperValidated<typeof roomFormSchema>;

	const { form: formData, submitting } = superForm(form, {
		onUpdate: () => {
			toast.success('Le done!');
		}
	});
</script>

<Form.Root
	{form}
	action={`?/${actionKey}`}
	class="w-2/3 space-y-6"
	let:config
	method="POST"
	schema={roomFormSchema}
>
	<Form.Field {config} name="id">
		<input type="hidden" name="id" bind:value={$formData.id} />
	</Form.Field>

	<Form.Field {config} name="name">
		<Form.Item>
			<Form.Label>Name</Form.Label>
			<Form.Input />
			<Form.Description>What do you want to call this room?</Form.Description>
			<Form.Validation />
		</Form.Item>
	</Form.Field>

	<Form.Field {config} name="description">
		<Form.Item>
			<Form.Label>Description</Form.Label>
			<Form.Input />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Button variant="secondary" disabled={$submitting}>Submit</Form.Button>
</Form.Root>
