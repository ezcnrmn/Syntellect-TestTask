export const isNumber = (str: string) => {
	if (!str) return false;

	if (!Number.isNaN(Number(str))) return true;

	return false;
};
