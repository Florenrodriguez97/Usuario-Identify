

function login (user,password){
    switch (true) {
        case user=="admin" && password=="1235":
            console.log('¡Contraseña incorrecta!');            
            break;
        case user=="adminn"&& password=="1234":
            console.log('Usuario incorrecto');
            break;

        case user=="adminn"&& password=="1233":
            console.log('Usuario y Contraseña incorrectos');
            break;

        case user=="" && password=="":
            console.log('Debe ingresar los datos requeridos');
            break;

        case user=="admin" && password=="1234":
            console.log('Bienvenido a nuestro sitio!!');
            break;
    }


}
login("","");