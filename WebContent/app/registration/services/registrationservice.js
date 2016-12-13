app.factory("registerService",function($http){
	var obj = {};
	obj.saveUser =function(data){
		return $http.post(userserviceapiurl+"registration/add",data);
	}

	obj.updateRegister = function(){
		return $http.post(userserviceapiurl+"registration/update");
	}

	obj.editRegister = function(id){
		return $http.get(userserviceapiurl+"registration/edit?id="+id);
	}

	obj.deleteRegister = function(id){
		return $http.get(userserviceapiurl+"registration/delete?id="+id);
	}
	obj.getAllRegister = function(){
		return $http.get(userserviceapiurl+"registration/all");
	}
	return obj;
})