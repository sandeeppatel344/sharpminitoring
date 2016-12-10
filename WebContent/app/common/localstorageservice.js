/**
* Created by nemade_g on 11-11-2015.
*/
app.factory('localStorageService',function($window) {	
	
		return {
			set: function(key, value) {
			  $window.localStorage[key] = value;
			},
			get: function(key, defaultValue) {
			  return $window.localStorage[key] || defaultValue;
			},
			setObject: function(key, value) {
			  $window.localStorage[key] = JSON.stringify(value);
			},
			getObject: function(key) {
			   return JSON.parse($window.localStorage[key] || '{}');
			},
			removeObject: function(key) {
			   return $window.localStorage.removeItem(key);
			},
			getArrayObject: function(key) {
			  return JSON.parse($window.localStorage[key] || '[]');
			},
			clear: function () {
				$window.localStorage.clear();
			}
		
			
		}
	});

