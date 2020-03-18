// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito19


// dichiaro variabili di nome, cognome e colore preferito
var nome, cognome, colorePreferito;

// chiedo il nome
nome = prompt('Qual è il tuo nome?');

// chiedo il cognome
cognome = prompt('Qual è il tuo cognome?');

// chiedo il colore preferito
colorePreferito = prompt('Qual è il tuo colore preferito?');

// scrivo nomecognomecolorepreferito19
document.getElementById('password').innerHTML = 'La tua password è:' + ' ' + nome + cognome + colorePreferito + '19';
