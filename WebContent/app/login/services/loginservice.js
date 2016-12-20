app.factory("loginService",function($http,localStorageService){
	var obj = {};

	obj.dologin = function(userobj){
		return $http.post(userserviceapiurl+"login/login",userobj)
}
    obj.userLogout = function(){
        var user = {userid:localStorageService.get("currentuserid")}
        return $http.post(userserviceapiurl+"login/logout",user)

    }
	return obj;
})