/**
 * Created by sandeep on 12/14/2016.
 */
app.factory("customInterceptor",function($q,cfpLoadingBar){
    var obj = {
        request:function(config){
            return config;
        },
        responseError : function(rejection){
            cfpLoadingBar.complete();
            return $q.reject(rejection);

        }
    }
    return obj;
})
