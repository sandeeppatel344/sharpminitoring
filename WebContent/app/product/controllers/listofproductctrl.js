/**
 * Created by sandeep on 12/7/2016.
 */
app.controller("listOfProduct",function($scope,productService,DTOptionsBuilder,DTColumnDefBuilder,DTColumnBuilder){
    $scope.productList = [];
    $scope.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers')
    $scope.getProductList = function(){
        productService.getProductList().then(function(res){
           // $scope.dtOptions = DTOptionsBuilder.fromFnPromise([res.data.product]).withPaginationType('full_numbers');
            $scope.productList.push(res.data.product);

        })

    }
    $scope.dtColumns = [
        DTColumnDefBuilder.newColumnDef(0),
        DTColumnDefBuilder.newColumnDef(1),
        DTColumnDefBuilder.newColumnDef(2)
    ];
    $scope.getProductList();
    })
