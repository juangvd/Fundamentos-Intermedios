//                       Fundamentos Intermedios                    //


//  ---------------------------  Parte 1  -------------------------------  //


//  1.- Sigma - Implementa una función sigma(num) que, dado un número, devuelve la suma de todos los enteros positivos (incluyendo el número dado). Ej: sigma(3) = 6 (1+2+3); sigma(5) = 15 (1+2+3+4+5).
/*


function sigma(num) {
    var sum = 0;
    for (var i = 0; i <= num; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(sigma(7));


*/
//  2. Factorial - Escribe una función factorial(num) que, dado un número, devuelva el producto (multiplicación) de todos los enteros positivos (incluyendo el número dado). Por ejemplo: factorial(3) = 6 (1*2*3); factorial(5) = 120 (1*2*3*4*5).
/*


function factorial(num) {
    var x = 1;
    for (var i = num; i > 0; i--) {
        x = x * i;
    }
    return x;
}
console.log(factorial(6));


*/
//  3.- Fibonacci - Crea una función para generar números de Fibonacci. En esta famosa secuencia matemática, cada número es la suma de las dos anteriores, partiendo con los valores 0 y 1. Tu función debería aceptar un argumento, un índice en la secuencia (donde 0 corresponde al valor inicial, 4 corresponden al valor cuatro más tarde, etc). Ejemplos: fibonacci(0) = 0 (dado), fibonacci(1) = 1 (dado), fibonacci(2) = 1 (fib(0)+fib(1), o 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, o 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8). Haz esto primero sin usar recursión. Si no sabes qué es una recursión, no te preocupes puesto que vamos a introducir este concepto en la Parte 2 de esta actividad.
/*


function fibonacci(num) {
    x = [0, 1];
    for (var i = 0; i <= num; i++) {
        x.push(x[i] + x[i + 1]);
    }
    return x[num];
}
console.log(fibonacci(10));


*/
//  4.- Array: Penúltimo: Devuelve el penúltimo elemento del array. Dado [42,true,4,”Liam”, 7] devuelve “Liam”. Si el array es muy pequeño, devuelve null.
/*


var arreglo = [42, true, 4, 'Liam', 7];

function penultimo(arr) {
    if (arr.length < 3) {
        return null;
    } else {
        return console.log(arr[arr.length - 2]);
    }
}

penultimo(arreglo);


*/
//  5.- Array: “N” último: Devuelve el elemento “N” último. Dado ([5,2,3,6,4,9,7],3], devuelve 6. Si el array es muy pequeño, devuelve null.
/*


function x(arr, y) {
    if ((arr.length) >= y) {
        y = arr[(arr.length - 4)];
    } else {
        y = 'null';
    }
    return y;
}
console.log(x([5, 2, 3, 6, 4, 9, 7], 3));


*/
//  6.- Array: Segundo más grande: Devuelve el segundo elemento más grande de un array. Dado [42,1,4,3.14,7], devuelve 7.  Si el array es muy pequeño, devuelve null.
/*


function x(arr) {
    var arrnew = arr;
    var max = 0;
    var min = 0;
    for (var i = 0; i < arrnew.length; i++) {
        if (arrnew[i] > max) {
            max = arrnew[i];
        }
    }
    for (var i = 0; i < arrnew.length; i++) {
        if (arrnew[i] < min) {
            min = arrnew[i];
        }
    }
    for (var i = 0; i < arrnew.length; i++) {
        if (arrnew[i] == max) {
            arrnew[i] = min;
        }
    }
    max = 0;
    for (var i = 0; i < arrnew.length; i++) {
        if (arrnew[i] > max) {
            max = arrnew[i];
        }
    }
    return max;
}
console.log(x([42, 1, 4, 3.14, 7]));


*/
//  7.- Doble Problema Par: Crea una función que cambie un array dado duplicando cada uno de sus elementos en una posición par, y manteniendo el orden original. Convierte [4, "Ulysses", 42, false]   a    [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
/*


function repetirElemento(x) {
    var array = [];
    for (var i = 0; i < x.length; i++) {

        array.push(x[i], x[i]);
    }
    console.log(array);
}

y = repetirElemento([4, 'Ulyses', 42, false])


*/
//  ---------------------------  Parte 2  -------------------------------  //


//  1.- Crea una función Fib(n) que devuelve el enésimo número Fibonacci. Usa recursión para esto.
/*


function fib(n) {
    if (n == 0 || n == 1) {
        return n;
    }
    return fib(n - 2) + fib(n - 1);
}
console.log(fib(10));


*/
//  2.- Relleno recursivo.
/*


<html>
<head>
	<title>Recursive Fill</title>

	<style type="text/css">
	* {
		margin:0px;
		padding:0px;
	}
	body{
		background-color:black;
	}
	.row div{
		width:50px;
		height:50px;
		display:inline-block;
	}
	.white{
		background-color:white;
	}
	.red{
		background-color:red;
	}
	.yellow{
		background-color:yellow;
	}
	.blue{
		background-color:blue;
	}
	.green{
		background-color:green;
	}


	</style>
</head>
<body>

	<div id='container'></div>

	<script type="text/javascript">
		var world = [
			[1,1,1,0,0,0,0,3,2,2],
			[0,0,0,0,1,0,0,3,3,3],
			[0,2,2,0,1,0,0,0,0,0],
			[0,2,2,0,1,1,1,1,0,0],
			[0,2,2,0,1,0,0,0,0,3],
			[0,2,2,0,1,0,0,3,3,3],
			[0,0,0,0,1,0,0,3,3,3]];

		var mapping = {
			0: 'white',
			1: 'red',
			2: 'yellow',
			3: 'blue',
			4: 'green'
		}

		function drawWorld()
		{
			var output = '';
			for(var i=0; i<world.length; i++)
			{
				output += '<div class="row">';
				for(var j=0; j<world[i].length; j++)
				{
					output += "<div class='"+mapping[world[i][j]]+"'></div>";
				}
				output += '</div>';
			}
			document.getElementById('container').innerHTML = output;
			// console.log(output);
		}

		document.onclick = function(e)
		{
			// console.log('Coordinate Clicked', e.x, e.y);

			var x = Math.floor(e.x/50);
			var y = Math.floor(e.y/50);

			// console.log('X, Y', x, y);
			// console.log('Original Color', world[y][x]);

			console.log('Replace color', world[y][x], ' with color 4 starting from x:', x, 'y:', y);
			fill(x, y, world[y][x], 4);
		}

		function fill(x,y,original_color, color)
		{

			//boundary restrictions
			if(y<0 || y>=world.length || x<0 || x>=10)
				return false;

			//if the current color is NOT the same as the original color you're trying to replace, get out of the fill function
			if(world[y][x] != original_color)
				return false;

			world[y][x] = color;
			fill(x,y-1,original_color, color);
			fill(x,y+1,original_color, color);
			fill(x-1,y,original_color, color);
			fill(x+1,y,original_color, color);


			drawWorld();

		}

		drawWorld();

	</script>

</body>
</html>


*/