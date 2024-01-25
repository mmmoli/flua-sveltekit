<script>
	import { Queue } from '~features/calls/queue';
	import { IsSpeakerBadge } from '~features/calls/is-speaker-badge';
	import { QueueActions } from '~features/calls/queue-actions';
	import { QueuePosition } from '~features/calls/queue-position';
</script>

<div>
	<Queue />
	<IsSpeakerBadge />
	<QueuePosition />
	<QueueActions />
</div>
