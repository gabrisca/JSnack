// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.

var numero = prompt("Inserisci un numero di 4 cifre");
console.log("hai inserito il numero " + numero);
console.log("-------")

console.log("Il numero che hai inserito è lungo " + numero.toString().length + " cifre"); // .toString mi restituisce l'output della proprietà lenght applicata ad un numero
console.log("-------")

if (numero.toString().length < 4) {
  alert("Numero troppo piccolo. Devi inserire un numero di 4 cifre");
} else if (numero.toString().length > 4) {
  alert("Numero troppo grande. Devi inserire un numero di 4 cifre");
} else {
  console.log("numero inserito correttamente " + numero);
  console.log("--------")
}

