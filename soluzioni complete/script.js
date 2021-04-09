
// <<<<<<<<<< JSNACK2 >>>>>>>>>>>
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


// <<<<<<<<<< JSNACK3 >>>>>>>>>>>
// CHIEDERE 10 VOLTE ALL'UTENTE DI INSERIRE UN NUMERO E STAMPARE LA SOMMA
var somma = 0;

for (var i = 0; i < 10; i++) {
  // Viene eseguito 10 volte
  var nuovoNumero = parseInt(prompt("inserisci un numero")); // variabile nuovo numero
  console.log(nuovoNumero) 

  somma += nuovoNumero; 
}

console.log(somma);

// <<<<<<<<<< JSNACK4 >>>>>>>>>>>
// IN UN ARRAY SONO CONTENUTI I NOMI DEGLI INVITATI ALLA FESTA DEL GRANDE GATSBY. CHIEDI ALL'UTENTE IL SUO NOME E COMUNICAGLI SE PUP' PARTECIPARE O NO ALLA FESTA
var myName = prompt("Lei è il signor...?"); //variabile myName per chiedere chi è?

var listaInvitati = [
  "Nick Carraway",
  "Daisy Buchanan",
  "Jordan Baker",
  "Tom Buchanan",
  "George Wilson",
  "Pino"
]; // array con lista invitati alla festa

var foundIt = false; // variabile trovato di default false

for (var i = 0; i < listaInvitati.length; i++) {
  var invitato = listaInvitati[i]; // variabile invitato uguale a uno dei nomi della lista
  if (invitato === myName) {
    foundIt = true;
  } // se var invitato uguale a var myName(nome dato dalla persona all'inizio) > foundIt diventa True
} // ciclo FOR

if (foundIt) {
  alert("Benvenuto signore/a"); // se il nome è sulla lista do il benvenuto
} else {
  alert("Mi dispiace. Il suo nome non è sulla lista. Arrivederci") // se il nome non è sulla lista dico di andarsene
}

// <<<<<<<<<< JSNACK5 >>>>>>>>>>>
// CREARE UN ARRAY VUOTO. CHIEDERE PER 6 VOLTE ALL'UTENTE DI INSERIRE UN NUMERO. SE è DISPARI INSERICILO NELL'ARRAY

var listaNumeri = []; // array vuoto

for (var i = 0; i < 6; i++) {
  // ciclo for di 6
  var nuovoNumero = parseInt(prompt("inserisci un numero")); // variabile nuovo numero
  // console.log(nuovoNumero)
  if (nuovoNumero % 2) {
    // se nuovo numero dispari lo pusho nell'array
    listaNumeri.push(nuovoNumero);
  }
}

console.log(listaNumeri); // output
