function getJSON(url, callback) {
	let request = new XMLHttpRequest();
	request.open("GET", url, true);
	request.responseType = "json";
	request.onload = function() {
		let status = request.status;
		if (status === 200) {
			callback(null, request.response);
		} else {
			callback(status, request.response);
		}
	};
	request.send();
}