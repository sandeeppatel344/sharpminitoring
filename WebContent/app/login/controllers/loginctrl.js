app.controller("loginCtrl",function($scope,loginService,localStorageService){
	$scope.login = {};
	$scope.doLogin = function(valid){
		if(valid){
		loginService.dologin($scope.login).then(function(res){
			console.log(res)
			if(res.data[0]){
			localStorageService.set("currentuser",JSON.stringify(res.data[0]))
			localStorageService.set("currentuserid",res.data[0].id)
			}
		},function(error){
			console.error(error);
		})
	}
	}
})

[{"id":"2","first_name":"Sandeep","last_name":"Patel","email":"sandy@gmail.com","username":"sandy","password":"123456","dob":"1988-12-15","contact":"9773937434","role_id":"1","created_by":"1","created_datetime":"2016-12-09 15:19:48","updated_by":null,"updated_datetime":null,"role":"Admin"}]