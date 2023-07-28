const mongoose = require("mongoose");
const Userschema = new mongoose.Schema({
   googleID :
   {
    type : String, 
    required : true,
   }, 
   firstName :
   {
    type : String, 
    required : true,
   }, 
   lastName :
   {
    type : String, 
    default : "",  
   },
   displayName :
   {
    type : String,
    default : "",
    },
    email :
    {
        type : String, 
        required : true, 
        lowercase : true, 
        unique : true,
    }, 
    role :
    {
        type : Number , 
        default : "1",
    }, 
    about :
    {
           type: String, 
           default: "",
    },
    image: {
        type: String,
        default: "",
      },
    cover: {
        type: String,
        default: "./img/theme/light/code-1.jpg",
      },
    birthdate :
    {
        type :String, 
        default : "",
    },
    phone : 
    {
        type : String, 
        default : "18uu383",
    }, 
    createdAt :
    {
        type : Number, 
        default : Date.now(),
    }
});
mongoose.model("users" , Userschema);