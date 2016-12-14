/**
 * Created by sandeep on 12/6/2016.
 */
app.controller("channelCtrl",function($scope,channelModel,$stateParams,$timeout,channelService,localStorageService,ngToast){
    this.modelObj = channelModel;
    var _this = this;
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

    $scope.channel_category = [];
    $scope.getChannelCategoryList = function(){
        channelService.getChannelCategoryList().then(function(res){
           $scope.channel_category = res.data; 
        })
    }

    $scope.getChannelCategoryList();
    $scope.saveChannel = function(valid){
        if(valid){
        $scope.channelObj.channel_category_id = $scope.channelObj.channel_category.id;
        $scope.channelObj.created_by = localStorageService.get("currentuserid");
        channelService.saveChannel($scope.channelObj).then(function(res){
            console.log(res);
            ngToast.success({
                 content: '<div role="alert">Channel Added Successfully.</div>'
            });

            $scope.isshowmsg = false;
            $timeout(function(){
              $scope.channelObj = new _this.modelObj.channelData(); 
          },500)
        },function(error){
            ngToast.danger({
                content: '<div role="alert">Error in Add Channel Try again</div>'
            });
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
    $scope.channelId = localStorageService.get("channelid");

    if($scope.channelId){
        $scope.editData($scope.channelId);
        $scope.isshowUpdate = false;
    }else{
        $scope.isshowUpdate = true;
    }

    $scope.updateChannel = function(valid){
        if(valid){
        $scope.channelObj.channel_category_id = $scope.channelObj.channel_category.id;
         $scope.channelObj.updated_by = localStorageService.get("currentuserid");
        channelService.updateChannel($scope.channelObj).then(function(res){
            console.log(res)
            ngToast.success({
                content: '<div role="alert">Channel Updated Successfully.</div>'
            });
        },function(error){
            ngToast.danger({
                content: '<div role="alert">Error in Update Channel Try again</div>'
            });
            console.error(error);
        })
    }
    }
})

app.directive("limitTo", [function() {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
            var limit = parseInt(attrs.limitTo);
            angular.element(elem).on("keypress", function(e) {
                if (this.value.length == limit) e.preventDefault();
            });
        }
    }
}]);
