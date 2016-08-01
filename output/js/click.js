$(document).ready(function(){  
          $(".neike-ul li").each(function(){  
              $(this).on('click',function(){
                $(this).addClass('neike-active');
                $(this).siblings().removeClass('neike-active');
              });  
          });  
      });  