//Codigo en JavaScript  para el juego de piedra papel tijeras lagarto y spock

//declaramos la mayoria de las bariables
var piedra = 0;
var papel = 1;
var tijeras = 2;
var lagarto = 3;
var spock = 4;
var opciones =["PIEDRA", "PAPEL", "TIJERAS", "LAGARTO", "SPOCK"];
var opcionUsuario;
var opcionMaquina = aleatorio(0,4);

//Declaramos la funcion aleatorio 
function aleatorio(minimo, maximo)
{
	var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}

//guardamos en opcionUsuario la opcion que el usuario selecciono
//despues de \n no puede haber espacio en blanco
opcionUsuario = prompt("¿Que eliges?\nPiedra: 0\nPapel: 1\nTijeras: 2\nLagarto: 3\nSpock: 4", 0);

//Con alert mostramos unos mensajes, que escogiste y lo que escogio la maquina
document.write("Escogiste " + opciones[opcionUsuario] + "<br>");
document.write("JavaScript escogio " + opciones[opcionMaquina] + "<br>");



if (opcionUsuario == tijeras)
{
	if (opcionMaquina == tijeras)
	{
		document.write("Empate");
	}
	else if (opcionMaquina == papel)
	{
		document.write("Ganaste");
	}
	else if (opcionMaquina == lagarto)
	{
		document.write("Ganaste");
	}
	else if (opcionMaquina == spock)
	{
		document.write("Perdiste");
	}
	else if (opcionMaquina == piedra)
	{
		document.write("Perdiste");
	}
}

else if (opcionUsuario == papel)
{
	if (opcionMaquina == papel)
	{
		document.write("Empate");
	}
	else if (opcionMaquina == piedra)
	{
		document.write("Ganaste");
	}
	else if (opcionMaquina == spock)
	{
		document.write("Ganaste");
	}
	else if (opcionMaquina == tijeras)
	{
		document.write("Perdiste");
	}
	else if (opcionMaquina == lagarto)
	{
		document.write("Perdiste");
	}
}

else if (opcionUsuario == piedra)
{
	if (opcionMaquina == piedra)
	{
		document.write("Empate");
	}
	else if (opcionMaquina == tijeras)
	{
		document.write("Ganaste");
	}
	else if (opcionMaquina == lagarto)
	{
		document.write("Ganaste");
	}
	else if (opcionMaquina == spock)
	{
		document.write("Perdiste");
	}
	else if (opcionMaquina == papel)
	{
		document.write("Perdiste");
	}
}

else if (opcionUsuario == spock)
{
	if (opcionMaquina == spock)
	{
		document.write("Empate");
	}
	else if (opcionMaquina == piedra)
	{
		document.write("Ganaste");
	}
	else if (opcionMaquina == tijeras)
	{
		document.write("Ganaste");
	}
	else if (opcionMaquina == papel)
	{
		document.write("Perdiste");
	}
	else if (opcionMaquina == lagarto)
	{
		document.write("Perdiste");
	}

}

else if (opcionUsuario == lagarto)
{
	if (opcionMaquina == lagarto)
	{
		document.write("Empate");
	}
	else if (opcionMaquina == papel)
	{
		document.write("Ganaste");
	}
	else if (opcionMaquina == spock)
	{
		document.write("Ganaste");
	}
	else if (opcionMaquina == tijeras)
	{
		document.write("Perdiste");
	}
	else if (opcionMaquina == piedra)
	{
		document.write("Perdiste");
	}
}

else
{
	document.write("Esa opcion no existe");
}	
