import cifra from './cesar.js';

const letra = ['b', 'o', 'm', 'd', 'i', 'a'];
const chave = 3;

console.log("Mensagem original: " + letra.join(''));

const texto1 = cifra.criptografia(letra, chave, cifra.cifraLetra);
console.log("Mensagem criptografada: " + texto1);
