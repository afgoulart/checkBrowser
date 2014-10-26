(function (window, document, navigator) {
	// loop para verificar qual browser o usuario esta usando e adiciona uma classe com o nome especificado na tag "html"
	var regexp = /(CriOS|Chrome|Opera|Firefox|Safari)[\/|\S]([1-9]+\.[0-9]+|[1-9]*)./,
		checkBrowser = navigator.userAgent.match(regexp),
		device = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry/gi),
		touchEvents = ('ontouchstart' in window ? 'touch': 'no-touch' ),
		versionAgent = '',
		userAgent = '',
		$html = document.documentElement;

	device = ( device ? device.join('').toLowerCase() : 'pc' );

	if (checkBrowser) {
		versionAgent = "v" + checkBrowser.pop().replace('.','');
		userAgent = checkBrowser.pop().toLowerCase();
	}
	userAgent = (userAgent === 'crios')? 'chrome' : userAgent;
	if (checkBrowser === null) {
		checkBrowser = navigator.userAgent.match(/(MSIE) ([0-9][0-9]|[0-9])/);
		if (checkBrowser !== null ) {
			versionAgent = "ie" + checkBrowser.pop();
			userAgent = checkBrowser.pop().toLowerCase();
		}
	}
	$html.className = [$html.classname, userAgent, versionAgent, touchEvents, device].join(' ');
	window.CheckBrowser = {
		'userAgent': userAgent,
		'versionAgent': versionAgent,
		'touchEvents': (touchEvents === 'touch'),
		'device': device
	};
})(window, document, navigator);
