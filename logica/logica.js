/*imagen logo, cambiamos el logo al hacer click*/

let logoclick=true;
function hoverLogo(){
    console.log("funciona");
    if (logoclick==true){
        document.getElementById("click").style.display="inline-block";
        logoclick=false;
    }else{
        document.getElementById("click").style.display="none";
        logoclick=true;
    }
    


};
              

