//A linha `import` está substituindo a linha `const fs...`
import fs from "fs";
// const fs = require('fs'); <Está comentada pq não se faz mais necessária

//A linha `import` está substituindo a linha `const trataErros...`
import trataErros from "./erros/funcoesErro.js";
// const trataErros = require('./erros/funcoesErro'); Está comentada pq não se faz mais necessária

//Importando a função contaPalavras
import { contaPalavras } from "./index.js";

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];
const enderecoDestino = caminhoArquivo[3];

fs.readFile(link, "utf-8", (erro, texto) => {
  console.log("Debug:chegou aqui");
  try {
    if (erro) throw erro;
    const resultado = contaPalavras(texto);
    criaESalvaArquivo(resultado, enderecoDestino);
  } catch (erro) {
    trataErros(erro);
  }
});

// async function criaESalvaArquivo(listaPalavras, enderecoDestino) {
//   const arquivoNovo = `${enderecoDestino}/resultado.txt`;
//   const textoPalavras = JSON.stringify(listaPalavras);
//   try {
//     await fs.promises.writeFile(arquivoNovo, textoPalavras);
//     console.log("arquivo criado");
//   } catch (erro) {
//     throw erro;
//   }
// }

function criaESalvaArquivo(listaPalavras, enderecoDestino) {
  const arquivoNovo = `${enderecoDestino}/resultado.txt`;
  const textoPalavras = JSON.stringify(listaPalavras);

  fs.promises
    .writeFile(arquivoNovo, textoPalavras)
    .then(() => {
      //processamento feito com o resultado da promessa
      console.log("Arquivo criado");
    })
    .catch((erro) => {
      throw erro;
    })
    .finally(() => console.log("Operação finalizada"));
}
