export function secToMinConverter(seconds: number) {
	if (!seconds) return '0:00'
	const minutes = Math.floor(seconds / 60)
	const additionalSeconds = seconds % 60
	if (additionalSeconds < 10) return `${minutes}:0${additionalSeconds}`
	else return `${minutes}:${additionalSeconds}`
}