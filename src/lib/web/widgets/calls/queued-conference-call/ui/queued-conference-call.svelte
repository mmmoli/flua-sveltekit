<script lang="ts">
	import { ConferenceCall } from '~features/conference-calls/conference-call';
	import { IsSpeakerBadge } from '~features/queues/is-speaker-badge';
	import { Queue as QueueAsList } from '~features/queues/queue';
	import { QueueActions } from '~features/queues/queue-actions';
	import { QueueEntity as Queue } from '~entities/queue';
	import { QueuePosition } from '~features/queues/queue-position';

	export let room: {
		id: string;
		name: string;
	};
</script>

<Queue roomId={room.id}>
	<div class="flex space-x-2">
		<div class="w-1/5">
			<ConferenceCall />
		</div>
	</div>

	<QueueAsList />
	<IsSpeakerBadge />
	<QueuePosition />
	<QueueActions />
</Queue>
