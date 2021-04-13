// STAMPA IL CUBO DEI PRIMI N NUMERI DOVE N è UN NUMERO INDICATO DALL'UTENTE


var numeroIserito = prompt("Inserisci un numero");
// var numeroIserito = 5;
console.log(numeroIserito);

for (var i = 1; i <= numeroIserito; i++){
  console.log(Math.pow(i,3));
}