/**
 * Created by sandeep on 12/6/2016.
 */
app.controller("channelCtrl",function($scope,channelModel,$stateParams,channelService,localStorageService){
    this.modelObj = channelModel
    $scope.channelObj = new this.modelObj.channelData();
    $scope.regExName = /^[A-Z a-z]{2,50}$/;
    $scope.regExAlphaNumeric = /^[ A-Za-z0-9_@.\/()#&+-]*$/;
    $scope.regAddress = /^[ A-Za-z0-9_@.\/(),#&+-]*$/
    $scope.regExEmail = /^[\w\.=-]+@[\w\.-]+\.[\w]{2,3}$/;
    $scope.regExNumeric = /^[0-9]*$/;
    $scope.regExArea = /^[A-Z a-z 0-9 , . () -]{2,45}$/;
    $scope.regExPinCode = /^[0-9]{6,6}$/;
    $scope.regExMobile = /^[0-9]{10,10}$/;
    $scope.regExYear = /^\d{4}$/;
    $scope.regExAadhar = /^\\d{12}$/;
    $scope.regExDecimal = /^(?:\d*\.\d{1,2}|\d+)$/;
    $scope.regnumer = /^[0-9]+$/;

    $scope.channel_category = [{"id":"1","name":"Sports"},{"id":"2","name":"News"},{"id":"3","name":"Entertainment"}];
    $scope.saveChannel = function(valid){
        if(valid){
        $scope.channelObj.channel_category_id = $scope.channelObj.channel_category.id;
        channelService.saveChannel($scope.channelObj).then(function(res){
            console.log(res);
        },function(error){
            console.error(error);
        })
    }
    }

    $scope.editData = function(id){
        channelService.editChannel(id).then(function(res){
            console.log(res)
            $scope.channelObj.editData(res.data[0]);
        },function(error){
            console.error(error);
        })
    }
    $scope.channelId = $stateParams.id?$stateParams.id:localStorageService.get("channelid");

    if($scope.channelId){
        $scope.editData($scope.channelId);
        $scope.isshowUpdate = false;
    }else{
        $scope.isshowUpdate = true;
    }

    $scope.updateChannel = function(valid){
        if(valid){
        channelService.updateChannel($scope.channelObj).then(function(res){
            console.log(res)
        },function(error){
            console.error(error);
        })
    }
    }
})
