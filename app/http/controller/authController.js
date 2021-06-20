
function factoryAuth (){
     return {

        registerRautes(req,res){  //routes is key store empty function  
            res.render('auth/register');
                } ,
                   
         loginRoutes(req,res){
            res.render('auth/login')

      },
     }
}

module.exports = factoryAuth;
