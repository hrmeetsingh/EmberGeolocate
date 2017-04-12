import Ember from 'ember';

export default Ember.Controller.extend({
	"isLocationLoading": false,
	"userLocationLat": null,
	"userLocationLng": null,
	"geolocateerrors": null,

	init(){

	},
	actions: {
		geolocate(){
			let self = this;
			if (navigator.geolocation) {
        		navigator.geolocation.getCurrentPosition(displayUsersPostalCode, showError);
      		}

      		function displayUsersPostalCode(position) {
        		let userLocationLat = position.coords.latitude;
        		let userLocationLng = position.coords.longitude;
        		self.set("userLocationLat", userLocationLat);
        		self.set("userLocationLng", userLocationLng);
    		}

    		function showError(error) {
        		if (error.code === 1) {
          			self.set("geolocateerrors", "Request for geolocation denied.");
        		}
        		else {
          			self.set("geolocateerrors", "Your geolocation could not be determined. Please try again later.");
        		}
      		}
		}	
	}
});
