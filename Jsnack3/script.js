var somma = 0;

for (var i = 0; i < 10; i++) {
  // Viene eseguito 10 volte
  var nuovoNumero = parseInt(prompt("inserisci un numero")); // variabile nuovo numero
  console.log(nuovoNumero) 

  somma += nuovoNumero; 
}

console.log(somma);