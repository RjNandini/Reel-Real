//express is used to create your ouw web server
const express = require('express');
 const connectDB = require("./config/db");
 const mongoose = require("mongoose");
 const session =  require("express-session");
 const MongoStore = require('connect-mongo')(session);
const passport = require("passport"); 

require("./models/User");
require("./models/Post");
require("./models/Comment");
 
const app = express();  //////////////express is stored in some variable 
connectDB();

app.set("view engine" , "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(session ({
  secret : "mysecretkey", 
  resave : false,
  saveUninitialized : true,
  store : new MongoStore({mongooseConnection : mongoose.connection})
}));

app.use(passport.initialize());
app.use(passport.session());
require("./config/passport");


app.use("/auth" , require("./routes/auth"));
app.use("/" , require("./routes/index"));
app.use("/", require("./routes/profile"));
app.use("/", require("./routes/post"));
app.use("/", require("./routes/upload"));







app.get("/*", (req, res) => {
  res.render("error-404");
});
app.listen(3000 , () => {    ///there 3000 denotes where you want to run your servr in your device : to access it write localhost:3000
console.log("server is running at host 3000");
});




































































































// rout handler is created to tell the server how to handle the request from the client 
// route consist of path + type of request

// const Post = mongoose.model('posts');
// const testfun = () =>
// {
// Post.create({title : "Nandini" , description: "Sample post"});

// };
// testfun();

// app.listen(3000 , () =>{    ///there 3000 denotes where you want to run your servr in your device : to access it write localhost:3000


//   console.log("server is running at host 3000");

// })// app.get("/" ,  (req, res) => {  //req stands of request and res stands for response a client will get 
// // console.log(req);
// // res.send("<h1>hello </h1>");
// res.render('dashboard');

// });
//  /////nest request
//   app.get('/help' , (req, res) =>{

//    res.send("<h1>ok i will help</h1>");

//   });
//   app.get('/help/create' , (req, res) =>{

//     res.send("<h1>ok help</h1>");
 
//    });

//    //now if some one searches with the name help create vedio then it will throw an error so we can simply give something with the help name 
// //all the request to forwar slash help will be served
//    app.get('/help/*' , (req, res) =>{

//     res.send("<h1>hieeeeeeeee</h1>");
 
//    });










// /// for 404 error we use //always placed at the last . bcz server excute code line  by line ///if website is for maintaineance the you can put this universal request at the starting
//    app.get("*" , (req, res) => {

//     res.send("<h2>not found</h2>")

//   });

// app.listen(3000 , () =>{    ///there 3000 denotes where you want to run your servr in your device : to access it write localhost:3000


//     console.log("server is running at host 3000");
  
//   });

  