
app.controller("entriesformCtrl",function($scope,entriesformModel,entriesformService,channelService,ngToast,localStorageService){
	this.modelObj = entriesformModel;
	$scope.entryObj = new entriesformModel.entriesformData();
    $scope.channelList = [];
    $scope.programlList = [];
    $scope.productlList = [];
    $scope.songsList = [];
    $scope.activity = ["Audio","Video"];

    $scope.getAllChannelList = function(){
        entriesformService.getChannelList().then(function(res){
            $scope.channelList = res.data;

        },function(error){
            console.error(error);
        })
    }
    $scope.getAllProgramList = function(channelname){
        entriesformService.getProgramsList(channelname).then(function(res){
            $scope.programlList = res.data;
        },function(error){
            console.error(error);
        })
    }
    $scope.getAllProductList = function(){
        entriesformService.getProductList().then(function(res){
            $scope.productlList = res.data;
        },function(error){
            console.error(error);
        })
    }

    $scope.getAllSongsList = function(productname){
        entriesformService.getSongsList(productname).then(function(res){
            $scope.songsList = res.data;
        },function(error){
            console.error(error);
        })
    }

    $scope.getAllChannelCategoryList = function(){
        channelService.getChannelCategoryList().then(function(res){
            $scope.channelCategoryList = res.data;
        },function(error){
            console.error(error);
        })
    }

    $scope.getEntry = function(id){
        entriesformService.editEntries(id).then(function(res){
            $scope.entryObj.editData(res.data)
            console.log("Dattttttaaaa---"+res.data)
        },function(error){
            console.error(error);
        })
    }
   $scope.entryId = localStorageService.get("entryid");

    if($scope.entryId){
        $scope.getEntry($scope.entryId);
        $scope.isshowUpdate = false;
    }else{
        $scope.isshowUpdate = true;
    }

    $scope.saveEntry = function(valid){
        if(valid){
            $scope.entryObj.created_by = localStorageService.get("currentuserid");
       entriesformService.saveEntries($scope.entryObj).then(function(res){
            ngToast.success({
                 content: '<div role="alert">Entry Added Successfully.</div>'
            });
           $scope.entryObj = angular.copy(new _this.modelObj.entriesformData());
           $scope.entryForm.$setPristine();
           $scope.entryForm.$setUntouched();
       },function(error){
        console.error(error);
       }) 
       }
    }

    $scope.updateEntry = function(valid){
        if(valid){
             $scope.entryObj.updated_by = localStorageService.get("currentuserid");
            entriesformService.updateEntries($scope.entryObj).then(function(res){
                      ngToast.success({
                 content: '<div role="alert">Entry Updated Successfully.</div>'
            });
            },function(error){
                console.error(error);
            })
        }
    }
    

    $scope.getAllChannelList();
   // $scope.getAllProgramList();
    $scope.getAllProductList();
   // $scope.getAllSongsList();
    $scope.getAllChannelCategoryList();
})