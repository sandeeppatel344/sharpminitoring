app.controller("loginCtrl",function($scope,loginService){
	$scope.login = {};
	$scope.doLogin = function(valid){
		if(valid){
		loginService.dologin($scope.login).then(function(res){
			console.log(res)
		},function(error){
			console.error(error);
		})
	}
	}
})