<script lang="ts">
	import { UserButton } from '~features/auth/user-button';
	import { ModeToggleButton } from '~features/mode-toggle-button';
	import { Logomark } from '~ui/logomark';
	import { Box } from '~ui/box';
</script>

<Box pattern="b" class="flex-row justify-between">
	<div class="flex flex-grow items-center justify-start space-x-2">
		<a href="/" data-testid="masthead-brand">
			<Logomark size="md" />
		</a>
	</div>
	<div class="flex flex-grow items-center justify-end space-x-2">
		<UserButton />
		<ModeToggleButton />
	</div>
</Box>
