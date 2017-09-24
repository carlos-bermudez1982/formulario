var botonFormulario = document.querySelector('#entrar');
var formValidar = document.querySelector('form');

// console.log(formValidar);

botonFormulario.addEventListener('click', function(e) {

	e.preventDefault();
	var x = validarFormulario();
	if (!x=='') {
		alert(x);	
	} else {

	}

	

})

function validarFormulario()  {
	var nombreFormulario = formValidar.getAttribute('name');
	var nombreDivMensaje = document.querySelector("#mensaje-error");
	var nombreDivMsgEnvi = document.querySelector("#mensaje-envio");
	var nombre;
	var cedula;
	var fecha;
	var correo;
	var correo2;
	var usuario;
	var clave;
	var clave2;
	// console.log(formValidar.getAttribute('id'))
	// console.log(nombreDivMensaje);
	// formValidar.preventdefault();
	nombreDivMensaje.setAttribute('style','display: none;');
	if (nombreFormulario=='formRegister') {
		
		// colocar valores a variables pertinentes al formulario
		nombre  = document.forms[nombreFormulario].elements["nombre"];
		cedula  = document.forms[nombreFormulario].elements["cedula"];
		fecha   = document.forms[nombreFormulario].elements["nacimiento"];
		correo  = document.forms[nombreFormulario].elements["correo"];
		correo2 = document.forms[nombreFormulario].elements["correo2"];
		usuario = document.forms[nombreFormulario].elements["usuario"];
		clave   = document.forms[nombreFormulario].elements["clave"];
		clave2  = document.forms[nombreFormulario].elements["clave2"];


		// valiar nombre de la personas que se registra
		if (nombre.value==''){
			nombre.focus();
			nombreDivMensaje.setAttribute('style','display: block');
			return 'Debe colocar su nombre.';
		} else if (RegExp(/[0-9]\S+/).test(nombre.value)) {
			nombre.focus();
			nombreDivMensaje.setAttribute('style','display: block');
			return 'Solo se permiten letras';

		}

		// validar cedula tenga formato correcto
		if (cedula.value=='') {
			cedula.focus();
			nombreDivMensaje.setAttribute('style','display: block');
			return 'Debe ingresar su numero de Cedula';
		} else if (!RegExp(/[1-9]+\.[0-9]{3}\.[0-9]{3}/).test(cedula.value)) {
			cedula.focus();
			nombreDivMensaje.setAttribute('style','display: block');
			return 'La cedula debe incluir hasta 10 caracteres, incluyendo los puntos';
		}

		// validar la fecha
		if (fecha.value=='') {
			fecha.focus();
			nombreDivMensaje.setAttribute('style','display: block');
			return 'Debe Ingresar la fecha de nacimiento';
		} else if (!RegExp(/[0-9]{4}\-[0-9]{2}\-[0-9]{2}/).test(fecha.value)) {
			fecha.focus();
			nombreDivMensaje.setAttribute('style','display: block');
			return 'Debe ingresar un formato de fecha valido dd/mm/aaaa';
		}

		// validar correo
		if (correo.value=='') {
			correo.focus();
			nombreDivMensaje.setAttribute('style','display: block');
			return 'Debe Ingresar el correo electronico';
		} else if (!RegExp(/[A-Za-z0-9]+\@[A-Za-z]+\.[A-Za-z]{3}/).test(correo.value)) {
			correo.focus();
			nombreDivMensaje.setAttribute('style','display: block');
			return 'Solo se permiten direcciones validas (ej. correo@dominio.com)';
		}

		// validar correo
		if (correo2.value=='') {
			correo2.focus();
			nombreDivMensaje.setAttribute('style','display: block');
			return 'Debe Ingresar el correo electronico';
		} else if (!RegExp(/[A-Za-z0-9]+\@[A-Za-z]+\.[A-Za-z]{3}/).test(correo2.value)) {
			correo2.focus();
			nombreDivMensaje.setAttribute('style','display: block');
			return 'Solo se permiten direcciones validas (ej. correo@dominio.com)';
		} else if (correo2.value !== correo.value) {
			correo2.focus();
			nombreDivMensaje.setAttribute('style','display: block');
			return 'No coinciden los dos correos';
		}

		// console.log(usuario.value);
		// validar usuario
		if (usuario.value=='') {
			usuario.focus();
			nombreDivMensaje.setAttribute('style','display: block');
			return 'Debe ingresar el usuario a registrar';
		} else if (RegExp(/[_+-.,!@#$%^&*();\\/|<>"']+/).test(usuario.value)) {
			usuario.focus();
			nombreDivMensaje.setAttribute('style','display: block');
			return 'El usuario solo puede contener letras y numeros';
		}

		// validar contraseña

		if (clave.value=='') {
			clave.focus();
			nombreDivMensaje.setAttribute('style','display: block');
			return 'Debe ingresar la clave para el usuario';
		} else if (RegExp(/[_+--,!#$%^&*();\\/|<>"']+/).test(clave.value)) {
			clave.focus();
			nombreDivMensaje.setAttribute('style','display: block');
			return 'La contraseña solo puede contener letras, numeros, puntos y/o arroba';
		}

		// validar contraseña 2

		if (clave2.value=='') {
			clave2.focus();
			nombreDivMensaje.setAttribute('style','display: block');
			return 'Debe ingresar la clave para el usuario';
		} else if (RegExp(/[_+--,!#$%^&*();\\/|<>"']+/).test(clave2.value)) {
			clave2.focus();
			nombreDivMensaje.setAttribute('style','display: block');
			return 'La contraseña solo puede contener letras, numeros, puntos y/o arroba';
		} else if (clave2.value !== clave.value) {
			clave2.focus();
			nombreDivMensaje.setAttribute('style','display: block');
			return 'Las claves no coinciden';

		}


	} else if (nombreFormulario=='formLogin') {

		usuario = document.forms[nombreFormulario].elements["usuario"];
		clave   = document.forms[nombreFormulario].elements["clave"];


		// validar usuario
		if (usuario.value=='') {
			usuario.focus();
			nombreDivMensaje.setAttribute('style','display: block');
			return 'Debe ingresar el usuario a registrar';
		} else if (RegExp(/[_+-.,!@#$%^&*();\\/|<>"']+/).test(usuario.value)) {
			usuario.focus();
			nombreDivMensaje.setAttribute('style','display: block');
			return 'El usuario solo puede contener letras y numeros';
		}

		// validar contraseña

		if (clave.value=='') {
			clave.focus();
			nombreDivMensaje.setAttribute('style','display: block');
			return 'Debe ingresar la clave para el usuario';
		} else if (RegExp(/[_+--,!#$%^&*();\\/|<>"']+/).test(clave.value)) {
			clave.focus();
			nombreDivMensaje.setAttribute('style','display: block');
			return 'La contraseña solo puede contener letras, numeros, puntos y/o arroba';
		}		



	} else if (nombreFormulario=='formMensaje') {

		nombre  = document.forms[nombreFormulario].elements["nombre"];
		correo  = document.forms[nombreFormulario].elements["correo"];
		mensaje = document.forms[nombreFormulario].elements["mensaje"];
 
		// valiar nombre de la personas que se registra
		if (nombre.value==''){
			nombre.focus();
			nombreDivMensaje.setAttribute('style','display: block');
			return 'Debe colocar su nombre.';
		} else if (RegExp(/[0-9]\S+/).test(nombre.value)) {
			nombre.focus();
			nombreDivMensaje.setAttribute('style','display: block');
			return 'Solo se permiten letras';

		}
		
		// validar correo
		if (correo.value=='') {
			correo.focus();
			nombreDivMensaje.setAttribute('style','display: block');
			return 'Debe Ingresar el correo electronico';
		} else if (!RegExp(/[A-Za-z0-9]+\@[A-Za-z]+\.[A-Za-z]{3}/).test(correo.value)) {
			correo.focus();
			nombreDivMensaje.setAttribute('style','display: block');
			return 'Solo se permiten direcciones validas (ej. correo@dominio.com)';
		}	

		// validar correo
		if (mensaje.value=='') {
			mensaje.focus();
			nombreDivMensaje.setAttribute('style','display: block');
			return 'Debe Ingresar el mensaje a enviar';
		} else if (!RegExp(/[A-Za-z0-9]\w+/).test(correo.value)) {
			mensaje.focus();
			nombreDivMensaje.setAttribute('style','display: block');
			return 'Solo se permiten letras y números';
		}

		nombreDivMsgEnvi.setAttribute('style','display: block;');
	}

	if (prompt('Quieres enviar el formulario')=='Si') {
		document.forms[nombreFormulario].submit();
	}

	return '';

}



function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


// realizar validacion de mensaje de colores al no encontrar usuario de inicio de sesion
// mensajes en colores al ingresar y al mostrar el error
// ver como puedo poner el prompt de js que falta
// pasar nombre de formulario como parametro de la funcion de validar, para usarlo en nueva funcion de validar errores