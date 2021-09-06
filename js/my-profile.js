function usuario(){
    let user = JSON.parse(localStorage.getItem('usuario'))
    document.getElementById('menu').innerHTML += '<div class="justify d-flex">'+
                                                 '<img class="foto" src="'+ user.imageUrl + '" />'+
                                                 '<div ><p class="pl-4 pt-3">'+ user.nombre +' <br>  '+ user.getEmail +'</div>'
                                        
                                                    
                                                    
                                                '</div>'
}





document.addEventListener("DOMContentLoaded", function (e) {
	usuario()
});