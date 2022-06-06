/*imagen logo, cambiamos el logo al hacer click*/

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
              

