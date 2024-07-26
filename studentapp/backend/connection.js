var mongoose = require('mongoose')
mongoose.connect('mongodb+srv://fasnavazhikkadavu:Fasna1234@cluster0.lsthmaz.mongodb.net/emp?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
    console.log("db connected")
    })
    .catch((error) => {
    console.log(err)
})
