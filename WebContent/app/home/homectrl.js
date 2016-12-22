/**
 * Created by sandeep on 12/18/2016.
 */
app.controller("homeCtrl",function($scope,$rootScope,$timeout,$state,localStorageService){
    $timeout(function(){
        $scope.getTimes=function(n){
            return new Array(n);
        };
    }, 100);
    var element = document.getElementById("logout")
    element.style.display = "inline";
    $rootScope.currentuser = JSON.parse(localStorageService.get("currentuser"));
    $scope.currentRole =  $rootScope.currentuser.role
    
    $rootScope.gotToHome = function(){
        if($rootScope.currentuser.first_name){
            $state.go("sharpmonitoring.home");
        }
    }

})
