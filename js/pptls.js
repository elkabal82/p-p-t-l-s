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

function inicio()
{

//guardamos en opcionUsuario la opcion que el usuario selecciono
//despues de \n no puede haber espacio en blanco
opcionUsuario = prompt("¿Que eliges?\nPiedra: 0\nPapel: 1\nTijeras: 2\nLagarto: 3\nSpock: 4", 0);

//Con alert mostramos unos mensajes, que escogiste y lo que escogio la maquina
//document.write("Escogiste " + opciones[opcionUsuario] + "<br>");
	//var htmlOpcionUsuario = document.getElementById("opcionUsuario");
	//var htmlOpcionMaquina = document.getElementById("opcionMaquina");
	//var htmlResultado = document.getElementById("resultado");	
	
	htmlOpcionUsuario.innerHTML += opciones[opcionUsuario];
	htmlOpcionMaquina.innerHTML += opciones[opcionMaquina];


//document.write("JavaScript escogio " + opciones[opcionMaquina] + "<br>");

//opcionUsuario = document.getElementById("opcionUsuario");
//opcionUsuario.innerHTML = opciones[opcionUsuario]; 

if (opcionUsuario == tijeras )
{
	if (opcionMaquina == tijeras)
	{
		htmlResultado.innerHTML = ("Empate");
		//document.write("Empate");
	}
	else if (opcionMaquina == papel || opcionMaquina == lagarto)
	{
		htmlResultado.innerHTML = ("Ganaste");
	}
	else if (opcionMaquina == spock || opcionMaquina == piedra)
	{
		htmlResultado.innerHTML = ("Perdiste");
	}
}

else if (opcionUsuario == papel)
{
	if (opcionMaquina == papel)
	{
		htmlResultado.innerHTML = ("Empate");
	}
	else if (opcionMaquina == piedra || opcionMaquina == spock)
	{
		htmlResultado.innerHTML = ("Ganaste");
	}
	else if (opcionMaquina == tijeras || opcionMaquina == lagarto)
	{
		htmlResultado.innerHTML = ("Perdiste");
	}
}

else if (opcionUsuario == piedra)
{
	if (opcionMaquina == piedra)
	{
		htmlResultado.innerHTML = ("Empate");
	}
	else if (opcionMaquina == tijeras || opcionMaquina == lagarto)
	{
		htmlResultado.innerHTML = ("Ganaste");
	}
	else if (opcionMaquina == spock || opcionMaquina == papel)
	{
		htmlResultado.innerHTML = ("Perdiste");
	}
}

else if (opcionUsuario == spock)
{
	if (opcionMaquina == spock)
	{
		htmlResultado.innerHTML =("Empate");
	}
	else if (opcionMaquina == piedra || opcionMaquina == tijeras)
	{
		htmlResultado.innerHTML = ("Ganaste");
	}
	else if (opcionMaquina == papel || opcionMaquina == lagarto)
	{
		htmlResultado.innerHTML = ("Perdiste");
	}
}

else if (opcionUsuario == lagarto)
{
	if (opcionMaquina == lagarto)
	{
		htmlResultado.innerHTML = ("Empate");
	}
	else if (opcionMaquina == papel || opcionMaquina == spock)
	{
		htmlResultado.innerHTML = ("Ganaste");
	}
	else if (opcionMaquina == tijeras || opcionMaquina == piedra)
	{
		htmlResultado.innerHTML = ("Perdiste");
	}
}

else
{
	htmlResultado.innerHTML = ("Esa opcion no existe");
}	
}