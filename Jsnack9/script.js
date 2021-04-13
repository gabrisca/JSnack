//Calcola la somma e la media dei primi 10 numeri

var listaNumeri = [ ];

var somma = 0;

var media;

for(i = 1; i <= 10; i++){
  console.log(i); // stampo la lista di numeri da 1 a 10
  console.log("-----");
  somma += i; // sommo i numeri da 1 a 10
  media = somma / 10; // calcolo la media 
}

console.log("la somma totale è " + somma) // somma totale
console.log("-----");

console.log("la media totale è " + media)// media 
console.log("-----");