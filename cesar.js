function criptografia(mensagem, chave, converter) {
    let texto = '';
    for (let i = 0; i < mensagem.length; i++) {
        texto += converter(mensagem[i], chave);
    }
    return texto;
}

function cifraLetra(letra, chave) {
    const L = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let index = L.indexOf(letra);
    if (index === -1) return letra; 
    return L[(index + chave) % 26];
}

function desifraLetra(letra, chave) {
    const L = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let index = L.indexOf(letra);
    if (index === -1) return letra; 
    return L[(index - chave + 26) % 26]; 
}

export default { criptografia, cifraLetra, desifraLetra };
