<script lang="ts">
	import { CallEntity } from '~entities/call';
	import { IsSpeakerBadge } from '~features/queues/is-speaker-badge';
	import { Queue } from '~features/queues/queue';
	import { QueueActions } from '~features/queues/queue-actions';
	import { QueueEntity } from '~entities/queue';
	import { QueuePosition } from '~features/queues/queue-position';
	import { VideoCall } from '~features/calls/video-call';
	import { VideoEntity } from '~entities/video';

	export let roomId: string;
</script>

<CallEntity>
	<svelte:fragment slot="video">
		<VideoEntity>
			<VideoCall />
		</VideoEntity>
	</svelte:fragment>
	<svelte:fragment slot="queue">
		<QueueEntity {roomId}>
			<Queue />
			<IsSpeakerBadge />
			<QueuePosition />
			<QueueActions />
		</QueueEntity>
	</svelte:fragment>
</CallEntity>
