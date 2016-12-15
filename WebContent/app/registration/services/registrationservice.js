app.factory("registerService",function($http,$filter){
	var obj = {};
	obj.saveUser =function(data){
		data.dob = $filter('date')(data.dob,'yyyy-MM-dd');
		return $http.post(userserviceapiurl+"registration/add",data);
	}

	obj.updateRegister = function(postdata){
		postdata.dob = $filter('date')(postdata.dob,'yyyy-MM-dd');
		return $http.post(userserviceapiurl+"registration/update",postdata);
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
	obj.getAllRole = function(){
		return $http.get(userserviceapiurl+"registration/getRole");
	}
	return obj;
})