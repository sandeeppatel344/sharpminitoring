/**
 * Created by sandeep on 12/7/2016.
 */
app.controller("productCtrl",function($scope,$stateParams,$state,ngToast,productModel,entriesformService,$timeout,productService,localStorageService){

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
     var _this = this;
    this.modelObj = productModel;
    $scope.productObj = new this.modelObj.productData();
    $scope.saveProduct = function(valid){
        if(valid){
            $scope.productObj.created_by = localStorageService.get("currentuserid");
        productService.saveProduct($scope.productObj).then(function(res){
            console.log(res)
                $scope.isshowmsg = false;
            ngToast.success({
                content: '<div role="alert">Product Added Successfully.</div>'
            });
            $state.reload();
            $timeout(function(){
                $scope.productObj = angular.copy(new _this.modelObj.productData());
                $scope.productForm.$setPristine();
                $scope.productForm.$setUntouched();

          },500)
            
        },function(error){
            ngToast.danger({
                content: '<div role="alert">Error in Add Product Try again</div>'
            });
            console.error(error);
        })
    }
    }

    $scope.editData = function(id){
        productService.editProduct(id).then(function(res){
            console.log(res)
            $scope.productObj.editData(res.data[0]);
        },function(error){
            console.error(error);
        })
    }
    $scope.productId = localStorageService.get("productid");

    if($scope.productId){
        $scope.editData($scope.productId);
        $scope.isshowUpdate = false;
    }else{
        $scope.isshowUpdate = true;
    }

    $scope.updateProduct = function(valid){
        if(valid){
        $scope.productObj.updated_by = localStorageService.get("currentuserid");
        productService.updateProduct($scope.productObj).then(function(res){
            console.log(res)
            ngToast.success({
                content: '<div role="alert">Product Updated Successfully.</div>'
            });
           // $scope.productObj = new this.modelObj.productData();
        },function(error){
            ngToast.danger({
                content: '<div role="alert">Error in Update Product Try again</div>'
            });
            console.error(error);
        })
    }
    }

    $scope.getMovieList = function(name){
productService.getMovieList(name).then(function(res){
    $scope.movieList = res.data;
})
    }

    $scope.getAllSongsList = function(productname){
        productname = JSON.parse(productname);
        if(productname.movie_name=='New'){
            $scope.isShowText = true
            $scope.productObj.movie_name = "";
        }else{
            $scope.isShowText = false;
        }

        productname = JSON.parse(productname);
        entriesformService.getSongsList(productname.movie_name).then(function(res){
            $scope.songsList = res.data;
        },function(error){
            console.error(error);
        })
    }

    $scope.getAllProductList = function(){
        entriesformService.getProductList().then(function(res){
            $scope.productlList = res.data;
            $scope.productlList.unshift({movie_name:"New"})
            $timeout(function(){
                $scope.toBeContinue();
            })
        },function(error){
            console.error(error);
        })
    }
    $scope.getAllProductList();
})



app.directive('formAutofillFix', function() {
    return function(scope, elem, attrs) {
        // Fixes Chrome bug: https://groups.google.com/forum/#!topic/angular/6NlucSskQjY
        elem.prop('method', 'POST');

        // Fix autofill issues where Angular doesn't know about autofilled inputs
        if(attrs.ngSubmit) {
            setTimeout(function() {
                elem.unbind('submit').submit(function(e) {
                    e.preventDefault();
                    elem.find('input, textarea, select').trigger('input').trigger('change').trigger('keydown');
                    scope.$apply(attrs.ngSubmit);
                });
            }, 0);
        }
    };
});
