const { default: mongoose } = require("mongoose")

const connectDB = () => {
    mongoose.connect("mongodb+srv://neelanghan:Neel@810@mycluster18.kpyhhpa.mongodb.net/")
    .then(()=>{
        console.log("Database has been succesfully connected !!!!");
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = connectDB;