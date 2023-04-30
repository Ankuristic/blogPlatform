const mongoose =require('mongoose');
const blogSchema = mongoose.Schema({
   
    title:{
        type: String,
    },

    author:{
        type:String
    },


    content:{
        type:String
    },

    timeStamp:{
         type:String
    }

    

   //   vote:{
   //      type:boolean

   //   }

})

var blogdata=mongoose.model('blogdata',blogSchema);
console.log("blogdata", blogdata);
module.exports= blogdata;