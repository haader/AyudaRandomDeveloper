clic=true;
function hover(){
    

if (clic==true){
    document.getElementById("unidad1c").style.display="grid";
    clic=false;
}else{
    document.getElementById("unidad1c").style.display="none";
    clic=true;
}

};

function hover2(){
    if (clic==true){
        document.getElementById("unidad2c").style.display="grid";
        clic=false;
    }else{
        document.getElementById("unidad2c").style.display="none";
        clic=true
    }
    
};

function hover3(){
    if (clic==true){
        document.getElementById("unidad3c").style.display="grid";
        clic=false;
    }else{
        document.getElementById("unidad3c").style.display="none";
        clic=true
    }
    
};

function hover4(){
    if (clic==true){
        document.getElementById("unidad4c").style.display="grid";
        clic=false;
    }else{
        document.getElementById("unidad4c").style.display="none";
        clic=true
    }
    
};
function hover5(){
    if (clic==true){
        document.getElementById("unidad5c").style.display="grid";
        clic=false;
    }else{
        document.getElementById("unidad5c").style.display="none";
        clic=true
    }
        
};
function hover6(){
    if (clic==true){
        document.getElementById("unidad6c").style.display="grid";
        clic=false;
    }else{
        document.getElementById("unidad6c").style.display="none";
        clic=true
    }
    
};

function hoverb(){
    if (clic==true){
        document.getElementById("bibliografiac").style.display="grid";
        clic=false;
    }else{
        document.getElementById("bibliografiac").style.display="none";
        clic=true
    }
    
};

/*-------------------------------------optimización ventana-- 500--1000--------------------- */
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
/*-------------------------------------optimización menu desplegable-----320px------------------ */

var clicmenu= 1

function funtionmenu(){

    if(clicmenu==1){

        document.getElementById("header").style.height="5rem";
        document.getElementById("nav").style.height="5rem";
        document.getElementById("menunav").style.display="block";
        document.getElementById("contenidos").style.display="block";
        document.getElementById("desarrollo").style.marginTop="2rem";

        
        clicmenu= clicmenu + 1;
    }else{
        
        document.getElementById("header").style.height="3rem";
        document.getElementById("nav").style.height="3rem";
        document.getElementById("menunav").style.display="none";
        document.getElementById("contenidos").style.display="none";
        document.getElementById("desarrollo").style.marginTop="0rem";

        
        clicmenu= 1;
    }


}

