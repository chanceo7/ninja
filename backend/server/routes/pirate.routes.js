const pirateController = require("../controllers/pirate.controller")


module.exports=(app)=>{
    app.get("/api/pirate", pirateController.findAll)
    app.post("/api/pirate", pirateController.createOne)
    app.delete("/api/pirate/:_id/delete", pirateController.deleteOne)
    app.patch("/api/pirate/:_id/update", pirateController.editOne);
    app.patch("/api/pirate/:_id/increament", pirateController.updateOne);
    app.get("/api/pirate/:_id/getone", pirateController.getOne)
}