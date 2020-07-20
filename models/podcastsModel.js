const mongoose  = require('mongoose');
const PodcastSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    subtitle :{
        type: String
    },
    user :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Podcast',PodcastSchema);