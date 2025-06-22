const productos = [
	{ id: 1, nombre: 'Laptop', precio: 1200, stock: 15, categoria: 'electrónica' },
	{ id: 2, nombre: 'Mouse', precio: 25, stock: 50, categoria: 'electrónica' },
	{ id: 3, nombre: 'Teclado', precio: 45, stock: 30, categoria: 'electrónica' },
	{ id: 4, nombre: 'Monitor', precio: 300, stock: 20, categoria: 'electrónica' },
	{ id: 5, nombre: 'Libro', precio: 15, stock: 100, categoria: 'libros' }
];

const estudiantes = [
	{ id: 1, nombre: 'Ana', edad: 20, calificaciones: [8, 9, 7, 8] },
	{ id: 2, nombre: 'Carlos', edad: 22, calificaciones: [6, 7, 8, 7] },
	{ id: 3, nombre: 'María', edad: 21, calificaciones: [9, 9, 8, 10] },
	{ id: 4, nombre: 'Juan', edad: 19, calificaciones: [7, 6, 5, 8] }
];

const peliculas = [
	{ id: 1, titulo: 'El Padrino', año: 1972, duracion: 175, genero: 'drama', rating: 9.2 },
	{ id: 2, titulo: 'Pulp Fiction', año: 1994, duracion: 154, genero: 'crimen', rating: 8.9 },
	{ id: 3, titulo: 'El Señor de los Anillos', año: 2001, duracion: 178, genero: 'fantasía', rating: 8.8 },
	{ id: 4, titulo: 'Interestelar', año: 2014, duracion: 169, genero: 'ciencia ficción', rating: 8.6 },
	{ id: 5, titulo: 'Parásitos', año: 2019, duracion: 132, genero: 'drama', rating: 8.6 }
];

function ejecutarTests() {
	console.log("\n✦✧✦✧✦✧ <<<<< 🧪 TESTEOS FINALES 🧪 >>>>> ✧✦✧✦✧✦\n");

	for (let i = 1; i <= 10; i++) {
		console.log(`\n-----------------SOLUCIÓN ${i}-----------------\n`);

		switchTest(i);
		console.log("\n");
	}
}


function switchTest(numero) {
	switch (numero) {
		case 1:
		    testEjercicio1();
		 	break;
	    case 2:
		 	testEjercicio2();
		 	break;
		 case 3:
		 	testEjercicio3();
		 	break;
		case 4:
			testEjercicio4();
			break;
		case 5:
			testEjercicio5();
			break;
		case 6:
			testEjercicio6();
			break;
		case 7:
			testEjercicio7();
			break;
		case 8:
			testEjercicio8();
			break;
		case 9:
		 	testEjercicio9();
		 	break;
		case 10:
		 	testEjercicio10();
		 	break;
		default:
			break;
	}
}


function testEjercicio1() {
	console.log(`📐 Test 1: Área de 5 x 3 = ${calcularAreaRectangulo(5, 3)}`);
    console.log(`📐 Test 2: Área de 9 x 2 = ${calcularAreaRectangulo(9, 2)}`);
    console.log(`📐 Test 3: Área de 7 x 4 = ${calcularAreaRectangulo(7, 4)}`);
}
   

function testEjercicio2() {
	console.log(`✍️ Test 1: "${"Uno dos tres cuatro"}" => ${contarPalabras("Uno dos tres cuatro")}`);
    console.log(`✍️ Test 2: "${"Uno     dos tres      cuatro cinco"}" => ${contarPalabras("Uno     dos tres      cuatro cinco")}`);
    console.log(`✍️ Test 3: "${"    Hola     mundo "}" => ${contarPalabras("    Hola     mundo ")}`);
}
   

function testEjercicio3() {
    console.log(`🔤 Test 1: "Murciélago" tiene ${contarVocales("Murciélago")} vocales`);
    console.log(`🔤 Test 2: "Argentina" tiene ${contarVocales("Argentina")} vocales`);
    console.log(`🔤 Test 3: "zzz" tiene ${contarVocales("zzz")} vocales`);
}

function testEjercicio4() {
    console.log(`🔁 Test 1: "neuquen" => ${esPalindromo("neuquen")}`);
    console.log(`🔁 Test 2: "reconocer" => ${esPalindromo("reconocer")}`);
    console.log(`🔁 Test 3: "hola" => ${esPalindromo("hola")}`);
}

function testEjercicio5() {
    console.log("5) Edad canina\n");
    console.log("Este ejercicio se testea directamente desde la calculadora");
}

function testEjercicio6() {
    console.log(`🔠 Test 1: "${"tengo todas letras minusculas"}" => "${capitalizarPalabras("tengo todas letras minusculas")}"`);
    console.log(`🔠 Test 2: "${"TENGO TODAS MAYUSCULAS"}" => "${capitalizarPalabras("TENGO TODAS MAYUSCULAS")}"`);
    console.log(`🔠 Test 3: "${"tEngo un PoCo de TodO"}" => "${capitalizarPalabras("tEngo un PoCo de TodO")}"`);
}

function testEjercicio7() {
    console.log(`🧮 Test 1: fibonacci(5) = ${fibonacci(5)}`);
    console.log(`🧮 Test 2: fibonacci(8) = ${fibonacci(8)}`);
    console.log(`🧮 Test 3: fibonacci(1) = ${fibonacci(1)}`);
}

function testEjercicio8() {
	console.log("🛒 forEach → Mostrar productos:");
    listarProductosPorNombreYPrecio(productos);

    console.log("\n🛒 map → Nombres de productos:");
    console.log("Nombres:", mapearNombresProductos(productos));

    console.log("\n🛒 filter → Electrónica con stock > 20:");
    console.log("Resultado:", filtrarProductosCategoriaYStock(productos, "electrónica", 20));

    console.log("\n🛒 find → Producto con ID 3:");
    console.log("Resultado:", findById(productos, 3));

    console.log("\n🛒 reduce → Valor total del inventario:");
    console.log("Total:", valorTotalInventario(productos));  
}

function testEjercicio9() {
    console.log("📚 forEach → Mostrar Estudiantes:");
    listarEstudiantesPorNombreYEdad(estudiantes);

    console.log("\n📚 map → Nombres y promedios:");
    console.log("Resultado:", mapearNombresYPromedio(estudiantes));

    console.log("\n📚 filter → Estudiantes con promedio > 7.5:");
    console.log("Resultado:", filtrarEstudiantesPromedio(estudiantes, 7.5));

    console.log("\n📚 find → Estudiante con nombre Maria");
    console.log("Resultado:", findByName(estudiantes, "María"));

    console.log("\n📚 reduce → Edad promedio de los estudiantes:");
    console.log("Resultado:", edadPromedioEstudiantes(estudiantes));
}

function testEjercicio10() {
	console.log("🍿 forEach → Título y año:");
	listarPeliculasTituloYAnio(peliculas);

	console.log("\n🍿 map → Títulos en MAYÚSCULAS:");
	console.log("Resultado:", mapearTitulosEnMayusculas(peliculas));

	console.log("\n🍿 filter → Dramas con rating > 8.5:");
	console.log("Resultado:", filtrarPeliculasDramaRating(peliculas));

	console.log("\n🍿 find → Película estrenada en 2014:");
	console.log("Resultado:", findByYear(peliculas, 2014));

	console.log("\n🍿 reduce → Duración total del catálogo:");
	console.log("Resultado:", duracionTotalPeliculas(peliculas), "minutos");
}