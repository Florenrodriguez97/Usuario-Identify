let fs = require('fs');
​
let registroLogin = {
    archivo : './usuarios.json',
    leerJSON: function(){
        let listaDeUsuariosJSON = fs.readFileSync(this.archivo, 'utf-8');
        let listaUsuarios = JSON.parse(listaDeUsuariosJSON);
​
        return listaUsuarios;
​
    },
    guardarJSON: function(info) {
        let usuariosActualizados = JSON.stringify(info);
        fs.writeFileSync(this.archivo, usuariosActualizados, 'utf-8');
    },
    registro : function(usuarioAgregar,mailAgregar,contraseñaAgregar) {
        let listaUsuarios = this.leerJSON();
        let existe = false;
        listaUsuarios.forEach(usuario =>{
            if(usuario.mail == mailAgregar){
                existe = true;
            }    
        })
            if(existe){
                console.log('Ingreso un mail registrado, intentar nuevamente');
            }else{
                let nuevoUsuario = {
                nombre : usuarioAgregar,
                mail : mailAgregar,
                contraseña : contraseñaAgregar
                }
            listaUsuarios.push(nuevoUsuario);
​
            this.guardarJSON(listaUsuarios);
            return console.log('Usuario registrado');
            }
    },
    login : function(mail,contraseña){
        let listaUsuarios = this.leerJSON();
        let mensaje;
        listaUsuarios.forEach(usuario => {
            if(usuario.mail == mail && usuario.contraseña == contraseña){
                mensaje = ' Bienvenido ' + usuario.nombre;
            }else{
                mensaje = 'El usuario no existe';
            }
        });
        return console.log(mensaje);
​
    },
    eliminar : function(nombre, mail, contraseña){
        let listaUsuarios = this.leerJSON();
        let listaActualizada;
        let msg;
        listaUsuarios.forEach(usuario => {
        if(usuario.nombre == nombre && usuario.mail == mail && usuario.contraseña == contraseña){        
            listaActualizada = listaUsuarios.filter(user =>{
                return user != usuario
            })
        this.guardarJSON(listaActualizada);
        }else{
        msg = 'Datos erroneos';
        }       
    });
    },
​
}
​
module.exports = registroLogin;