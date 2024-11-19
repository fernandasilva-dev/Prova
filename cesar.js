function criptografia(mensagem, chave, converter){
    let m = []
    for(let i = 0; i < mensagem.length; i ++){
        m.push(mensagem[i])
        var texto = converter(m[i],chave,cifraLetra)
    }
    return texto
}

function cifraLetra(letra, chave){
    const L = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let aux = ''
    for(let i = 0; i < L.length; i ++){
        if(i > 25){
            i = 0
        }

        if( L[i] == letra){
            aux = L[i+chave]
        }
    }
    return aux
}

function desifraLetra(letra,chave){
    const L = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let aux = ''
    for(let i = 0; i < L.length; i ++){
        if( L[i] == letra){
            aux = L[i - chave]
        }
    }
    return aux
}

export default {criptografia}