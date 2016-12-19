/**
 * Created by sandeep on 12/18/2016.
 */
app.factory("reportsService",function($http){
    var obj = {};
    obj.getUserAndPassword = function(){
        return $http.get(userserviceapiurl+"registration/getUsernameAndPassword")
    }
    obj.getEmployeeWorkingTime = function(filterData){
        return $http.post(userserviceapiurl+"login/usercheckinoutreport"+filterData)
    }

    obj.getRegisteredUser = function(){
        return $http.get(userserviceapiurl+"registration/getRegisteredUsers")
    }
    return obj;
})
