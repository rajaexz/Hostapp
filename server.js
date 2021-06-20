require('dotenv').config()
const express= require('express'),
 app = express(),
 path = require('path'),
 ejs = require("ejs"),
 expressLayouts =require('express-ejs-layouts'),
 PORT = process.env.PORT  || 3000,
  mongoose = require('mongoose'),
session =require('express-session'),
 flash = require('express-flash'),
 MongoStore= require('connect-mongo');
 

//mongoose 
mongoose.connect(process.env.MCURL, 
{useNewUrlParser: true,
useCreateIndex: true,
useUnifiedTopology:true,
useFindAndModify:true
}).catch(err => handleError(err)).then(res =>{
    console.log("connected")
})
//session 
app.use(session({
    secret: process.env.COOKIE_KEY,
    resave: false,
    saveUninitialized: true,
        cookie: { maxage: 1000 * 60 * 60 * 24},
     store: MongoStore.create({
        mongoUrl: process.env.MCURL,
        ttl:  1000 * 60 * 60 * 24
     })
  }))
app.use(flash());


app.use(express.static('public'));
app.use(expressLayouts);
app.set('views' , path.join(__dirname,"./resource/views"))
app.set('view engine', 'ejs');

var connection = mongoose.connection;


connection.once('open',()=>{
    console.log("database is conceted");
}).catch(err=> handleError(err));


require('./routes/web')(app); // funxtion calling system in module


app.listen( PORT ,()=>{
    console.log('server is working ',`${PORT}`);
});



console.log();