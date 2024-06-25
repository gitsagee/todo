const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/utsavdb").then(() => {
    console.log("connection succesful")
}).catch((err) => { 
    console.log(err) 
});

