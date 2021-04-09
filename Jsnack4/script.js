// IN UN ARRAY SONO CONTENUTI I NOMI DEGLI INVITATI ALLA FESTA DEL GRANDE GATSBY. CHIEDI ALL'UTENTE IL SUO NOME E COMUNICAGLI SE PUP' PARTECIPARE O NO ALLA FESTA
var myName = prompt("Lei è il signor...?");

var listaInvitati = [
  "Nick Carraway",
  "Daisy Buchanan",
  "Jordan Baker",
  "Tom Buchanan",
  "George Wilson",
  "Pino"
];

var foundIt = false;

for (var i = 0; i < listaInvitati.length; i++){
  var invitato = listaInvitati[i];
  if (invitato === myName) {
    foundIt = true;
  }
}

if (foundIt) {
  alert("Benvenuto signore/a");
} else {
  alert("Mi dispiace. Il suo nome non è nella lista. Arrivederci")
}