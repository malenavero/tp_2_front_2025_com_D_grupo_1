/////////////////////////
// Solución 4: Palíndromo 
function esPalindromo(palabra) {
  const normalizada = palabra.toLowerCase().trim();
  const reverse = normalizada.split('').reverse().join('');
  return normalizada === reverse;
}
/*
La idea fue comparar la palabra original con su versión invertida.
Primero normalizamos la entrada con `toLowerCase()` y `trim()` para que no influyan los espacios ni las mayúsculas.
Después la invertimos con `split`, `reverse` y `join`, y finalmente comparamos ambas versiones para saber si es un palíndromo.
*/


/////////////////////////
// Solución 5: Edad canina

function edadCanina() {
  const edad = parseInt(prompt("🐶 Ingresá la edad de tu perro y mirá en la consola la edad en años humanos:"), 10);
  if (!isNaN(edad)) {
    console.log(`🐾 Tu perro tiene ${edad} años y equivale a ${edad * 7} años humanos`);
  } else {
    console.log("⚠️ Por favor, ingresá un número válido.");
  }
}

/*
En este ejercicio tuvimos en cuenta que la consigna pedía obtener la edad mediante prompt, por lo tanto usamos esa función para capturar la entrada del usuario.
Convertimos el valor a número con parseInt, y agregamos una verificación con isNaN para evitar errores si se ingresan valores no numéricos.
Finalmente, mostramos el mensaje en consola tal como pedía la consigna, sin devolver ningún valor.
*/



/////////////////////////
// Solución 6: Capitalizar palabras
function capitalizarPalabras(cadena) {
  return cadena
    .toLowerCase()
    .split(' ')
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join(' ');
}
/*
Primero convertimos toda la cadena a minúsculas para tener una base uniforme, luego separamos en palabras con 'split'.
A cada palabra le aplicamos 'charAt(0).toUpperCase()' para capitalizar la primera letra, y después las unimos nuevamente con 'join'.
*/

/////////////////////////
// Solución 7: Fibonacci
function fibonacci(n) {
  const secuencia = [0, 1];
  for (let i = 2; i < n; i++) {
    secuencia.push(secuencia[i - 1] + secuencia[i - 2]);
  }
  return secuencia.slice(0, n);
}

/*
La serie de Fibonacci empieza con los valores 0 y 1, y cada número siguiente es la suma de los dos anteriores.
Para implementarlo, arrancamos con un array que contiene esos dos primeros números. 
Luego usamos un bucle que va agregando nuevos valores al array, calculando siempre la suma de los dos últimos elementos.
Por último, usamos slice para asegurarnos de devolver solo los primeros 'n' elementos, por si se pide menos de 2.
*/

/////////////////////////
// Solución 8: Productos

// 1. Usando forEach: Mostrar en consola cada producto con su nombre y precio
function listarProductosPorNombreYPrecio(productos) {
    return productos.forEach(p => console.log(`${p.nombre}: $${p.precio}`));
}

// 2. Usando map: Crear un array con solo los nombres de los productos
function mapearNombresProductos(productos) {
    return productos.map(p => p.nombre);
}

// 3. Usando filter: Obtener productos electrónicos con stock mayor a 20
function filtrarProductosCategoriaYStock(productos, categoria, stock) {
    return productos.filter(p => p.categoria === categoria && p.stock > stock);
}

// 4. Usando find: Encontrar el producto con id 3
function findById(productos, id) {
    return productos.find(p => p.id === id);
}

// 5. Usando reduce: Calcular el valor total del inventario (precio * stock)
function valorTotalInventario(productos) {
    return productos.reduce((acc, p) => acc + (p.precio * p.stock), 0);
}

/*
Acá trabajamos con un array de productos y usamos distintos métodos para explorar y transformar la información.
Con `forEach` mostramos los nombres y precios, `map` nos sirvió para obtener una lista con solo los nombres,
`filter` nos permitió seleccionar productos según categoría y stock, `find` busca un producto por ID,
y con `reduce` calculamos el valor total del inventario multiplicando precio por stock. Solo en el primer caso imprimimos en consola, para el resto se muestra por consola con un console que llama a la funcion.
*/

/////////////////////////
// Solución 9: Estudiantes

// Helper
function obtenerPromedio(estudiante) {
    return estudiante.calificaciones.reduce((a, b) => a + b) / estudiante.calificaciones.length
}

// 1. Usando forEach: Mostrar nombre y edad de cada estudiante
function listarEstudiantesPorNombreYEdad(estudiantes) {
    return estudiantes.forEach(e => console.log(`${e.nombre}: ${e.edad} años`));
}


// 2. Usando map: Crear array de objetos con nombre y promedio de calificaciones
function mapearNombresYPromedio(estudiantes) {
    return estudiantes.map(e => {
        const promedio = obtenerPromedio(e);
        return { nombre: e.nombre, promedio };
    });
}

// 3. Usando filter: Obtener estudiantes con promedio mayor a 7.5
function filtrarEstudiantesPromedio(estudiantes, promedio) {
    return estudiantes.filter(e => obtenerPromedio(e) > promedio)
}

// 4. Usando find: Encontrar estudiante llamado 'María'
function findByName(estudiantes, nombre) {
    return estudiantes.find(p => p.nombre === nombre);
}

// 5. Usando reduce: Calcular la edad promedio de los estudiante
function edadPromedioEstudiantes(estudiantes) {
    return estudiantes.reduce((acc, e) => acc + e.edad, 0) / estudiantes.length;
}

/*
El proceso fue similar al anterior, solo que además, definimos una función auxiliar para calcular el promedio de calificaciones de forma más clara y reutilizable.
*/


/////////////////////////
//  Solución 10: Películas 

// 1. Usando forEach: Mostrar título y año de cada película
function listarPeliculasTituloYAnio(peliculas) {
  return peliculas.forEach(p => console.log(`${p.titulo} (${p.año})`));
}

// 2. Usando map: Crear array de títulos en mayúsculas
function mapearTitulosEnMayusculas(peliculas) {
  return peliculas.map(p => p.titulo.toUpperCase());
}

// 3. Usando filter: Obtener películas de drama con rating mayor a 8.5
function filtrarPeliculasDramaRating(peliculas) {
  return peliculas.filter(p => p.genero === 'drama' && p.rating > 8.5);
}

// 4. Usando find: Encontrar película estrenada en 2014
function findByYear(peliculas, año) {
  return peliculas.find(p => p.año === año);
}

// 5. Usando reduce: Calcular la duración total de todas las películas
function duracionTotalPeliculas(peliculas) {
  return peliculas.reduce((acc, p) => acc + p.duracion, 0);
}

/*
Esta parte fue similar a la anterior pero con un array de películas.
*/

