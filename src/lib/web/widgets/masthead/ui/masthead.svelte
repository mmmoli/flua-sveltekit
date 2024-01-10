<script lang="ts">
	import { UserButton } from '~features/auth/user-button';
	import { ModeToggleButton } from '~features/mode-toggle-button';
</script>

<div class="m-4 flex justify-between">
	<div class="flex items-center space-x-2">
		<a href="/" class="text-sm" data-testid="masthead-brand">Flua</a>
	</div>
	<div class="flex items-center space-x-2">
		<UserButton />
		<ModeToggleButton />
	</div>
</div>
