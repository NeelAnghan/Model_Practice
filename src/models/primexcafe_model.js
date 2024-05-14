const { default: mongoose } = require("mongoose");

const cafe_Schema = new mongoose.Schema({
    cafe_name:{
        type: String,
        trim: true
    },
    cafe_address:{
        type: String,
        trim: true
    },
    cafe_cno:{
        type: Number,
        default: 0 
    },
    cafe_details:{
        type: String,
        trim: true
    }
},{
    timestamps: true,
    versionKey: false 
})

const cafe = mongoose.model("Cafe",cafe_Schema)
module.exports = cafe