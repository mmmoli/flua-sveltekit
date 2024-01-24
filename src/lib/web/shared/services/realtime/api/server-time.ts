export const GET = () => {
	const now = new Date().getTime();
	const response = now;
	return new Response(String(response));
};
