/**
 * Created by sandeep on 12/6/2016.
 */
app.factory('channelModel',function() {

        var modelDefination = function(){
            var self = this;
            self.channelData = function(){
                var _this = this;
                this.channelName = "";
                this.programName = "";
                this.category = "";
                this.language = "";
                this.channelcategory ="";
                this.editData = function(data){
                    this.channelName = data.channelName;
                    this.programName = data.programName;
                    this.category = data.category;
                    this.language = data.language;
                    this.channelcategory = data.channelcategory;
                }

            }
        }

        return new modelDefination();
    })

