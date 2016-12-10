/**
 * Created by sandeep on 12/7/2016.
 */
app.controller("productCtrl",function($scope,$stateParams,productModel,productService,localStorageService){

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
this.modelObj = productModel;
    $scope.productObj = new this.modelObj.productData();
    $scope.saveProduct = function(){
        productService.saveProduct($scope.productObj).then(function(res){
            console.log(res)
        },function(error){
            console.error(error);
        })
    }

    $scope.editData = function(id){
        productService.editProduct(id).then(function(res){
            console.log(res)
            $scope.productObj.editData(res.data[0]);
        },function(error){
            console.error(error);
        })
    }
    $scope.productId = $stateParams.id?$stateParams.id:localStorageService.get("productid");

    if($scope.productId){
        $scope.editData($scope.productId);
        $scope.isshowUpdate = false;
    }else{
        $scope.isshowUpdate = true;
    }

    $scope.updateProduct = function(){
        productService.updateProduct($scope.productObj).then(function(res){
            console.log(res)
        },function(error){
            console.error(error);
        })
    }
})
