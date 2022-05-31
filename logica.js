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

function hover7(){
    if (clic==true){
        document.getElementById("unidad7c").style.display="grid";
        clic=false;
    }else{
        document.getElementById("unidad7c").style.display="none";
        clic=true
    }
    
};

function hover8(){
    if (clic==true){
        document.getElementById("unidad8c").style.display="grid";
        clic=false;
    }else{
        document.getElementById("unidad8c").style.display="none";
        clic=true
    }
    
};

function hover9(){
    if (clic==true){
        document.getElementById("unidad9c").style.display="grid";
        clic=false;
    }else{
        document.getElementById("unidad9c").style.display="none";
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
*/