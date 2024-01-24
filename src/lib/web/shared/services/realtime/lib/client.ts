import { createClient } from '@liveblocks/client';
import { routes } from '~shared/config/routes';

export const client = createClient({
	authEndpoint: routes.apiRealtimeAuthLink(),
	throttle: 16
});
