
app.controller("loginCtrl",function($scope,loginService,$state,$timeout,localStorageService) {
    $scope.login = {};
    $scope.doLogin = function (valid) {
        if (valid) {
            loginService.dologin($scope.login).then(function (res) {
                console.log(res)
                if (res.data[0]) {
                    localStorageService.set("currentuser", JSON.stringify(res.data[0]))
                    localStorageService.set("currentuserid", res.data[0].id)
                    $state.go("sharpmonitoring.home")
                }


            },function(error){
                console.error(error);
                $scope.message=error.data.message;
            });
        }
    }

});