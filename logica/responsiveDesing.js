

   /*               codigo para tamaño de celular, cuando se presiona el banner 2 (seleccion de seccion)         */
        /*se cargan los temas en el div */
        let seleccion=0;


        function seleccioncel1(){
            seleccion=1;
            switchh();
        }
        
        function seleccioncel2(){
            seleccion=2;
            switchh();
        }
        
        
        function seleccioncel3(){
            seleccion=3;
            switchh();
        }
        
        function switchh(){
            
        switch(seleccion){
            case 1:
                document.getElementById("seccioncel_intro").style.backgroundColor="rgba(2, 2, 2,0.4)";
                document.getElementById("seccioncel_fundamentos").style.backgroundColor="rgba(2, 2, 2,0.0)";
                document.getElementById("seccioncel_poo").style.backgroundColor="rgba(2, 2, 2,0.0)";
        
                document.getElementById("ListTema1").style.display="flex";
                document.getElementById("ListTema2").style.display="none";
                document.getElementById("ListTema3").style.display="none";
                break;
                
            case 2:
                document.getElementById("seccioncel_intro").style.backgroundColor="rgba(2, 2, 2,0.0)";
                document.getElementById("seccioncel_fundamentos").style.backgroundColor="rgba(2, 2, 2,0.4)";
                document.getElementById("seccioncel_poo").style.backgroundColor="rgba(2, 2, 2,0.0)";
        
                
                document.getElementById("ListTema1").style.display="none";
                document.getElementById("ListTema3").style.display="none";
                document.getElementById("ListTema2").style.display="flex";
                break;
                
            case 3:
                document.getElementById("seccioncel_intro").style.backgroundColor="rgba(2, 2, 2,0.0)";
                document.getElementById("seccioncel_fundamentos").style.backgroundColor="rgba(2, 2, 2,0.0)";
                document.getElementById("seccioncel_poo").style.backgroundColor="rgba(2, 2, 2,0.4)";
        
                
                document.getElementById("ListTema2").style.display="none";
                document.getElementById("ListTema1").style.display="none";
                document.getElementById("ListTema3").style.display="flex";
                break;
        }
        }
        
        
        /*-------------------------------------optimización MENU desplegable-----320px------------------ */
        
        var clicmenu= true;
        
        function funtionmenu(){
        
            if(window.innerWidth<=570){
                
                if(clicmenu==false){
        
                
                    document.getElementById("menunavcel").style.display="flex";
                    
                    document.getElementById("desarrollo").style.marginTop="1rem";
            
                    
                    clicmenu= true;
                }else{
                    
                    
                    document.getElementById("menunavcel").style.display="none";
                    
                    document.getElementById("desarrollo").style.marginTop="0rem";
            
                    
                    clicmenu= false;
                }
            }else{
                console.log("no se puede");
            }
        
            
        
        
        }
        
        /*.......................optimizacion de ventana.......................*/ 
        /*al cambiar el tamaño de la ventana se ejecuta la función */
        
        window.onresize = function(){
            
                document.getElementById("menunavcel").style.display="none";
        
                if(window.innerWidth>=1000){
                    document.getElementById("desarrollo").style.marginTop="0rem";
                }else if(window.innerWidth<=1000&&window.innerWidth>=570){
                    document.getElementById("desarrollo").style.marginTop="1rem";
                    
                }
                
                
            
            
            };
        
        
        /*-------------------------------------optimización ventana-- 500--1000--------------------- 
        window.onresize = function(){
        
            var anchoVentana = window.innerWidth;
            console.log(anchoVentana)
            
            if(anchoVentana < 500 ){
            
                document.getElementById("nav").style.height="3rem";
                document.getElementById("header").style.height="3rem";
                document.getElementById("menunav").style.display="none";
        
          
                    
            };
            
            if(anchoVentana > 500 && anchoVentana < 1000){
            
                document.getElementById("divlogo").style.display="inline";
                document.getElementById("menunav").style.display="inline";
                document.getElementById("contenidos").style.display="none";
                document.getElementById("header").style.height="3rem";
                
        
                
                    
           };
          
        
        }
        */
        