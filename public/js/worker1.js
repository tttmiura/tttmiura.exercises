onmessage = function(e) {
	var fromDate = new Date();
	while(true) {
		var toDate = new Date();
		var time = fromDate.getTime() - toDate.getTime();
		postMessage(time);
	}
}
