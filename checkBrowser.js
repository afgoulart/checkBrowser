// loop para verificar qual browser o usuario esta usando e adiciona uma classe com o nome especificado na tag "html"
var regexp = /(CriOS|Chrome|Opera|Firefox|Safari)[\/|\S]([1-9]+\.[0-9]+|[1-9]*)./;
var checkBrowser = navigator.userAgent.match(regexp);
var device = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry/gi);
device = ( device ? device.join('').toLowerCase() : 'pc' );
var touchEvents = ('ontouchstart' in window ? 'touch': 'no-touch' );
var versionAgent = "";
var userAgent = "";
var $html = document.documentElement;

if(checkBrowser) {
	versionAgent = "v" + checkBrowser.pop().replace('.','');
	userAgent = checkBrowser.pop().toLowerCase();
}
userAgent = (userAgent == 'crios')? 'chrome' : userAgent;
if (checkBrowser == null) {
	checkBrowser = navigator.userAgent.match(/(MSIE) ([0-9][0-9]|[0-9])/);
	if (checkBrowser != null ) {
		versionAgent = "ie" + checkBrowser.pop();
		userAgent = checkBrowser.pop().toLowerCase();
	}
}
$html.className += userAgent;
$html.className += ' ' + versionAgent;
$html.className += ' ' + touchEvents;
$html.className += ' ' + device;
window.CheckBrowser = {
	'userAgent': userAgent,
	'versionAgent': versionAgent,
	'touchEvents': (touchEvents == 'touch')? true : false,
	'device':device
};