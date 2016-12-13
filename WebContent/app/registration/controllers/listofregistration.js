app.controller("listOfRegistrationCtrl",function($scope,$state,localStorageService,registerService){
	localStorageService.set("registerid","");
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
})