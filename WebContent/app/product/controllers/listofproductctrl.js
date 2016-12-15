/**
 * Created by sandeep on 12/7/2016.
 */
app.controller("listOfProduct",function($scope,$state,productService,DTOptionsBuilder,DTColumnDefBuilder,DTColumnBuilder,localStorageService){
    $scope.productList = [];
    localStorageService.set("productid","");
    $scope.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers')
    $scope.getProductList = function(){
        productService.getProductList().then(function(res){
           // $scope.dtOptions = DTOptionsBuilder.fromFnPromise([res.data.product]).withPaginationType('full_numbers');
            $scope.productList = res.data;
        })
    }

    $scope.addNewProduct = function(){
        $state.go("sharpmonitoring.product",{isnew:true})
    }

    $scope.editData = function(id){
        localStorageService.set("productid",id);
        $state.go("sharpmonitoring.product",{isnew:false,id:id})
    }


    $scope.deleteData = function(id){

        productService.deleteProduct(id).then(function(res){
            console.log(res)
             $state.reload();
        },function(error){
            console.error(error);
        })
    }

    $scope.getProductList();
    })
