/**
 * Created by sandeep on 12/19/2016.
 */
app.controller("workingTimeCtrl",function($scope,reportsService){
    $scope.userList = [];
    $scope.filterObj = {};
    $scope.list = {};
    $scope.getRegisteredUser = function(){
        reportsService.getRegisteredUser().then(function(res){
            $scope.userList = res.data;
        })
    }
    $scope.getReportData = function(){
        reportsService.getEmployeeWorkingTime($scope.filterObj).then(function(res){
            console.log(res);
            angular.forEach(res.data,function(lst){
                $scope.currentData = lst.userid+""+new Date(lst.login_datetime).getDate();

                if($scope.list[$scope.currentData]){
                    //$scope.list[$scope.currentData].date = lst.date;
                    $scope.list[$scope.currentData].workhours += Math.abs(new Date(lst.login_datetime) - new Date(lst.logout_datetime))/(60*60*1000)
                }else{
                    $scope.list[$scope.currentData] = {};
                    $scope.list[$scope.currentData].date = lst.date;
                    $scope.list[$scope.currentData].workhours = Math.abs(new Date(lst.login_datetime) - new Date(lst.logout_datetime))/(60*60*1000);
                }
            })

            console.log($scope.list);

        })
    }
    $scope.getRegisteredUser();

})