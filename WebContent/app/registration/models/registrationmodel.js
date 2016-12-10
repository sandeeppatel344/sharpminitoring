/**
 * Created by sandeep on 12/7/2016.
 */
app.factory("registrationModel",function(){
    var modelDefination = function(){
        var self = this;
        this.registrationData = function(){
            this.first_name = "";
            this.last_name = "";
            this.email_id = "";
            this.user_name = "";
            this.password = "";
            this.contact_no = "";
            this.dob = "";
            this.id = "";

            this.editData = function(data){
                this.id = data.id;
                this.first_name = data.first_name;
                this.last_name = data.last_name;
                this.email_id = data.email_id;
                this.user_name = data.user_name;
                this.password = data.password;
                this.contact_no = data.contact_no;
                this.dob = data.dob;
            }
        }
    }

    return new modelDefination();
})
