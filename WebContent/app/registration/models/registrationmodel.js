/**
 * Created by sandeep on 12/7/2016.
 */
app.factory("registrationModel",function(){
    var modelDefination = function(){
        var self = this;
        this.registrationData = function(){
            this.first_name = "";
            this.last_name = "";
            this.email = "";
            this.username = "";
            this.password = "";
            this.contact = "";
            this.dob = "";
            this.role_id = "";
            

            this.editData = function(data){
                this.id = data.id;
                this.first_name = data.first_name;
                this.last_name = data.last_name;
                this.email = data.email;
                this.username = data.username;
                this.password = data.password;
                this.contact = data.contact;
                this.dob = new Date(data.dob);
            }
        }
    }

    return new modelDefination();
})
