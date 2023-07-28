const  mongoose   = require("mongoose");
const passport = require("passport"); 
const Googlestrategy = require("passport-google-oauth20").Strategy;
const User = mongoose.model('users');
passport.use(
    new Googlestrategy(
    {
    clientID : "893204045750-gq767753hvmislg7ato27nh7e2dge5ah.apps.googleusercontent.com",
    clientSecret : "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",
    callbackURL : "/auth/google/callback",
    }, 
    async (accessToken , refreshToken , profile , done) => {
        const newUser = {

            googleID : profile.id,
            firstName : profile.name.givenName, 
            lastName : profile.name.familyName,
            displayName : profile.displayName,
            email : profile.emails[0].value,
            image: profile.photos[0].value,
        };

        try{
          let  user = await User.findOne({ googleID : 
             profile.id});
          if(user){
            console.log("exists" , user);
            done(null , user);
          } else{
            user = await User.create(newUser);
             console.log("New" , user);
             done(null , user);
          }
        }catch(error){
            console.log(error);
            done(error);
        }
     }
    )
    );
    passport.serializeUser((user, done) => {
        done(null, user.id);
        console.log(user);
      });
      
      passport.deserializeUser(async (id, done) => {
        try {
          const user = await User.findById(id);
          done(null, user);
        } catch (error) {
          done(error);
        }
      });
