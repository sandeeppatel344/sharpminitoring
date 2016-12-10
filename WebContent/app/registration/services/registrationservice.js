app.factory("registerService",function($http){
	var obj = {};
	obj.saveUser =function(data){
		return $http.post(userserviceapiurl+"registration/add",data);
	}

	obj.updateRegister = function(){
		return $http.post(userserviceapiurl+"");
	}

	obj.editRegister = function(id){
		return $http.get(userserviceapiurl+""+id);
	}

	obj.deleteRegister = function(id){
		return $http.get(userserviceapiurl+""+id);
	}
	return obj;
})