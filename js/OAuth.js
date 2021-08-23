function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    if (profile) {
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());
        const usuario = {nombre: profile.getName(), estado: 'conectado'};

        
        localStorage.setItem('usuario',JSON.stringify(usuario));
        sessionStorage.setItem('usuario',JSON.stringify(usuario));
        location.href="/index.html";
    }
   
}