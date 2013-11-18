// JavaScript Document
window.onload = function()
{
	var Boton = document.getElementById("evaluar");
	Boton.onclick = function()
	{
		var formu = document.getElementById("frm1");
		regular(formu);
	}
}


function regular(formu)
{
	var obj = new Object();
	//alert("Bienvenido a esto");
	
	var regnombre = /[\w]$/;
	var regemail = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
	var regpais = /[\w]$/;
	var regasunto = /[\w]$/;
	var regmensaje = /[\w]$/;
	
	if(formu.nombre.value.match(regnombre))
	{
		if(formu.email.value.match(regemail))
		{
			if(formu.pais.value.match(regpais))
			{
				if(formu.asunto.value.match(regasunto))
				{
					if(formu.mensaje.value.match(regmensaje) && (formu.mensaje.value!=''))
					{
						alert("Formulario enviado correctamente. Gracias por tu tiempo. Tu sugerencia es muy importante.");
						LimpiarFormu()
					}
					else
					{
						alert("Deseamos saber su mensaje, por favor, ingresa tu mensaje/comentario/opinion.");
					}
				}
				else
				{
					alert("Debes de ingresar un asunto.");
				}
			}
			else
			{
				alert("Ingresa tu pais de donde nos escribes o eres.");
			}
		}
		else
		{
			alert("Email/Correo incorrecto. El formato debe ser: ejemplo@ejemplo.com");
		}
	}
	else
	{
		alert("Tu nombre es fundamental. Por favor, ingresa nombre.");
	}
	
	function LimpiarFormu()
	{
		document.getElementById("frm1").reset();
	}
}