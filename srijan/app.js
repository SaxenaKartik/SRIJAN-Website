var express       = require("express"),
    app           = express(),
    bodyParser    = require("body-parser"),
    methodOverride= require("method-override");
    
app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine", "ejs");
    
app.get("/", function(req,res){
   res.render("homepage"); 
});

app.get("/about", function(req,res){
   res.render("about"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Website active");
});