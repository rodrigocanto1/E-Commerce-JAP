let infoArray = [];
 let comentarios = [];
 let mostrar = [];
 let hoy = new Date();
 let fechaActual = (hoy.getFullYear()+"-"+(hoy.getMonth()+1)+"-"+hoy.getDate()+" "+hoy.getHours()+":"+hoy.getMinutes()+":"+hoy.getSeconds());
 let usuario = JSON.parse(localStorage.getItem("usuario"));
 let nombre = usuario.nombre;
 let puntuacion = [];
 let nuevoComentario = [];
 let relacionados = [];
 let productosArray = [];
 
 




function MostrarInfo(producto){
     
	showSpinner();
    let htmlContentToAppend = "";

   
        
       
        htmlContentToAppend += `<div class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-center">                           
            <h1 class="row justify-content-center ">
            ${producto.name} 
            </h1> 
        </div><hr><br>
              
        <div class="row">
            <div class="col">
                <img src="
                ${producto.images[0]} 
                " alt="" class="img-fluid"><hr>
            </div>

            <div class="col">
                <hr><br>
                <div class="d-flex w-100 justify-content-between">
                <p class="mb-1">
                ${producto.description}
                </p>
            </div><hr><br>
            
            <div class="d-flex w-100 justify-content-between">                           
                <small class="text">
                ${producto.soldCount}
                 artículos vendidos</small>
                <h3 class="text-muted">
                ${producto.currency}                 
                ${producto.cost}
                 </h3>
            </div>
        </div>
        
    </div><hr><br>

    <div class="carousel slide" data-ride="carousel" data-interval="1000">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="
                ${producto.images[1]} 
                " alt="" class="img-thumbnail">
                <div class="carousel-caption d-none d-md-block"></div>
            </div>

            <div class="carousel-item">
                <img class="d-block w-100"  src="
                ${producto.images[2]}
                " alt="" class="img-thumbnail">
                <div class="carousel-caption d-none d-md-block"></div>
            </div>
    
            <div class="carousel-item">
                <img class="d-block w-100" src="
                ${producto.images[3]} 
                " alt="" class="img-thumbnail">
                <div class="carousel-caption d-none d-md-block"></div>
            </div>
    
            <div class="carousel-item">
                <img class="d-block w-100" src="
                ${producto.images[4]}
                " alt="" class="img-thumbnail">
                <div class="carousel-caption d-none d-md-block"></div>
            </div>
        </div>
    </div>

   
            `;
    
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    
      
	hideSpinner();
    
}

function mostrarComentarios(){    
   let mostrar = ""
    for(coment of comentarios){
        puntos= parseInt(coment.score);
        mostrar +=`
        <div class="list-group-item list-group-item-action">
            <div class="justify-content-center"> 
                <h4>${coment.user}</h4>
                <div id="puntuacion" style="margin-bottom: 10px"> ${mostrarEstrellas(puntos)}</div>
                <p class="">${coment.description}</p>
                <small class="text">${coment.dateTime}</small>
            </div>
        </div> `;       
    }     
    document.getElementById("comentarios").innerHTML = mostrar;
    

}

function mostrarEstrellas(puntos){
    
    let estrellas = "";
    for(let i=1; i<6; i++){
        if(i<=puntos){
            estrellas += `<i class='fas fa-star' style='color:orange'></i>`;
        }
        else{
            estrellas += `<i class='far fa-star' style='color:gray'></i>`;
        }
    }
    return estrellas;
}

function comentar(){ 
   
    coment = document.getElementById("texto-comentario").value;
    for(let i=1; i<6; i++){
        if(document.getElementById(i).checked){
            puntuacion=document.getElementById(i).value;
        }
    
    }
    
    
    comentarios.push({score:puntuacion, description:coment, user:nombre, dateTime:fechaActual});
    mostrarComentarios(comentarios);

    
}
function vaciarcomentarios() {
    comentarios.length = 0;
}
function productosRelacionados(array){
    array.forEach(rel => {
    
      relacionados += `
      
        <a class="relacionados"><div  class="justify-content-center" style="width: 500px;">
        
          <div class="card justify-content-center" style="width: 500px;">
            <img src="${productosArray[rel].imgSrc}" style="width: 500px;">
          </div>

          <div class="row justify-content-center" style="width: 500px; margin-top:15px">
            <h3 class="text-muted justify-content-center">${productosArray[rel].name}</h3>                
          </div>

        </div></a>
        <hr>
        `;

    });
    document.getElementById("productos-relacionados").innerHTML = relacionados;
}




document.addEventListener("DOMContentLoaded", function(e){
	getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            
            infoArray = resultObj.data;
            MostrarInfo(infoArray);
            
            
        }
    });
    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
          productosArray = resultObj.data;
          productosRelacionados(infoArray.relatedProducts);
        }
      });
});
getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
    if (resultObj.status === "ok") {
      comentarios = resultObj.data;
    }
    mostrarComentarios(comentarios)
});
