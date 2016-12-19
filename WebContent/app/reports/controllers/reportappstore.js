/**
 * Created by sandeep on 12/19/2016.
 */
app.controller("reportappstoreCtrl",function($scope,$timeout){
    $timeout(function(){
        $scope.getTimes=function(n){
            return new Array(n);
        };
    }, 100);
})
