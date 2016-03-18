export function convertImageUrl(url) {
	return url.replace(/http:\/\//, 'https://images.weserv.nl/?url=')
}

export function convertDetailImageUrl(url) {
	return url.replace(/http\w{0,1}:\/\/pic/g, "https://images.weserv.nl/?url=pic")
}