onmessage = function(e) {
	var count = 0;
	while(true) {
		postMessage(count++);
		if(count > 1000000) {
			break;
		}
	}
}
