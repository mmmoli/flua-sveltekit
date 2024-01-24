import { routes } from '~shared/config/routes';
import type { ServerTime } from '../lib/types';

export const getServerTime = async (): Promise<ServerTime> => {
	const resp = await fetch(routes.apiRealtimeServertimeLink());
	const data = (await resp.json()) as string;
	return parseInt(data);
};
