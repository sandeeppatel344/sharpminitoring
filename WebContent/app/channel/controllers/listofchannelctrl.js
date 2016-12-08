/**
 * Created by sandeep on 12/7/2016.
 */
app.controller("listOfChannel",function($scope,channelService){
    $scope.chennalList = [];
    $scope.getChannelList = function(){
        channelService.getChannelList().then(function(res){
            $scope.chennalList = res.data;
        },function(error){
            console.error(error);
        })
    };
    $scope.getChannelList();
})
