export function convertImageUrl(url) {
	return url.replace(/http:\/\//, 'https://images.weserv.nl/?url=')
}