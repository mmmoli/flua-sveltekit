<script lang="ts">
	import { Call } from '~entities/call';
	import { Queue } from '~features/calls/queue';
	import { IsSpeakerBadge } from '~features/calls/is-speaker-badge';
	import { QueueActions } from '~features/calls/queue-actions';
	import { QueuePosition } from '~features/calls/queue-position';

	export let roomId: string;
</script>

<Call {roomId}>
	<div slot="call-video">
		<Queue />
		<IsSpeakerBadge />
		<QueuePosition />
		<QueueActions />
	</div>
</Call>
