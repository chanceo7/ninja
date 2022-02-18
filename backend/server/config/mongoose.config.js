const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/pirates", {useNewUrlParser:true, useUnifiedTopology:true })
.then(()=>console.log("server connected"))
.catch((err)=>console("server could not connect", err))

