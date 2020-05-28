const express=require("express");
const app=express();
const bodyParser=require("body-parser");

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
var items=['Pick up Adharcard','Confirming Traintickets','VirtualQueue Confirmation'];

app.get ("/",function(req,res){

    var today=new Date();
    var currentDay=today.getDay();
    var day="";
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


   day= today.toLocaleDateString("en-US", options)
    res.render("list",{kindOfDay:day,addNewItem:items});



});

app.post("/",function(req,res){

    var newItem=req.body.addItems;
    items.push(newItem);
    res.redirect("/");
 
});

app.listen(3000,function(req,res){

    console.log("server hosted on 3000");

});