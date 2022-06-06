/*imagen logo*/

hover=true;
function hoverLogo(){
    console.log("funciona");
    if (hover==true){
        document.getElementById("serio").style.display="inline-block";
        hover=false;
    }else{
        document.getElementById("serio").style.display="none";
        hover=true;
    }
    


};
              


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