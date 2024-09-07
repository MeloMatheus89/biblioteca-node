export function contaPalavras(texto){
    const paragrafos = extraiParagrafos(texto);
    const contagem = paragrafos.flatMap((paragrafo) => {
    if(!paragrafo) return [];    
    return verificaPalavrasDuplicadas(paragrafo);
    })
    console.log(contagem);
}

function extraiParagrafos(texto){
    return texto.toLowerCase().split('\n');
}

function limpaPalavras(palavra){
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'');
}

function verificaPalavrasDuplicadas(texto){
    const listaPalavras = texto.split(' ');
    const resultado = {};
    // resultado[listaPalavras] = valor
    listaPalavras.forEach(palavra => {
        if(palavra.length >= 3){
            const palavraLimpa = limpaPalavras(palavra);
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
        }
    })
    return resultado;    
}
//pegar as palavras da string e fazer virar array
//contador de ocorrências
// montar um objeto com o resultado

// objetoDesejado{
//     "palavra": 4,
//      "computador": 5
// }

//flatMap é um método de array que "achata" os resultados do lado de dentro de um array.
// exemplo: Array = [1,2,[3,4]] após o flatMap vira
// Array = [1,2,3,4]. No nosso exemplo a baixo ele permite que os [] vazios sejam eliminados da contagem. Ele como se ele pulasse os valores falsy.


//replace é uma ferramenta de tratar strings que substitui por algo específico string.replace('item velho','novo item')
//o que está no parênteses no primeiro campo é um amontoado de caracteres chamado de expressões regulares ou regeX ou regExp... o /g do final manda ele fazer isso de modo global.