/**
 * Created by sandeep on 12/8/2016.
 */
app.factory("productService",function($http){
    var obj = {};
    obj.saveProduct = function(productdata){
        return $http.post(userserviceapiurl+"product/add",productdata);
    }


    obj.getProductList = function(){
        return $http.get(userserviceapiurl+"product/all");
    }
    return obj;
})
