var app = angular.module('sharpmonitoring', [ 'ui.router',
   'ui.bootstrap','ngCookies','angular-loading-bar','datatables']);

var userserviceapiurl = "http://Darshan/travel2stay-api/public/";
app.run(function($rootScope,$timeout, $state, $state, $stateParams) {
	// this solves page refresh and getting back to state
	//editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
  $rootScope.isshowl = false;
	$rootScope.logout = function(){
    loginServices.logout();

  }
/*  $rootScope.ishowbaner = false;
  $roo$rootScope.ishowbaner = true;tScope.ishowbanerdal = false;*/





	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){ 

/*
    if(localStorageService.get("from") == "pathfinder"){
      $state.go(pathfinder.primaryform)
    }*/

  
	});

	$rootScope.$on("cfpLoadingBar:started", function(){
		$('body').attr("disabled", "disabled");
	});
	$rootScope.$on("cfpLoadingBar:completed", function(){
		$('body').removeAttr("disabled");
	});
});


//angular.module('onlineadmission').value('userserviceapiurl', 'http://192.168.0.230:8080/user-service/');
//angular.module('onlineadmission').value('paymentapiurl', 'http://192.168.0.230:8080/PaymentDispatcherService/');
//angular.module('onlineadmission').value('expireTimeInMinuites', 300);
//angular.module('pathfinder').value('pathfinderuserserviceapiurl', 'http://192.168.0.230:8080/user-service/');
//angular.module('pathfinder').value('imageurl', 'http://192.168.0.230:8080');
//angular.module('pathfinder').value('expireTimeInMinuites', 300);



app.factory('InitializationService',
	function(localStorageService, $rootScope, $uibModal) {
		function fnInitialize() {
	
		}
		return {
			initialize : fnInitialize
		};
	});

//get window closed event logout currentUser.
window.addEventListener("unload", function (e) {
	var confirmationMessage = "\o/";
	//localStorage.clear();
  	return confirmationMessage;
});

//sets an error invalidDate when user types the date.
app.directive('validDate', function () {
  return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attrs, control) {
      	control.$parsers.push(function (viewValue) {
              var newDate = control.$viewValue;
              control.$setValidity("invalidDate", true);  
              if (typeof newDate === "object" || newDate == "") return newDate;  // pass through if we clicked date from popup
              if (!newDate.match(/^\d{1,2}\/\d{1,2}\/((\d{2})|(\d{4}))$/))
                  control.$setValidity("invalidDate", false);
              return viewValue;
          });
      }
  };
});

app.directive("compareTo", function() {
  return {
      require: "ngModel",
      scope: {
          otherModelValue: "=compareTo"
      },
      link: function(scope, element, attributes, ngModel) {
           
          ngModel.$validators.compareTo = function(modelValue) {
              return modelValue == scope.otherModelValue;
          };

          scope.$watch("otherModelValue", function() {
              ngModel.$validate();
          });
      }
  };
});

app.directive('validTime', function () {
  return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attrs, control) {
      	control.$parsers.push(function (viewValue) {
              var newDate = control.$viewValue;
              control.$setValidity("invalidTime", true);  
              if (typeof newDate === "object" || newDate == "") return newDate;  // pass through if we clicked date from popup
              if (!newDate.match(/^(0?[1-9]|1[012])(:[0-5]\d) [APap][mM]$/))
                  control.$setValidity("invalidTime", false);
              return viewValue;
          });
      }
  };
});

app.config(
	function($urlRouterProvider, $stateProvider, $httpProvider,
			$locationProvider) {
		$locationProvider.html5Mode(false);
		$urlRouterProvider.when('', 'login');
		//$httpProvider.interceptors.push('tokenInjector');
	});

angular.element(document).ready(function ($rootScope) {
  angular.bootstrap(document,["sharpmonitoring"])
})