app.controller("loginCtrl",function($scope,loginService){
	$scope.userObj = {};
	$scope.doLogin = function(valid){
		if(valid){
		loginService.dologin(userObj).then(function(res){

		},function(error){
			console.error(error);
		})
	}
	}
})