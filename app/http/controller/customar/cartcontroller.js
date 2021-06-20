

function factoryCart(){
    return {
        emptyRautes(req,res){  //routes is key store empty function  
            res.render('customar/empty');
                } ,
                cartRoutes(req,res){  //routes is key store empty function  
                    res.render("customar/cart");
                        } 
    }
}

module.exports = factoryCart;