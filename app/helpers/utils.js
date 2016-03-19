export function convertImageUrl(url) {
	return url.replace(/http:\/\//, 'https://images.weserv.nl/?url=')
}

export function convertDetailImageUrl(url) {
	return url.replace(/http\w{0,1}:\/\/pic/g, "https://images.weserv.nl/?url=pic")
}

export function reachBottom() {
	let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	let s = document.body.scrollTop;
	let total = document.body.scrollHeight;
	return total === h + s;
}