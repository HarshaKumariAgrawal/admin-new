const express=require("express");
const path=require("path");
const app=express();
const port=8000;
const staticPath= path.join(__dirname,"/public");
app.use(express.static(staticPath));
app.use(express.urlencoded);
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/admin',{useNewUrlParser:true,useUnifiedTopology:true});
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log("We are connected")
});

app.listen(port,()=>{
    console.log(`listening to the port ${port} `);
});