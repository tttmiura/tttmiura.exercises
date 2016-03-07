onmessage = function(e) {
	var baseTime = new Date().getTime();
	var count = 0;
	while(true) {
		var currentTime = new Date().getTime();
		var tmpTime = new Date().getTime();
		while((tmpTime - currentTime) < 1000) {
		}
		var dif = currentTime - baseTime;
		postMessage(dif);
		if(dif > 1000000) {
			break;
		}
	}
}
