const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://TPMultimedia:tpmultimedia@cluster0.ww1lj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useUnifiedTopology : true,
    useNewUrlParser :true,
    useFindAndModify : false
    
})
.then(db => console.log("DB is connected"))
.catch(err => console.log(err));