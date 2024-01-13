export const navIsActive = (a: string, b: string) => {
	const basePath = (path: string) => path.split('/')[1].toLowerCase();
	const aBasePath = basePath(a);
	const bBasePath = basePath(b);
	return aBasePath === bBasePath;
};
