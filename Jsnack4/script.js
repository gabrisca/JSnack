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