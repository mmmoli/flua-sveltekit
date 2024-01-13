import { fromPromise, setup } from 'xstate';

export type ParticipantEvent =
	| { type: 'JOIN' }
	| { type: 'LEAVE' }
	| { type: 'FINISH' }
	| { type: 'SPEAK' };

export interface Room {
	name: string;
	slug: string;
}

export type CallContext = {
	readonly room: Room;
};

export type Action = {
	readonly room: Room;
};

export const callMachine = setup({
	types: {} as {
		context: CallContext;
		events: ParticipantEvent;
	},
	actions: {
		joinRoom: () => {
			console.warn('joinRoom not implemented');
		},
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
	},
	actors: {
		joinRoom: fromPromise(async () => {
			console.warn('joinRoom not implemented');
			const room = Promise.resolve();
			return room;
		})
	}
}).createMachine({
	id: 'call',
	initial: 'preparing',
	context: {
		room: {
			name: 'fake-room-name',
			slug: 'fake-room-slug'
		}
	},
	states: {
		preparing: {
			meta: {
				label: 'Preparing'
			},
			invoke: {
				src: 'joinRoom',
				onDone: [
					{
						target: 'queue'
					}
				],
				onError: [
					{
						target: 'errored'
					}
				]
			}
		},
		errored: {
			meta: {
				label: 'Fail'
			},
			type: 'final'
		},
		queue: {
			initial: 'preparing',
			states: {
				preparing: {
					meta: {
						label: 'Preparing'
					},
					entry: {
						type: 'mute'
					},
					always: {
						target: 'idle'
					}
				},
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
								target: '#call.queue.queueing',
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
								target: '#call.queue.idle',
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
			}
		}
	},
	predictableActionArguments: true,
	preserveActionOrder: true,
	strict: true
});
