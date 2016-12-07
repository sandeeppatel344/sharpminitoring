/**
 * Created by sandeep on 12/6/2016.
 */
app.factory('channelModel',function() {

        var modelDefination = function(){
            var self = this;
            self.channelData = function(){
                var _this = this;
                this.channelname = "";
                this.programname = "";
                this.category = "";
                this.language = "";
                this.channelcategory ="";
                this.editData = function(data){
                    this.channelname = data.channelname;
                    this.programname = data.programname;
                    this.category = data.category;
                    this.language = data.language;
                    this.channelname = data.channelcategory;
                }

            }
        }

        return new modelDefination();
    })

