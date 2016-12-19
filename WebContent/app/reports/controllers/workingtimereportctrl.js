/**
 * Created by sandeep on 12/19/2016.
 */
app.controller("workingTimeCtrl",function($scope,reportsService){
    $scope.userList = [];
    $scope.getRegisteredUser = function(){
        reportsService.getRegisteredUser().then(function(res){
            $scope.userList = res.data;
        })
    }
    $scope.getRegisteredUser();
})