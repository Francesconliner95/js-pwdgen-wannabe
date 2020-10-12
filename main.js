var nome = prompt('Nome:');
var cognome = prompt('Cognome:');
var col_pref = prompt('Colore preferito:');
var anno_corrente = new Date().getFullYear();  /*Ci isoliamo solo l'anno corrente ".getFullYear()" dalla data completa "new Date()""*/
var anno_corrente = anno_corrente.toString(); /*Converto il numero in stringa dato che la funzione substring non mi convertiva direttamente la var numero in stringa*/
var anno_corrente = anno_corrente.substring(2,4); /*utilizzo la funzione substring per isolari solamente le ultime due cifre dell'anno corrente impostando l'intervallo da dopo la seconda cifra alla quarta ed ultima*/

document.getElementById('psw').innerHTML = nome + cognome + col_pref + anno_corrente;
