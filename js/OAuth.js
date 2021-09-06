function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    if (profile) {
        ("ID: " + profile.getId()); // Don't send this directly to your server!
        ('Full Name: ' + profile.getName());
        ('Given Name: ' + profile.getGivenName());
        ('Family Name: ' + profile.getFamilyName());
        ("Image URL: " + profile.getImageUrl());
        ("Email: " + profile.getEmail());
        const usuario = {nombre: profile.getName(), estado: 'conectado', imageUrl : profile.getImageUrl(), getEmail : profile.getEmail(), };

        
        localStorage.setItem('usuario',JSON.stringify(usuario));
        sessionStorage.setItem('usuario',JSON.stringify(usuario));
        location.href="/index.html";
    }
   
}