export function convertImageUrl(url) {
	return 'http://localhost:3000/api/image?url=' + url
}

export function reachBottom() {
	let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	let s = document.body.scrollTop;
	let total = document.body.scrollHeight;
	//win 上scrollTop不知道为什么多个0.2，暂时多加个判断解决。。。
	return total === h + s || total === h + s - 0.2;
}