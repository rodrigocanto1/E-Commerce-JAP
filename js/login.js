//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
});
function verificar(){
    let user = document.getElementById("user");
    let pass = document.getElementById("pass");
    let msj = document.getElementById ("msj");
    let usuario = {};
   
    if ( user.value.trim() ==='' || pass.value.trim()==='' ){

        user.classList.add("isInvalid"); 
        msj.innerHTML="Dato requerido";
        msj.classList.add("isInvalid");
        msj.style.color="red";
        msj.style.display="block";            
    
    }
    else{
        
        location.href="index.html";

        usuario.nombre = user.value;
        usuario.estado = "conectado";

        localStorage.setItem('usuario',JSON.stringify(usuario));
        sessionStorage.setItem('usuario',JSON.stringify(usuario));
    }
}


document.addEventListener('DOMContentLoaded', ()=>{
    let usuario = JSON.parse( localStorage.getItem("usuario"));
    if (usuario.estado=='conectado'){
        location.href="index.html";
    }
    
});
