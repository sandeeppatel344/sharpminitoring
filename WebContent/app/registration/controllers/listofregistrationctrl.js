app.controller("listOfRegistrationCtrl",function($scope,$state,localStorageService,registerService){
	localStorageService.set("registerid","");
	$scope.registerList = [];
	$scope.addNewRegistration = function(){
		$state.go("sharpmonitoring.registration",{isnew:true})
	}

	$scope.editData = function(id){
		localStorageService.set("registerid",id);
		$state.go("sharpmonitoring.registration",{isnew:false,id:id})

	}

	$scope.deleteData = function(id){
		registerService.deleteRegister(id).then(function(res){

		},function(error){
			console.log(error);
		})
	}

	$scope.getAllRegister = function(){
		registerService.getAllRegister().then(function(res){
			$scope.registerList = res.data;
		},function(error){
			console.log(error);
		})
	}

	$scope.getAllRegister();
})