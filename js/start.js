if (top.location !== self.location) { top.location = self.location; }

if(window.cordova) {
	document.addEventListener('deviceready', function () { 
		screen.orientation.lock('landscape');
	  	orbium.init();
	}, false);
}
else {
	document.addEventListener("DOMContentLoaded", function(event) { 
  		orbium.init();
	});
}