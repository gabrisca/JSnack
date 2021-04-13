
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


// <<<<<<<<<< JSNACK6 >>>>>>>>>>>
// STAMPA IL CUBO DEI PRIMI N NUMERI DOVE N è UN NUMERO INDICATO DALL'UTENTE


var numeroIserito = parseInt(prompt("Inserisci un numero"));
// var numeroIserito = 5;
console.log(numeroIserito);

var somma = 0; // flag

for (var i = 1; i <= numeroIserito; i++){
  var numeriCubici = console.log(Math.pow(i,3));
  somma += Math.pow(i,3); // += necessario per commare tutti i cubi
}

console.log("la somma dei cubi è " + somma)


// <<<<<<<<<< JSNACK7 >>>>>>>>>>>
// STAMPA LE POTENZE DI 2 FINO A 1000

var limite = 1000;
var potenza = 1;
var counterPotenza = 1;

//soluzione 1
// while (potenza < limite){
//   console.log(potenza);
//   console.log("Elevo il 2 alla " +counterPotenza);
//   potenza = Math.pow(2, counterPotenza);
//   counterPotenza++;
// }

//soluzione 2
while (potenza < limite){
  console.log(potenza);
  potenza *= 2;
}

//soluzione 3
// for(var i = 1; potenza < limite; i++){
//   potenza = Math.pow(2,i);
//   console.log(potenza);
// }


// <<<<<<<<<< JSNACK8 >>>>>>>>>>>
// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.

var numero = prompt("Inserisci un numero di 4 cifre");
console.log("hai inserito il numero " + numero);
console.log("-------")

console.log("Il numero che hai inserito è lungo " + numero.toString().length + " cifre"); // .toString mi restituisce l'output della proprietà lenght applicata ad un numero
console.log("-------")

if (numero.toString().length < 4) { // condizione perchè sia valido l'inserimento del numero
  alert("Numero troppo piccolo. Devi inserire un numero di 4 cifre");
} else if (numero.toString().length > 4) {
  alert("Numero troppo grande. Devi inserire un numero di 4 cifre");
} else {
  console.log("numero inserito correttamente " + numero);
  console.log("--------")
}

var cifreNumero = numero.split(''); // .split mi dà il numero suddiviso in cifre
console.log("il numero è composto dalle cifre " + cifreNumero)
console.log("--------")

var somma = 0;

for (var i = 0; i < numero.length; i++) { // ciclo for per sommare le cifre
  somma += parseInt(numero[i]);
}

console.log("la somma di " + cifreNumero + " è " + somma);


// <<<<<<<<<< JSNACK9 >>>>>>>>>>>
//Calcola la somma e la media dei primi 10 numeri

var listaNumeri = [ ];

var somma = 0;

var media;

for(i = 1; i <= 10; i++){
  console.log(i); // stampo la lista di numeri da 1 a 10
  console.log("-----");
  somma += i; // sommo i numeri da 1 a 10
  media = somma / 10; // calcolo la media (totale diviso il numero dei valori immessi)
}

console.log("la somma totale è " + somma) // somma totale
console.log("-----");

console.log("la media totale è " + media)// media 
console.log("-----");