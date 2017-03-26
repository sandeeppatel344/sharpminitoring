
app.controller("entriesformCtrl",function(moment,$scope,$timeout,$state,focus,entriesformModel,entriesformService,channelService,ngToast,$filter,localStorageService){
	this.modelObj = entriesformModel;
    var _this = this;



    $scope.entryObj = new entriesformModel.entriesformData();
    $scope.channelList = [];
    $scope.programlList = [];
    $scope.productlList = [];
    $scope.songsList = [];
    $scope.channelUsagelist = ["Audio","Video","Audio/Video"];
    $scope.activity = ["Not Applicable","Dance","Singing","Dancing/Singing","Instrumental","Mobile Tune"];
    $scope.startTimeObj  = {};

    $scope.endTimeObj = {};
    $scope.regExTime = /^[0-9]{2,2}$/;
    $scope.clearStartHour=function(){
        $scope.startTimeObj.starthour = "";
    }
    $scope.clearStartMin=function(){
        $scope.startTimeObj.startminutes = "";
    }
    $scope.clearStartSec=function(){
        $scope.startTimeObj.startsecond = "";
    }
    $scope.clearEndHour=function(){
        $scope.endTimeObj.endhours = "";
    }
    $scope.clearEndMin=function(){
        $scope.endTimeObj.endminute = "";
    }
    $scope.clearEndSec=function(){
        $scope.endTimeObj.endsecond = "";
    }
    if(localStorageService.get("saveEndTime")){
        var savedEndTime = JSON.parse(localStorageService.get("saveEndTime"));
        $scope.startTimeObj.starthour = savedEndTime.endhours;
        $scope.startTimeObj.startminutes = savedEndTime.endminute;
        $scope.startTimeObj.startsecond = savedEndTime.endsecond;
    }
    $scope.getAllChannelList = function(){
        entriesformService.getChannelList().then(function(res){
            $scope.channelList = res.data;
            $timeout(function(){
                $scope.toBeContinue();
            })

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
            $timeout(function(){
                $scope.toBeContinue();
            })
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
            //$scope.entryObj.editData(res.data[0])
            localStorageService.set("tobecontinueentryobj",JSON.stringify(res.data[0]))
            localStorageService.set("istobecontinue",true);
            $scope.entryId = localStorageService.get("entryid");
            localStorageService.set("entryid","");
            $timeout(function(){
                $scope.toBeContinue();
            },200)

            //$state.reload();
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
        if(valid&&$scope.isShowMessage){
            $scope.entryObj.created_by = localStorageService.get("currentuserid");
            $scope.entryObj.program_date = $filter('date')($scope.entryObj.program_date,'yyyy-MM-dd');
            $scope.entryObj.program_name = $scope.entryObj.program_name//   JSON.parse($scope.entryObj.program_name)
            //$scope.entryObj.program_name = $scope.entryObj.program_name.program_name;
            $scope.entryObj.channel = $scope.entryObj.channel.channel_name
            var product_name = function(){
                try{
                    return JSON.parse($scope.entryObj.product_name)
                }catch(e){
                    return $scope.entryObj.product_name
                }
            };
            $scope.entryObj.product_name = product_name();
            $scope.entryObj.product_name = $scope.entryObj.product_name.movie_name;
            $scope.entryObj.songs = angular.isObject($scope.entryObj.songs)?$scope.entryObj.songs.songs:$scope.entryObj.songs;
            entriesformService.saveEntries($scope.entryObj).then(function(res){
                $scope.toBeContinue1($scope.entryObj);
            ngToast.success({
                 content: '<div role="alert">Entry Added Successfully.</div>'
            });
          // $scope.entryObj.start_time = angular.copy($scope.entryObj.start_time="");//angular.copy(new _this.modelObj.entriesformData());
            //    $scope.entryObj.end_time = angular.copy($scope.entryObj.end_time="")
                $scope.startTimeObj  = {};
                $scope.startTimeObj.starthour = "";
                $scope.startTimeObj.startminutes = "";
                $scope.startTimeObj.startsecond = "";
                $scope.endTimeObj = {};

                $scope.endTimeObj.endhours = "";
                $scope.endTimeObj.endminute = "";
                $scope.endTimeObj.endsecond = "";
           $scope.entryForm.$setPristine();
           $scope.entryForm.$setUntouched();
            $scope.focusMe = true;
                focus('proname');
              //  $scope.getListOfEntries();
       },function(error){
        console.error(error);
       }) 
       }
    }

    $scope.updateEntry = function(valid){
        if(valid){
            $scope.entryObj.id=localStorageService.get("entryid")
             $scope.entryObj.updated_by = localStorageService.get("currentuserid");
            $scope.entryObj.program_date = $filter('date')(new Date(),'yyyy-MM-dd');
            $scope.entryObj.program_name = $scope.entryObj.program_name//   JSON.parse($scope.entryObj.program_name)
            //$scope.entryObj.program_name = $scope.entryObj.program_name.program_name;
            $scope.entryObj.channel = $scope.entryObj.channel.channel_name
            var product_name = function(){
                try{
                    return JSON.parse($scope.entryObj.product_name)
                }catch(e){
                    return $scope.entryObj.product_name
                }
            };
            $scope.entryObj.product_name = product_name();
            $scope.entryObj.product_name = $scope.entryObj.product_name.movie_name;
            $scope.entryObj.songs = angular.isObject($scope.entryObj.songs)?$scope.entryObj.songs.songs:$scope.entryObj.songs;

            entriesformService.updateEntries($scope.entryObj).then(function(res){
                      ngToast.success({
                 content: '<div role="alert">Entry Updated Successfully.</div>'
            });
                $state.reload();
            },function(error){
                console.error(error);
            })
        }
    }

    $scope.calcilateDuration = function(start,end){
        var durationcalc = [];
        $scope.starttime = start;
        $scope.endtime = end;
        $scope.entryObj.start_time =$scope.starttime.starthour+":"+$scope.starttime.startminutes+":"+$scope.starttime.startsecond
        $scope.entryObj.end_time = $scope.endtime.endhours+":"+$scope.endtime.endminute+":"+$scope.endtime.endsecond;
        $scope.starth = parseInt($scope.starttime.starthour);
        $scope.startm = parseInt($scope.starttime.startminutes);
        $scope.starts = parseInt($scope.starttime.startsecond);
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
         //   $scope.isShowMessage = false;
        }
    }else{
            $scope.isShowMessage = false;
        }

        if($scope.endh==$scope.starth&&$scope.endm<$scope.startm){
            $scope.isShowMessage = true;
        }

        if($scope.endm==$scope.startm&&$scope.ends<$scope.starts){
            $scope.isShowMessage = true;
        }
        localStorageService.set("saveEndTime",JSON.stringify(end));
        var startTime=moment($scope.entryObj.start_time, "HH:mm:ss");
        var endTime=moment($scope.entryObj.end_time, "HH:mm:ss");
        var duration = moment.duration(endTime.diff(startTime));
        var hours = parseInt(duration.asHours());
        var minutes = parseInt(duration.asMinutes())-hours*60;
        var second = (parseInt(duration.asSeconds())-hours*60*60)%60 ;

        $scope.entryObj.duration = [hours,minutes,second].join(":")

    }

    $scope.toBeContinue = function(){
        if(localStorageService.get("istobecontinue")=="true"){
            localStorageService.set("istobecontinue",false);
            $scope.toBeContinueEntry = JSON.parse(localStorageService.get("tobecontinueentryobj"));
            console.log("TBEContineu======"+JSON.stringify($scope.toBeContinueEntry));
            $scope.entryObj.channel = $filter('filter')($scope.channelList, {channel_name: $scope.toBeContinueEntry.channel})[0];
            $scope.entryObj.language=$scope.entryObj.channel?$scope.entryObj.channel.language:"";
            $scope.entryObj.program_date = new Date($scope.toBeContinueEntry.program_date);
            $scope.entryObj.category=$scope.entryObj.channel.category_name
            $scope.getAllProgramList($scope.entryObj.channel)
            $scope.entryObj.activity = $scope.toBeContinueEntry.activity
            $scope.entryObj.channel_usage = $scope.toBeContinueEntry.channel_usage
            $timeout(function(){
                $scope.entryObj.program_name=$scope.toBeContinueEntry.program_name//$filter('filter')($scope.programlList, {program_name: $scope.toBeContinueEntry.program_name})[0];
                $scope.getCategoryForStory(JSON.stringify({"program_name":$scope.toBeContinueEntry.program_name}))
                $scope.entryObj.product_name = $filter('filter')($scope.productlList, {movie_name: $scope.toBeContinueEntry.product_name})[0];

                $scope.setplanguageValue(JSON.stringify($scope.entryObj.product_name));
                $scope.getAllSongsList(JSON.stringify($scope.entryObj.product_name))
            },200)


            $timeout(function(){
                $scope.entryObj.songs = $filter('filter')($scope.songsList, {songs: $scope.toBeContinueEntry.songs})[0];
                //$scope.songsList
            },600)

            if($scope.entryId){
                $scope.entryObj.courtesy  =  $scope.toBeContinueEntry.courtesy;
                $scope.entryObj.duration  =  $scope.toBeContinueEntry.duration;
                var startTimes = $scope.toBeContinueEntry.start_time.split(":")
                var endTimes = $scope.toBeContinueEntry.end_time.split(":")
                $scope.startTimeObj.starthour = startTimes[0];
                $scope.startTimeObj.startminutes = startTimes[1];
                $scope.startTimeObj.startsecond = startTimes[2];
                $scope.endTimeObj.endhours = endTimes[0];
                $scope.endTimeObj.endminute = endTimes[1];
                $scope.endTimeObj.endsecond = endTimes[2];
            }

        }
    }
    $scope.getListOfEntries = function(){
        entriesformService.getAllEntries().then(function(res){
            $scope.ListOfEntries = res.data;
        },function(error){
            console.error(error);
        })
    }
    $scope.editEntries = function(id){
        localStorageService.set("entryid",id);
     //   $scope.getEntry(id);
        $state.reload();
       // $state.go("sharpmonitoring.entriesform",{isnew:false})
    }
    $scope.deleteEntries = function(id){
        entriesformService.deleteEntries(id).then(function(res){
            //$scope.ListOfEntries = res.data;
            ngToast.success({
                content: '<div role="alert">Entry Deleted Successfully.</div>'
            });
            $scope.getListOfEntries();
        },function(error){
            console.error(error);
        })
    }
    $scope.toBeContinue1 = function(entryObj){
        localStorageService.set("tobecontinueentryobj",JSON.stringify(entryObj))
        localStorageService.set("istobecontinue",true);
        //$state.go("sharpmonitoring.entriesform");
       // $scope.toBeContinue()
       // $timeout(function)
        $state.reload()
    }
    $scope.getListOfEntries();
  //  $scope.toBeContinue();
    $scope.getAllChannelList();
   // $scope.getAllProgramList();
    $scope.getAllProductList();
   // $scope.getAllSongsList();
    $scope.getAllChannelCategoryList();

    $scope.changeChanelStatus = function(){
        var data = {};
        data.userid = localStorageService.get("currentuserid");
        data.channel_name = $scope.entryObj.channel.channel_name;
        entriesformService.changeEntryStatus(data).then(function(res){
            ngToast.success({
                content: '<div role="alert">Channel Done Successfully.</div>'
            });
        })
    }
})

app.filter('reverse', function() {
    return function(items) {
        return items.slice().reverse();
    };
});

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

app.directive('focusMe', ['$timeout', '$parse', function ($timeout, $parse) {
    return {
        //scope: true,   // optionally create a child scope
        link: function (scope, element, attrs) {
            var model = $parse(attrs.focusMe);
            scope.$watch(model, function (value) {
                console.log('value=', value);
                if (value === true) {
                    $timeout(function () {
                        element[0].focus();
                    });
                }
            });
            // to address @blesh's comment, set attribute value to 'false'
            // on blur event:
            element.bind('blur', function () {
                console.log('blur');
                scope.$apply(model.assign(scope, false));
            });
        }
    };
}]);

app.factory('focus', function($timeout, $window) {
    return function(id) {
        // timeout makes sure that it is invoked after any other event has been triggered.
        // e.g. click events that need to run before the focus or
        // inputs elements that are in a disabled state but are enabled when those events
        // are triggered.
        $timeout(function() {
            var element = $window.document.getElementById(id);
            if(element)
                element.focus();
        });
    };
});