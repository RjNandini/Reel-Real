const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
        "mongodb+srv://rajnandinitiwari463:rajnandinitiwari463@cluster0.bl8b9aw.mongodb.net/Reel-Real",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;



// client id : 875055270474-1m3v1bubefk7730hs6im3csrpkt2iatn.apps.googleusercontent.com



// client secret : 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