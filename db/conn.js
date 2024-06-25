const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://utsavjhaa2003:chutiyapa@cluster4.qvro8jo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster4").then(() => {
    console.log("connection succesful")
}).catch((err) => { 
    console.log(err) 
});

