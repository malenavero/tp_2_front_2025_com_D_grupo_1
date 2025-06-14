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
		// case 1:
		// 	testEjercicio1();
		// 	break;
		// case 2:
		// 	testEjercicio2();
		// 	break;
		// case 3:
		// 	testEjercicio3();
		// 	break;
		case 4:
			testEjercicio4();
			break;
		case 5:
			testEjercicio5();
			break;
		case 6:
			testEjercicio6();
			break;
		// case 7:
		// 	testEjercicio7();
		// 	break;
		// case 8:
		// 	testEjercicio8();
		// 	break;
		// case 9:
		// 	testEjercicio9();
		// 	break;
		// case 10:
		// 	testEjercicio10();
		// 	break;
		default:
			break;
	}
}


function testEjercicio1() {
}
   

function testEjercicio2() {
}
   

function testEjercicio3() {
   
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
    
}

function testEjercicio8() {
  
}

function testEjercicio9() {
   
}

function testEjercicio10() {

}