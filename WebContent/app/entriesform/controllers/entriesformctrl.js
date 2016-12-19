
app.controller("entriesformCtrl",function($scope,entriesformModel,entriesformService,channelService){
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
        },function(error){
            console.error(error);
        })
    }
   $scope.entryId = localStorageService.get("entryid");

    if($scope.entryId){
        $scope.editData($scope.entryId);
        $scope.isshowUpdate = false;
    }else{
        $scope.isshowUpdate = true;
    }
    

    $scope.getAllChannelList();
   // $scope.getAllProgramList();
    $scope.getAllProductList();
   // $scope.getAllSongsList();
    $scope.getAllChannelCategoryList();
})