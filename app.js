var express = require("express");
var bodyParser = require("body-parser");
var dbEntry=require("./dbEntry_1.js");
var dbQuery=require("./dbQuery_1.js");

var app= new express();

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

//for Registration
app.post('/',(req, res) => {
        userData=[{
            "name" : req.body.username,
            "password" : req.body.password,
            "package" : req.body.package
        }];
        console.log(userData);
        dbEntry(userData);
        // res.render('userData',{userDetails:userData});
        res.end(`Dear ${req.body.username}, your details have been entered successfully. 
        Thank you for choosing ${req.body.package} package`);
});

//for Login and View
app.post('/view',async (req,res)=>{
    var userDetails= await dbQuery(req.body.username);
    // console.log(userDetails);
    // console.log("after query");
    if(userDetails!=null && req.body.password==userDetails.password){  //to check whether password entered is same as that stored in database
 
        res.render('userData',{userDetails});
        
    }
    else{
        res.status(401).end("Access Denied");
    }
    // var name=userDetails.name;
    // res.render("userData",{name});
})

app.get('/',(req,res)=>{
    res.sendFile("./views/index.html",{root:__dirname});
});
app.get('/forms1',(req,res)=>{
    res.sendFile("./views/forms1.html",{root:__dirname});
});
app.get('/viewdetails',(req,res)=>{
    res.sendFile("./views/viewDetails.html",{root:__dirname});
});



app.listen(3000,()=> console.log("Server up and running on port 3000"));