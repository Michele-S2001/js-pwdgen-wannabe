// - Chiedere il nome dell'utente
  // - Dichiarare una variabile "userName" con valore assegnato tramite un metodo prompt
  // - Specificare nel prompt che vogliamo il nome dell'utente
const userName = prompt('Inserisci qui sotto il tuo nome:');

//- Chiedere il cognome dell'utente
  //- Dichiarare una variabile "userSurname" con valore assegnato tramite un metodo prompt
  //- Specificare nel prompt che vogliamo sapere il suo cognome
const userSurname = prompt('Inserisci qui sotto il tuo cognome:');

// - Chiedere il colore preferito dell'utente
  // - Dichiarare una variabile "userFavoriteColor" con valore assegnato tramite un metodo prompt
  // - Specificare nel prompt che vogliamo sapere il suo colore preferito
const userFavoriteColor = prompt('Inserisci poi il tuo colore preferito:');

// - Dichiarare un numero casuale
  // - Dichiarare una variabile "randomNumberGenerator" in cui andremo a generare un numero casuale tra 0 e 100
let randomNumberGenerator = parseInt(Math.random() * 100);

// - Formare una concatenazione
  // - Dichiarare una variabile "randomPassword" che racchiuderà la concatenazione (nome + colore preferito + numero casuale)
const randomPassword = userName + userSurname + userFavoriteColor + randomNumberGenerator;

// - Scrivere sulla pagina il risultato della concatenazione 
  // - Dichiarare una variabile che richiami l'elemento con id "password" del DOM
const passwordDomElement = document.getElementById('password');

  // - Aggiungere tramite la proprietà .innerHTML la stringa racchiusa nella variabile 
passwordDomElement.innerHTML = randomPassword;