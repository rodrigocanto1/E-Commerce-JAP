//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
  let usuario = JSON.parse( localStorage.getItem("usuario"));
    if (usuario.email != null){
        perfilCargado = "";
        perfilCargado = `<div class="row">Datos del perfil
        </div>
        <div class="row">
          <!-- imagen -->
          <div class="col-sm-5 card border-info mb-3">
          <h3 class="text-center nameUser">${usuario.nombre}</h3>
            <div class="img-fluid">
              <img class="profile-img w-100" id="profileImage" src="${usuario.imagen}" alt="Card image cap">
              <div>
                <input type="file" class="fileInput" onchange="previewFile()">
                </div>
              <br>
              <br>
            </div>
          </div>
          <!-- datos del usuario -->
          <div class="col-sm-7 card border-info mb-3">
            <div class="card-body text-info center">
              <div class="row">
                <div class="col-sm-3"> Usuario </div><div class="col-sm-9 mb-3"><input id="usernamePerfil" type="text" style="width: 80%;" disabled><button class="edit-camp" onclick="habilitar('usernamePerfil');"><i class="fas fa-edit edit"></i></button></div>
              </div>
              <div class="row">
                <div class="col-sm-3"> Contraseña </div><div class="col-sm-9 mb-3"><input id="passwordPerfil" type="password" style="width: 80%;" disabled><button class="edit-camp" onclick="habilitar('passwordPerfil');"><i class="fas fa-edit edit"></i></button></div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3"> Nombre </div><div class="col-sm-9 mb-3"><input id="nombrePerfil" type="text" placeholder="${usuario.nombre}" style="width: 80%;" disabled><button class="edit-camp" onclick="habilitar('nombrePerfil');"><i class="fas fa-edit edit"></i></button></div>
              </div>
              <div class="row">
                <div class="col-sm-3"> Apellido </div><div class="col-sm-9 mb-3"><input id="apellidoPerfil" type="text" placeholder="${usuario.apellido}" style="width: 80%;" disabled><button class="edit-camp" onclick="habilitar('apellidoPerfil');"><i class="fas fa-edit edit"></i></button></div>
              </div>
              <div class="row">
                <div class="col-sm-3"> Email </div><div class="col-sm-9 mb-3"><input id="emailPerfil" type="email" placeholder="${usuario.getEEmail}" style="width: 80%;" disabled><button class="edit-camp" onclick="habilitar('emailPerfil');"><i class="fas fa-edit edit"></i></button></div>
              </div>
              <div class="row">
                <div class="col-sm-3"> Edad </div><div class="col-sm-9 mb-3"><input id="edadPerfil" type="number" placeholder="${usuario.edad}" style="width: 80%;" disabled><button class="edit-camp" onclick="habilitar('edadPerfil');"><i class="fas fa-edit edit"></i></button></div>
              </div>
              <div class="row">
                <div class="col-sm-3"> Telefono </div><div class="col-sm-9 mb-3"><input id="telefonoPerfil" type="tel" placeholder="${usuario.telefono}" style="width: 80%;" disabled><button class="edit-camp" onclick="habilitar('telefonoPerfil');"><i class="fas fa-edit edit"></i></button></div>
              </div>
              <div class="row">
                <div class="col-sm-12"><button type="button" class="btn btn-info centerButton" style="width: 90%;" onclick="guardarDatos();">Guardar cambios</button></div>
              </div>
            </div>  
          </div>
        </div>`

        document.getElementById("perfil").innerHTML= perfilCargado
        cargarDatos();
    }else{
      perfilCargado = "";
      perfilCargado =`<div class="row">Configura tu perfil
      </div>
      <div class="row">
        
        <div class="col-sm-5 card border-info mb-3">
        <h3 class="text-center nameUser">${usuario.nombre}</h3>
          <div class="img-fluid">
            <img class="profile-img w-100" id="profileImage" src="${usuario.imageUrl}" alt="Card image cap">
            <div>
                <input type="file" class="fileInput" onchange="previewFile()">
                </div>
            <br>
            <br>
          </div>
        </div>
        <!-- datos del usuario -->
        <div class="col-sm-7 card border-info mb-3">
          <div class="card-body text-info center">
            <div class="row">
              <div class="col-sm-3"> Usuario </div><div class="col-sm-9 mb-3"><input id="usernamePerfil" type="text" style="width: 90%;" disabled></div>
            </div>
            <div class="row">
              <div class="col-sm-3"> Contraseña </div><div class="col-sm-9 mb-3"><input id="passwordPerfil" type="password" style="width: 90%;" disabled></div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3"> Nombre </div><div class="col-sm-9 mb-3"><input id="nombrePerfil" type="text" placeholder="Ingrese su nombre" style="width: 90%;"></div>
            </div>
            <div class="row">
              <div class="col-sm-3"> Apellido </div><div class="col-sm-9 mb-3"><input id="apellidoPerfil" type="text" placeholder="Ingrese su apellido" style="width: 90%;"></div>
            </div>
            <div class="row">
              <div class="col-sm-3"> Email </div><div class="col-sm-9 mb-3"><input id="emailPerfil" type="email" placeholder="Ingrese un email" style="width: 90%;"></div>
            </div>
            <div class="row">
              <div class="col-sm-3"> Edad </div><div class="col-sm-9 mb-3"><input id="edadPerfil" type="number" placeholder="Edad" style="width: 90%;"></div>
            </div>
            <div class="row">
              <div class="col-sm-3"> Telefono </div><div class="col-sm-9 mb-3"><input id="telefonoPerfil" type="tel" placeholder="000 000 000" style="width: 90%;"></div>
            </div>
            <div class="row">
              <div class="col-sm-12"><button type="button" class="btn btn-info centerButton" style="width: 90%;" onclick="guardarDatos();">Guardar Datos</button></div>
            </div>
          </div>  
        </div>
      </div>`
      document.getElementById("perfil").innerHTML= perfilCargado
    
      document.getElementById("usernamePerfil").value=usuario.username
      document.getElementById("passwordPerfil").value=usuario.password
    }
    
});

let imagenPerfil = "";

function habilitar(id){
  document.getElementById(id).disabled=false;
}

function cargarDatos(){
  let usuario = JSON.parse( localStorage.getItem("usuario"));

  document.getElementById("usernamePerfil").value=usuario.username
  document.getElementById("passwordPerfil").value=usuario.password

  document.getElementById("nombrePerfil").value = usuario.nombre
  document.getElementById("apellidoPerfil").value = usuario.apellido
  document.getElementById("emailPerfil").value = usuario.email
  document.getElementById("edadPerfil").value = usuario.edad 
  document.getElementById("telefonoPerfil").value = usuario.telefono 
  document.getElementById("profileImage").src = usuario.imagen
}
function primerPerfil(){
  let usuario = JSON.parse( localStorage.getItem("usuario"));
  document.getElementById("usernamePerfil").value=usuario.username
  document.getElementById("passwordPerfil").value=usuario.password
}
function guardarDatos(){
  let usuario = JSON.parse( localStorage.getItem("usuario"));

    document.getElementById("usernamePerfil").value=usuario.username
    document.getElementById("passwordPerfil").value=usuario.password

    usuario.nombre = document.getElementById("nombrePerfil").value
    usuario.apellido = document.getElementById("apellidoPerfil").value
    usuario.email = document.getElementById("emailPerfil").value
    usuario.edad = document.getElementById("edadPerfil").value
    usuario.telefono = document.getElementById("telefonoPerfil").value

    localStorage.setItem('usuario',JSON.stringify(usuario));
    location.reload();
}

function previewFile() {
  let usuario = JSON.parse( localStorage.getItem("usuario"));
  let preview = document.getElementById('profileImage');
  let file    = document.querySelector('input[type=file]').files[0];
  let reader  = new FileReader();

  preview.onchange= function(){
    if(this.files[0].size>2097152){
      alert("El tamaño de archivo es muy grande");
      this.value="";
    }
  }
  reader.onloadend = function () {
    preview.src = reader.result; 
    usuario.imagen = reader.result;
    localStorage.setItem('usuario',JSON.stringify(usuario));
    
  }

  if (file) {
    reader.readAsDataURL(file);
   
  } else {
    preview.src = "img/userIcon.png";
  }
}