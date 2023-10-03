// - Chiedere il nome dell'utente
  // - Dichiarare una variabile "userName" con valore assegnato tramite un metodo prompt
  // - Specificare nel prompt che vogliamo il nome dell'utente
const userName = prompt('Inserisci qui sotto il tuo nome:');

// - Chiedere il colore preferito dell'utente
  // - Dichiarare una variabile "userFavoriteColor" con valore assegnato tramite un metodo prompt
  // - Specificare nel prompt che vogliamo sapere il suo colore preferito
const userFavoriteColor = prompt('Inserisci poi il tuo colore preferito:');

// - Dichiarare un numero casuale
  // - Dichiarare una variabile "randomNumber a cui assegneremo un numero casuale
let randomNumber = 13;

// - Formare una concatenazione
  // - Dichiarare una variabile "randomPassword" che racchiuderà la concatenazione (nome + colore preferito + numero casuale)
const randomPassword = userName + userFavoriteColor + randomNumber;

// - Scrivere sulla pagina il risultato della concatenazione 
  // - Dichiarare una variabile che richiami l'elemento con id "password" del DOM
const passwordDomElement = document.getElementById('password');

  // - Aggiungere tramite la proprietà .innerHTML la stringa racchiusa nella variabile 
passwordDomElement.innerHTML = randomPassword;