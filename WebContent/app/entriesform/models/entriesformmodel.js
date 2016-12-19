app.factory("entriesformModel",function(){
	var modelDefinition = function(){
		this.entriesformData = function(){
                this.channel = "";
                this.program_name = "";
                this.songs = "";
                this.product_name = "";
                this.category = "";
                this.channel_usage = "";
                this.activity = "";
                this.end_time = "";
                this.duration = "";
                this.story = "";
                this.language = "";

			this.editData = function(data){
                this.id = data.id
                this.channel = data.channel;
                this.program_name = data.program_name;
                this.songs = data.songs;
                this.product_name = data.program_name;
                this.category = data.category;
                this.channel_usage = data.channel_usage;
                this.activity = data.activity;
                this.end_time = data.end_time;
                this.duration = data.duration;
                this.story = data.story;
                this.language = data.language;
			}
		}
	}

    return new modelDefinition();
})