export const roomListPage = () => `/rooms`;
export const roomDetailPage = ({ roomSlug }: { roomSlug: string }) => `/rooms/${roomSlug}`;
export const roomManagePage = ({ roomSlug }: { roomSlug: string }) => `/rooms/${roomSlug}/manage`;

export const routes = {
	roomListPage,
	roomDetailPage,
	roomManagePage
};
