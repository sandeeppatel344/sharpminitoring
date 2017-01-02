
app.controller("entriesformCtrl",function($scope,$timeout,entriesformModel,entriesformService,channelService,ngToast,$filter,localStorageService){
	this.modelObj = entriesformModel;
    var _this = this;
	$scope.entryObj = new entriesformModel.entriesformData();
    $scope.channelList = [];
    $scope.programlList = [];
    $scope.productlList = [];
    $scope.songsList = [];
    $scope.channelUsagelist = ["Audio","Video","Audio/Video"];
    $scope.activity = ["N/A","Dance","Singing","Dancing/Singing","Instrumental","Mobile Tune"];
    $scope.startTimeObj  = {};
    $scope.startTimeObj.starthour = "00";
    $scope.startTimeObj.startminutes = "00";
    $scope.startTimeObj.startsecond = "00";
    $scope.endTimeObj = {};

    $scope.endTimeObj.endhours = "00";
    $scope.endTimeObj.endminute = "00";
    $scope.endTimeObj.endsecond = "00";

    $scope.getAllChannelList = function(){
        entriesformService.getChannelList().then(function(res){
            $scope.channelList = res.data;

        },function(error){
            console.error(error);
        })
    }
    $scope.getAllProgramList = function(channelname){
       // channelname = JSON.parse(channelname);
        entriesformService.getProgramsList(channelname.channel_name).then(function(res){
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
        productname = JSON.parse(productname);
        entriesformService.getSongsList(productname.movie_name).then(function(res){
            $scope.songsList = res.data;
        },function(error){
            console.error(error);
        })
    }

    $scope.setplanguageValue = function(product){
        product = JSON.parse(product)
        $scope.entryObj.product_language = product.product_language;
        $scope.entryObj.music_company = product.music_company;
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
            $scope.entryObj.editData(res.data[0])
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

    $scope.getCategoryForStory = function(programname){
        channelService.getCategory(programname).then(function(res){
            console.log(res);
            $scope.entryObj.story= res.data[0].category;
        },function(error){
            console.error(error)
        })
    }

    $scope.saveEntry = function(valid){
        if(valid){
            $scope.entryObj.created_by = localStorageService.get("currentuserid");
            $scope.entryObj.program_date = $filter('date')(new Date(),'yyyy-MM-dd');
            $scope.entryObj.program_name = JSON.parse($scope.entryObj.program_name)
            $scope.entryObj.program_name = $scope.entryObj.program_name.program_name;
            $scope.entryObj.channel = $scope.entryObj.channel.channel_name
            var product_name = JSON.parse($scope.entryObj.product_name);
            $scope.entryObj.product_name = product_name.movie_name;
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

    $scope.calcilateDuration = function(start,end){
        var durationcalc = [];
        $scope.starttime = start;
        $scope.starth = parseInt($scope.starttime.starthour);
        $scope.startm = parseInt($scope.starttime.startminutes);
        $scope.starts = parseInt($scope.starttime.startsecond);

        $scope.endtime = end;
        $scope.endh = parseInt($scope.endtime.endhours);
        $scope.endm = parseInt($scope.endtime.endminute);
        $scope.ends = parseInt($scope.endtime.endsecond);

        $scope.calh = Math.abs($scope.starth - $scope.endh).toString();
        $scope.calm = Math.abs($scope.startm - $scope.endm).toString();
        $scope.cals = Math.abs($scope.starts - $scope.ends).toString();
        if($scope.calh.length<2){
            $scope.calh = "0"+$scope.calh
        }

        if($scope.cals.length<2){
            $scope.cals = "0"+$scope.cals
        }

        if($scope.calm.length<2){
            $scope.calm = "0"+$scope.calm
        }
        $scope.isShowMessage = false;
    if($scope.endh<$scope.starth){
        $scope.isShowMessage = true;
        if($scope.endm<$scope.startm){
            $scope.isShowMessage = true;
        }else{
            $scope.isShowMessage = false;
        }
    }else{
            $scope.isShowMessage = false;
        }

        $scope.entryObj.duration = [$scope.calh,$scope.calm,$scope.cals].join(":")

    }

    $scope.getAllChannelList();
   // $scope.getAllProgramList();
    $scope.getAllProductList();
   // $scope.getAllSongsList();
    $scope.getAllChannelCategoryList();
})