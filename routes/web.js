const homeController =require('../app/http/controller/homeController');
const authController = require('../app/http/controller/authController');
const cartAController = require('../app/http/controller/customar/cartcontroller')

 let = demo = function initRoutes(app){
    app.get("/",homeController().homeRautes);
    
    app.get('/orderempty',cartAController().emptyRautes)

     app.get('/cart',cartAController().cartRoutes)
  //auth login
     app.get('/register',authController().registerRautes)
          // auth register
     app.get('/login',authController().loginRoutes)
    
}

module.exports = demo;
