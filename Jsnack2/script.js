// CHIEDI ALL'UTENTE DI INSERIRE 2 PAROLE  E STAMPARE PER PRIMA QUELLA PIù CORTA

var parola1 = prompt("inserisci parola1");
// console.log(parola1.lenght)
var parola2 = prompt("inserisci parola2");
// console.log(parola2.lenght)

if (parola1.length > parola2.length) {
  console.log(parola2);
  console.log(parola1);
} else if (parola1.length < parola2.length) {
  console.log(parola1);
  console.log(parola2);
} else {
  alert("stessa lunghezza");
}
