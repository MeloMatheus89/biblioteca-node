export default function trataErros(erro) {
  if (erro.code === 'ENOENT') {
    throw new Error('Arquivo não encontrado');
  } else {
    return 'Erro na aplicação';
  }
}

//Logo acima o comando `export default...` faz o mesmo trabalho aqui da linha `module.exports...`
// module.exports = trataErros;
