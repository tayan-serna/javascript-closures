
function saludarFamilia(apellido) {
  return function saludarMiembroDeFamilia(nombre) {
    console.log(`Hola ${nombre} ${apellido}`)
  }
}

const saludarGomez = saludarFamilia("Gomez")
const saludarPerez = saludarFamilia("Perez")
const saludarRomero = saludarFamilia("Romero")

saludarGomez("Pedro")
saludarGomez("Juan")
saludarGomez("Laura")
saludarGomez("Mónica")

saludarPerez("Dario")
saludarPerez("Martin")
saludarPerez("Julieta")

saludarRomero("Jorge")

/*   EXAMPLE 2   */

var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

add();
add();
add();

/* EXAMPLE 3 */

function basePlus(x) {
  return function(y) {
    return x + y;
  };
}

const plus5 = basePlus(5);
const plus10 = basePlus(10);

plus5(5) // 10
plus5(10) //15
plus10(5) //15
plus10(-5) //5

