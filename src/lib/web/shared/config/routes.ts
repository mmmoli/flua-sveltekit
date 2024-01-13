export const dashPage = () => `/dash`;
export const roomDetailPage = ({ roomSlug }: { roomSlug: string }) => `/r/${roomSlug}`;
export const roomManagePage = ({ roomSlug }: { roomSlug: string }) => `/rooms/${roomSlug}/manage`;

export const routes = {
	dashPage,
	roomDetailPage,
	roomManagePage
};
