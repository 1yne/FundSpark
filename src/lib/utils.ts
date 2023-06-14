export function isNumeric(num: string) {
	return !isNaN(num);
}

export function truncateText(text: string) {
	return text.substring(0, 64).concat("...")
}