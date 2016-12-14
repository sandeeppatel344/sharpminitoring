/**
 * Created by sandeep on 12/7/2016.
 */
app.controller("registrationCtrl",function($scope,registrationModel,$stateParams,registerService){

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
    $scope.currentdate = new Date();
     var _this = this;
    this.modelObj = registrationModel;
    $scope.regObj = new this.modelObj.registrationData();
    $scope.registration =function(valid){
        if(valid){
        $scope.regObj.created_by = localStorageService.get("currentuserid");
        registerService.saveUser($scope.regObj).then(function(res){
            console.log(res);
              $scope.regObj = new _this.modelObj.registrationData();
        },function(error){
            console.error(error)
        })
    }
    }

     $scope.editData = function(id){
        registerService.editRegister(id).then(function(res){
            console.log(res)
            $scope.regObj.editData(res.data[0]);

        },function(error){
            console.error(error);
        })
    }
    $scope.registerId = $stateParams.id?$stateParams.id:localStorageService.get("registerid");

    if($scope.registerId){
        $scope.editData($scope.registerId);
        $scope.isshowUpdate = false;
    }else{
        $scope.isshowUpdate = true;
    }

    $scope.updateChannel = function(valid){
        if(valid){
            $scope.regObj.updated_by = localStorageService.get("currentuserid");
        registerService.updateRegister($scope.regObj).then(function(res){
            console.log(res)
        },function(error){
            console.error(error);
        })
    }
    }
})