export const dashPage = () => `/dash`;
export const callPage = ({ roomSlug }: { roomSlug: string }) => `/join/${roomSlug}`;
export const manageRoomPage = ({ roomSlug }: { roomSlug: string }) => `/manage/${roomSlug}`;

export const routes = {
	dashPage,
	callPage,
	manageRoomPage
};
