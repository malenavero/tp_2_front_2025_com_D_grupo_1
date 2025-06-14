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

