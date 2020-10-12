var nome = prompt('Nome:');
var cognome = prompt('Cognome:');
var col_pref = prompt('Colore preferito:');
var anno_corrente = new Date().getFullYear();
var anno_corrente = anno_corrente.toString();
var anno_corrente_min = anno_corrente.substring(2,4);

document.getElementById('psw').innerHTML = nome + cognome + col_pref + anno_corrente_min;
