const homeController =require('../app/http/controller/homeController');
const authController = require('../app/http/controller/authController');
const cartController = require('../app/http/controller/customar/cartcontroller')

 let = demo = function initRoutes(app){
    app.get("/",homeController().homeRautes);
  //auth login
     app.get('/register',authController().registerRautes)
          // auth register
     app.get('/login',authController().loginRoutes)

     app.get('/orderempty',cartController().emptyRautes)

     app.get('/cart',cartController().cartRoutes);

     
      app.post('/update-cart',cartController().updateRoutes)
    
}

module.exports = demo;
