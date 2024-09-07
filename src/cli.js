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
const endereco = caminhoArquivo[3];

fs.readFile(link, "utf-8", (erro, texto) => {
  try {
    if (erro) throw erro;
    console.log("chegou aqui");
    const resultado = contaPalavras(texto);
    criaESalvaArquivo(resultado, endereco);
  } catch (erro) {
    trataErros(erro);
  }
});

async function criaESalvaArquivo(listaPalavras, endereco) {
  const arquivoNovo = `${endereco}/resultado.txt`;
  const textoPalavras = JSON.stringify(listaPalavras);
  try {
    await fs.promises.writeFile(arquivoNovo, textoPalavras);
    console.log("arquivo criado");
  } catch (erro) {
    throw erro;
  }
}
