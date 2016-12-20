/**
 * Created by sandeep on 12/19/2016.
 */
app.controller("workingTimeCtrl",function($scope,reportsService){
    $scope.userList = [];
    $scope.filterObj = {};
    $scope.getRegisteredUser = function(){
        reportsService.getRegisteredUser().then(function(res){
            $scope.userList = res.data;
        })
    }
    $scope.getReportData = function(){
        reportsService.getEmployeeWorkingTime($scope.filterObj).then(function(res){
            console.log(res);
        })
    }
    $scope.getRegisteredUser();

})