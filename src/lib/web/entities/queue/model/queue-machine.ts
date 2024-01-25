import { setup } from 'xstate';

export type ParticipantEvent =
	| { type: 'JOIN' }
	| { type: 'LEAVE' }
	| { type: 'FINISH' }
	| { type: 'SPEAK' };

export const queueMachine = setup({
	types: {} as {
		events: ParticipantEvent;
	},
	actions: {
		unmute: () => {
			console.warn('unmute not implemented');
		},
		mute: () => {
			console.warn('mute not implemented');
		},
		join: () => {
			console.warn('join not implemented');
		},
		leave: () => {
			console.warn('leave not implemented');
		}
	}
}).createMachine({
	id: 'queue',
	initial: 'idle',
	states: {
		idle: {
			meta: {
				label: '🥱 Just listening'
			},
			on: {
				JOIN: {
					target: 'joining'
				}
			}
		},
		joining: {
			meta: {
				label: '🙋 Joining'
			},
			entry: {
				type: 'join'
			},
			after: {
				'800': [
					{
						target: '#queue.queueing',
						actions: []
					}
				]
			},
			tags: ['queued', 'changing']
		},
		queueing: {
			meta: {
				label: '🧘 Queued'
			},
			tags: 'queued',
			on: {
				LEAVE: {
					target: 'leaving'
				},
				SPEAK: {
					target: 'speaking'
				}
			}
		},
		leaving: {
			meta: {
				label: '✌️ Leaving'
			},
			entry: {
				type: 'leave'
			},
			after: {
				'800': [
					{
						target: '#queue.idle',
						actions: []
					}
				]
			},
			tags: 'changing'
		},
		speaking: {
			meta: {
				label: '💬 Speaking'
			},
			entry: {
				type: 'unmute'
			},
			exit: {
				type: 'mute'
			},
			tags: ['queued', 'speaking'],
			on: {
				FINISH: {
					target: 'leaving'
				}
			}
		}
	},
	predictableActionArguments: true,
	preserveActionOrder: true,
	strict: true
});
