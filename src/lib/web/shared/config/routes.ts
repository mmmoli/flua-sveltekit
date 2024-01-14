export const aboutPage = () => `/about`;
export const accountPage = () => `/account`;
export const callPage = ({ roomSlug }: { roomSlug: string }) => `/join/${roomSlug}`;
export const dashPage = () => `/dash`;
export const manageRoomPage = ({ roomSlug }: { roomSlug: string }) => `/rooms/${roomSlug}`;
export const roomsPage = () => `/rooms`;

export const profileHash = () => 'profile';
export const plansHash = () => 'plans';
export const profileLink = () => `${accountPage()}#${profileHash()}`;
export const plansLink = () => `${accountPage()}#${plansHash()}`;

export const routes = {
	aboutPage,
	accountPage,
	callPage,
	dashPage,
	manageRoomPage,
	roomsPage
};
