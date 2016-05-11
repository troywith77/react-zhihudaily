export function convertImageUrl(url) {
	return url.replace(/http:\/\//, 'https://images.weserv.nl/?url=')
	// return 'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=' + url
	// return url
}

export function convertDetailImageUrl(url) {
	return url.replace(/http\w{0,1}:\/\/pic/g, "https://images.weserv.nl/?url=pic")
	// return url.replace(/http\w{0,1}:\/\/pic/g, "http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=https://pic")
	// return url
}

export function reachBottom() {
	let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	let s = document.body.scrollTop;
	let total = document.body.scrollHeight;
	return total === h + s;
}