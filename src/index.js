const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) =>{
    quebraEmParagrafos(texto);
    //verificaPalavrasDuplicadas(texto);
})

// TODO criar lógica do contador de palavras.
//pegar as palavras da string e fazer virar array
//contador de ocorrências
// montar um objeto com o resultado

// objetoDesejado{
//     "palavra": 4,
//      "computador": 5
// }
function quebraEmParagrafos(texto){
    const paragrafos = texto.toLowerCase().split('\n');
    const contagem = paragrafos.map((paragrafo) => {
        return verificaPalavrasDuplicadas(paragrafo);
        })
    console.log(contagem);
}
//replace é uma ferramenta de tratar strings que substitui por algo específico string.replace('item velho','novo item')
//o que está no parênteses no primeiro campo é um amontoado de caracteres chamado de expressões regulares ou regeX ou regExp... o /g do final manda ele fazer isso de modo global.
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
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1
        }
    })
    return resultado;

}