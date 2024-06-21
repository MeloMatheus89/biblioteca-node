const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) =>{
    verificaPalavrasDuplicadas(texto);
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
    const paragrafos = texto.split('\n');

}
function verificaPalavrasDuplicadas(texto){
    const listaPalavras = texto.split(' ');
    const resultado = {};
    // resultado[listaPalavras] = valor
    listaPalavras.forEach(palavra => {
        resultado[palavra] = (resultado[palavra] || 0) + 1
    })
    console.log(resultado);

}