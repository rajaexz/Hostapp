const express= require('express');
const app = express();
const path = require('path');
const ejs = require("ejs")
const expressLayouts =require('express-ejs-layouts');

const PORT = process.env.PORT  || 3000;


app.get("/",(req,res)=>{
    res.render("home");
})
app.use(express.static('public'));
app.use(expressLayouts);
app.set('views' , path.join(__dirname,"./resource/views"))
app.set('view engine', 'ejs');




app.listen(PORT ,()=>{
    console.log('server is working ',`${PORT}`);
});