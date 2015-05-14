$(document).ready(function(){
              $("#design-slides").carousel();
              $("#community-slides").carousel();
               
              $(".scroll").click(function(event){   
                event.preventDefault();
                $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
              });
          });   