const letras = [
    ['a', 'b', 'c'], // Array contendo sub-arrays com letras
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
  ];
  
  let resultado = letras.flat().reduce((objeto, numero) => { // Usa flat() para achatar os arrays e reduce() para contar as ocorrências
    if (objeto[numero]) { // Verifica se o número já existe no objeto
      objeto[numero] += 1; // Incrementa o contador caso o número já exista
    } else { 
      objeto[numero] = 1; // Inicializa o contador com 1 caso o número não exista
    }
    return objeto; // Retorna o objeto atualizado
  }, {}); // Inicializa o objeto vazio
  
  /*
  Semântica: O algoritmo usa flat() para combinar todos os arrays de letras em um único array. 
  Em seguida, usa reduce() para contar quantas vezes cada letra aparece e armazena os resultados em um objeto.
  A chave do objeto é a letra, e o valor é o número de ocorrências dessa letra.
  */
  