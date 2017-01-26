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
                this.start_time = ""
                this.end_time = "";
                this.duration = "";
                this.story = "";
                this.language = "";
                this.product_language = "";
                this.music_company = "";
                this.courtesy = "";
                this.program_date = new Date();
                this.channel_status = "";

			this.editData = function(data){
                this.id = data.id
                this.channel = {channel_name:data.channel,id:""};
                this.program_name = data.program_name;
                this.songs = data.songs;
                this.product_name = data.program_name;
                this.category = {category_name:data.category};
                this.channel_usage = data.channel_usage;
                this.activity = data.activity;
                this.end_time = data.end_time;
                this.start_time = data.start_time;
                this.duration = data.duration;
                this.story = data.story;
                this.language = data.language;
                this.product_language = data.product_language;
                this.music_company = data.music_company;
                this.courtesy = data.courtesy;
                this.program_date = data.program_date;
                this.channel_status = data.channel_status;
			}
		}
	}

    return new modelDefinition();
})