export const accountPage = () => `/account`;
export const callPage = ({ roomSlug }: { roomSlug: string }) => `/join/${roomSlug}`;
export const dashPage = () => `/dash`;
export const manageRoomPage = ({ roomSlug }: { roomSlug: string }) => `/manage/${roomSlug}`;

export const routes = {
	accountPage,
	callPage,
	dashPage,
	manageRoomPage
};
