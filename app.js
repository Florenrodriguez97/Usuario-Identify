const registroLogin = require('./usuarios');

const process = require ('process')

let comando = process.argv[2];
​
switch (comando) {
    case 'listar':
        let usuarios = registroLogin.leerJSON();
        console.log('--------------------------------'); 
        console.log("Lista de Usuarios");
        console.log('--------------------------------'); 
        usuarios.forEach(usuario => {
            console.log('nombre: ' + usuario.nombre + 'mail: ' + usuario.mail + ' contraseña: ' + usuario.contraseña
            );
        })
        break;
    case 'registro':
        let usuarioAgregar = process.argv[3];
        let mailAgregar = process.argv[4];
        let contraseñaAgregar = process.argv[5];
​
        registroLogin.registro(usuarioAgregar,mailAgregar,contraseñaAgregar);
        
​
        break;
    case 'login':
        let mail = process.argv[3];
        let contraseña = process.argv[4];
        registroLogin.login(mail,password);
        break;     
    case 'eliminar':
        let usuarioEliminar = process.argv[3];
        let mailEliminar = process.argv[4];
        let contraseñaEliminar = process.argv[5];
    
        registroLogin.eliminar(usuarioEliminar,mailEliminar,contraseñaEliminar);
    
        console.log('--------------------------------');            
        console.log('Usuario eliminado');
        console.log('--------------------------------');
        break;
    default:
        console.log('Ingresar algun comando');
        break;         
}
