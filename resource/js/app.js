
import Typed from 'typed.js';
import axios from 'axios'
import Noty from 'noty';


var cart_shop = document.querySelectorAll('.add-to-cart');
var cart_Couter= document.getElementById('cardCounter');

function postData (btnData){
            axios.post('/update-cart',btnData).then(res=>{
                    console.log(res)
                    cart_Couter.innerHTML= res.data.totalQty;
                    new Noty({
                    
                      text: 'Order Sucsuss',
                      type:'success',
                      timeout:1000,
                      progressBar:false
                    
                  }).show()

            }).catch(err=>{
              console.log(err,"some error in axios");
            })
}

cart_shop.forEach((btn)=>{
  btn.addEventListener("click",(e)=>{
    let btnData = JSON.parse(btn.dataset.temp);
       postData(btnData);
  })
});

//typed

var typed = new Typed('.hero_text', {
  strings: ["First sentence.", "Second sentence."],
  typeSpeed: 30
});


//navbar 

(function($) {
  $(function() {
    $('nav ul li a:not(:only-child)').click(function(e) {
     

      $(this).siblings('.nav-dropdown').toggle();
 
          $('.dropdown').not($(this).siblings()).hide();
          
          e.stopPropagation();

    });

    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  });
})(jQuery);





