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
