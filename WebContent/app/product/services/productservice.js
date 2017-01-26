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

    obj.editProduct = function(id){
        return $http.get(userserviceapiurl+"product/edit?productid="+id);
    }

    obj.deleteProduct = function(id){
        return $http.get(userserviceapiurl+"product/delete?productid="+id);
    }

    obj.updateProduct = function(data){
        return $http.post(userserviceapiurl+"product/update",data);
    }
    obj.getMovieList=function(name){
        return $http.get(userserviceapiurl+"product/fetchMoviesLike?moviename="+name);
    }
    return obj;
})
