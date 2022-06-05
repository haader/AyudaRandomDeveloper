/*imagen logo*/

hover=true;
function hoverLogo(){

    if (hover==true){
        document.getElementById("serio").style.display="inline-block";
        hover=false;
    }else{
        document.getElementById("serio").style.display="none";
        hover=true;
    }
    


};
                /*Codigo para aparecer y desaparecer las listas*/
clic=true;
function clickA1(){
    

if (clic==true){
    document.getElementById("unidad1c").style.display="grid";
    clic=false;
}else{
    document.getElementById("unidad1c").style.display="none";
    clic=true;
}

};

function clickA2(){
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

function clickA4(){
    if (clic==true){
        document.getElementById("tipodedatos").style.display="grid";
        clic=false;
    }else{
        document.getElementById("tipodedatos").style.display="none";
        clic=true
    }
    
};
function clickB1(){
    if (clic==true){
        document.getElementById("if").style.display="grid";
        clic=false;
    }else{
        document.getElementById("if").style.display="none";
        clic=true
    }
        
};
function clickB2(){
    if (clic==true){
        document.getElementById("Switch").style.display="grid";
        clic=false;
    }else{
        document.getElementById("Switch").style.display="none";
        clic=true
    }
    
};

function clickB3(){
    if (clic==true){
        document.getElementById("While").style.display="grid";
        clic=false;
    }else{
        document.getElementById("While").style.display="none";
        clic=true
    }
    
};

function clickB4(){
    if (clic==true){
        document.getElementById("Do_while").style.display="grid";
        clic=false;
    }else{
        document.getElementById("Do_while").style.display="none";
        clic=true
    }
    
};

function clickB5(){
    if (clic==true){
        document.getElementById("for").style.display="grid";
        clic=false;
    }else{
        document.getElementById("for").style.display="none";
        clic=true
    }
    
};

function clickB6(){
    if (clic==true){
        document.getElementById("Array").style.display="grid";
        clic=false;
    }else{
        document.getElementById("Array").style.display="none";
        clic=true
    }
    
};



function clickB7(){
    if (clic==true){
        document.getElementById("salidas_de_bucles").style.display="grid";
        clic=false;
    }else{
        document.getElementById("salidas_de_bucles").style.display="none";
        clic=true
    }
    
};

/*seccionC POO */


function clickC1(){
    if (clic==true){
    document.getElementById("Objetos").style.display="grid";
    clic=false;
   }else{
   document.getElementById("Objetos").style.display="none";
    clic=true;}
   };
    function clickC2(){
    if (clic==true){
    document.getElementById("Clases").style.display="grid";
    clic=false;
   }else{
   document.getElementById("Clases").style.display="none";
    clic=true;}
   };
    function clickC3(){
    if (clic==true){
    document.getElementById("especificadores de accesos").style.display="grid";
    clic=false;
   }else{
   document.getElementById("especificadores de accesos").style.display="none";
    clic=true;}
   };
    function clickC4(){
    if (clic==true){
    document.getElementById("creación de clases").style.display="grid";
    clic=false;
   }else{
   document.getElementById("creación de clases").style.display="none";
    clic=true;}
   };
    function clickC5(){
    if (clic==true){
    document.getElementById("metodos y propiedades genericas").style.display="grid";
    clic=false;
   }else{
   document.getElementById("metodos y propiedades genericas").style.display="none";
    clic=true;}
   };
    function clickC6(){
    if (clic==true){
    document.getElementById("el metodo main").style.display="grid";
    clic=false;
   }else{
   document.getElementById("el metodo main").style.display="none";
    clic=true;}
   };
    function clickC7(){
    if (clic==true){
    document.getElementById("destrucción de objetos").style.display="grid";
    clic=false;
   }else{
   document.getElementById("destrucción de objetos").style.display="none";
    clic=true;}
   };





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

var clicmenu= 1

function funtionmenu(){

    if(window.innerWidth<=570){
        
        if(clicmenu==1){

        
            document.getElementById("menunavcel").style.display="flex";
            
            document.getElementById("desarrollo").style.marginTop="2rem";
    
            
            clicmenu= clicmenu + 1;
        }else{
            
            
            document.getElementById("menunavcel").style.display="none";
            
            document.getElementById("desarrollo").style.marginTop="0rem";
    
            
            clicmenu= 1;
        }
    }else{
        console.log("no se puede");
    }

    


}

/*.......................optimizacion de ventana.......................*/ 
/*al cambiar el tamaño de la ventana se ejecuta la función */

window.onresize = function(){
    
        document.getElementById("menunavcel").style.display="none";
    
    
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


/*
console.log("<!--armando frontend-->");
console.log("<!--******************-->");
let contador=0;

console.log('<div class="seccion" id="seccion_introduccion"> \n <h4>Introduccioón a JAVA</h4>\n</div>');


console.log("\n");
let introduccion=["Introducción","Instalando NetBeans","Crear un proyecto en NetBeans","Tipo de datos","Imprimir Datos en Consola","Ingresar valores por teclado"];

    introduccion.forEach((elemento)=>{
        contador++;
        console.log('<div class="seccionA" onclick="hoverA'+contador+'()" > \n <ul><li><h4>'+elemento+'</h4></li></ul>\n</div>');

    });
        

console.log('<div class="seccion" id="seccion_Fundamentos"> \n <h4>Fundamentos</h4>\n</div>');   
//ejercicios
console.log("\n");
let Fundamentos=["if","Switch","While","Do while","for","salidas de bucles"];
let FundamentosClass=["if","Switch","While","Do_while","for","salidas_de_bucles"];
    contador=0;
    Fundamentos.forEach((elemento)=>{

        contador++;
        
        
        console.log('<div class="seccionB" onclick="hoverB'+contador+'()" > \n <ul><li><h4>'+elemento+'</h4></li></ul>\n <div class="subSeccion" id="'+FundamentosClass[contador]+'">\n <!--aqui va los ejercicios--> \n</div>\n </div>');
    });

console.log('<div class="seccion" id="seccion_POO"> \n <h4>POO</h4>\n</div>');   

console.log("\n");
let Poo=["Objetos","Clases","especificadores de accesos","creación de clases","metodos y propiedades genericas","el metodo main","destrucción de objetos"];

    contador=0;
    Poo.forEach((elemento)=>{

        contador++;
        console.log('<div class="seccionC" onclick="hoverC'+contador+'()" > \n <ul><li><h4>'+elemento+'</h4></li></ul>\n</div>');

    });


    console.log("<!--******************-->");


console.log("\n");
let Poo=["Objetos","Clases","especificadores de accesos","creación de clases","metodos y propiedades genericas","el metodo main","destrucción de objetos"];
let Poo2=["Objetos","Clases","especificadores_de_accesos","creación_de_clases","metodos_y_propiedades_genericas","el_metodo_main","destrucción_de_objetos"];

    contador=0;
    Poo.forEach((elemento)=>{

        
        console.log('<div class="seccionC" onclick="clickC'+(contador+1)+'()" > \n <ul><li><h4>'+elemento+'</h4></li></ul>\n</div>');
        contador++;
    });

    console.log("************");
    contador=0;
    Poo.forEach((elemento)=>{

        console.log('function clickC'+(contador+1)+'(){\n if (clic==true){\n document.getElementById("'+Poo[contador]+'").style.display="grid";\n clic=false;\n}else{\ndocument.getElementById("'+Poo[contador]+'").style.display="none";\n clic=true;}\n};');
        contador++;
    });
*/