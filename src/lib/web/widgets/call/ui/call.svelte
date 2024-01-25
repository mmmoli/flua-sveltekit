<script lang="ts">
	import { Queue as QueueEntity } from '~entities/queue';
	import { Queue } from '~features/queues/queue';
	import { IsSpeakerBadge } from '~features/queues/is-speaker-badge';
	import { QueueActions } from '~features/queues/queue-actions';
	import { QueuePosition } from '~features/queues/queue-position';

	export let roomId: string;
</script>

<QueueEntity {roomId}>
	<Queue />
	<IsSpeakerBadge />
	<QueuePosition />
	<QueueActions />
</QueueEntity>
