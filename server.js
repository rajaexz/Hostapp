const express= require('express');
const app = express();
const path = require('path');
const ejs = require("ejs")
const expressLayouts =require('express-ejs-layouts');

const PORT = process.env.PORT  || 3000;



app.use(express.static('public'));
app.use(expressLayouts);
app.set('views' , path.join(__dirname,"./resource/views"))
app.set('view engine', 'ejs');


app.get("/",(req,res)=>{
    res.render("home");
});
app.get('/order',(req,res)=>{
  res.render('customar/some_item');
})
app.get('/card',(req,res)=>{
    res.render('customar/card')
    })
//auth login
    app.get('/register',(req,res)=>{
        res.render('auth/singup')
        })
        // auth register
        app.get('/login',(req,res)=>{
            res.render('auth/login');
            })
        
    
app.listen(PORT ,()=>{
    console.log('server is working ',`${PORT}`);
});
