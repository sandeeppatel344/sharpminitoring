/**
 * Created by sandeep on 12/7/2016.
 */
app.factory("productModel",function(){
    var modelDefination = function(){
        var self = this;
        self.productData = function(){
            this.movie_name = "";
            this.songs = "";
            this.music_company = "";
            this.product_language = "";
            this.editData = function(data){
                this.id = data.id
                this.movie_name = data.movie_name;
                this.songs = data.songs;
                this.music_company = data.music_company;
                this.product_language = data.product_language;
            }
        }
    }

    return new modelDefination();
})
