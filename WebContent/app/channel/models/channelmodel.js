/**
 * Created by sandeep on 12/6/2016.
 */
app.factory('channelModel',function() {

        var modelDefination = function(){
            var self = this;
            self.channelData = function(){
                var _this = this;
                this.channel_name = "";
                this.program_name = "";
                this.category = "";
                this.language = "";
                this.channel_category ="";
                this.editData = function(data){
                    this.channel_name = data.channel_name;
                    this.program_name = data.program_name;
                    this.category = data.category;
                    this.language = data.language;
                    this.channel_category = {"name":data.category_name,"id":data.channel_category_id};
                }

            }
        }

        return new modelDefination();
    })

