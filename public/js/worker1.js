onmessage = function(e) {
	var fromDate = new Date();
	while(true) {
		var toDate = new Date();
		var time =  toDate.getTime() - fromDate.getTime();
		postMessage(time);
		sleep(1000);
	}
}
