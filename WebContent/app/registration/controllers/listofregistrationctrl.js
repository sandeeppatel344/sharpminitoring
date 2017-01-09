app.controller("listOfRegistrationCtrl",function($scope,$state,$stateParams,localStorageService,registerService,ngToast){
	localStorageService.set("registerid","");
	$scope.registerList = [];
    $scope.curPage = 0;// current Page
    $scope.pageSize = 10;
	$scope.addNewRegistration = function(){
		$state.go("sharpmonitoring.registration",{isnew:true})
	}

	$scope.editData = function(id){
		localStorageService.set("registerid",id);
		$state.go("sharpmonitoring.registration",{isnew:false,id:id})

	}

	$scope.deleteData = function(id){
		registerService.deleteRegister(id).then(function(res){
	               ngToast.success({
        		 content: '<div role="alert">Register Deleted Successfully.</div>'
            });
        $state.reload();
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
    $scope.numberOfPages = function()
    {
        return Math.ceil($scope.registerList.length / $scope.pageSize);
    };

	$scope.getAllRegister();
})