function DOMLoaded(){
	
	document.addEventListener("deviceready", phonegapLoaded, false);
}

function phonegapLoaded() {
	
	networkConnection();

}

function networkConnection() {
	
	var networkState = navigator.network.connection.type;
	
	var states = {};
	states[Connection.UNKNOWN] = 'Unknown Connection';
	states[Connection.ETHERNET] = 'Ethernet connection';
	states[Connection.WIFI] = 'WIFI connection';
	states[Connection.CELL_2G] = '2G connection';
	states[Connection.CELL_3G] = '3G connection';
	states[Connection.CELL_4G] = '4G connection';
	states[Connection.NONE] = 'No connection';
	
	alert('Network state; ' + states[networkState]);
}