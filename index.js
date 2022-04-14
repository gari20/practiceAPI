var express=require("express");
var app=express();
var port=process.env.PORT||3000;
app.listen(port);
var cors=require("cors");
var bodyparser=require("body-parser");

app.use(cors());
var url=bodyparser.urlencoded({extended:false});
app.use(bodyparser.json());
app.put('/ii',url,function(req,res){
     id1=req.body.id;
    console.log(id1);
    json={name:"garima",id:id1};
    res.send(json);
    
})


