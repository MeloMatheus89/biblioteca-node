//A linha `import` está substituindo a linha `const fs...`
import fs from 'fs';
// const fs = require('fs'); <Está comentada pq não se faz mais necessária

//A linha `import` está substituindo a linha `const trataErros...`
import trataErros from './erros/funcoesErro.js';
// const trataErros = require('./erros/funcoesErro'); Está comentada pq não se faz mais necessária 

//Importando a função contaPalavras
import { contaPalavras } from './index.js';

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
    try {
      if (erro) throw erro;
      contaPalavras(texto);
    } catch(erro) {
      trataErros(erro);
    }
  })