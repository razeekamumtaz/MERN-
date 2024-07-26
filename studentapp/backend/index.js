//import

var express = require("express")
//CONECTION IMPORT
require("./connection")
var empMODEL = require("./model/employee")
//cors import
var cors = require("cors")




// initialize
var app = express();



//api creation
app.get('/trail', (req, res) =>
{
    res.send("mssg for the trail")
    
})
//midd
app.use(express.json());
app.use(cors())



//add data
app.post("/add", async (req, res) => {
    try {
        await empMODEL(req.body).save();
        res.send({ message: "data added" })
    } catch (error) {
        console.log(error)
    }
})
app.delete("/remove/:id",async (req, res) => {
    try {
        await empMODEL.findByIdAndDelete(req.params.id)
        res.send({messege:"Data Deleted"})
    } catch (error) {
        
    }
})
app.get("/view",async (req, res) => {
    try {
        var data=await empMODEL.find()
        res.send(data)
    } catch (error) {
        console.log(error)
        
    }
})
app.put("/update/:id", async (req, res) => {
    try {
      var data=  await empMODEL.findByIdAndUpdate(req.params.id, req.body)
        res.send({messege:"updated",data})
    } catch (error) {
        console.log(error)
    }
})




//port set for run the app
app.listen(3004,()=> {
    console.log("port is up")
})
