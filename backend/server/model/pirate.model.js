const mongoose= require("mongoose");

const pirateSchema = new mongoose.Schema({
 
    eyePatch:{
        type:Boolean,
        default: true,    
    },
    pegLeg:{
        type:Boolean,
        default: true,    
    },
    hookHand:{
        type:Boolean,
        default: true,    
    },
    name:{
        type:String,
        required: [true, "name is required"],
        minlength:[2, " you need at least 2 characters"],
    },

    imgUrl:{
        type:String,
        required: [true, "your need a image"],
        minlength:[8, " you need at least 8 characters"],
    },
    treasure:{
        type:Number,
        required:[true, "treasure quantity must be entered"],
        min:[1,"treasure number nust above zero" ]
    },
  
    position:{
        type:String,
        required:[true, "must select a position"],
        enum:['First Mate', 'Quater Master','Boatswain', 'Powder Monkey', 'Capitain']
    },
     
    phrase:{
        type:String,
        required: [true, "please, provide pirate catch phrase"],
        minlength:[3, " you need at least 3 characters"],
    }

},{timestamps:true})

const Pirates = mongoose.model("pirates", pirateSchema)
module.exports=Pirates;
