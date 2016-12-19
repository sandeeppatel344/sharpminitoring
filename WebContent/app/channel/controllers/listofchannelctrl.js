/**
 * Created by sandeep on 12/7/2016.
 */
app.controller("listOfChannel",function($scope,$state,channelService,localStorageService,ngToast){
    $scope.channelList = [];
    localStorageService.set("channelid","");
    $scope.getChannelList = function(){
        channelService.getChannelList().then(function(res){
            $scope.channelList = res.data;
        },function(error){
            console.error(error);
        })
    };

    $scope.addNewChannel = function(){
        $state.go("sharpmonitoring.channel",{isnew:false})
    }


    $scope.editData = function(id){
        localStorageService.set("channelid",id);
        $state.go("sharpmonitoring.channel",{isnew:false,id:id})
    }


    $scope.deleteData = function(id){

        channelService.deleteChannel(id).then(function(res){
            console.log(res)
                ngToast.success({
                 content: '<div role="alert">Channel Deleted Successfully.</div>'
            });
             $state.reload();
        },function(error){
            console.error(error);
        })
    }



    $scope.getChannelList();
})
