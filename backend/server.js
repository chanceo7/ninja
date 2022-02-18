const express = require("express")
const app = express();
const cors = require('cors')
const port = 8000;
app.use(express.json(), express.urlencoded({extended:true}), cors())

require("./server/config/mongoose.config")
require("./server/routes/pirate.routes")(app)



app.listen(port, ()=>console.log("runnings!!"))