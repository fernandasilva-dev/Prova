import cifra from './cesar.js'

var letra = ['b','o','m','d', 'i', 'a']
var chave = 3
console.log("mesagem: " + letra)

var texto1 = cifra.criptografia(letra,chave,cifra.cifraLetra(letra,chave))
console.log(texto1)

