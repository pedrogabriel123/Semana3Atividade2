const tamanho = prompt('Digite o tamanho da lista de números'); // Solicita ao usuário o tamanho da lista, retornando uma string
const lista = new Array(tamanho).fill(null); // Cria um novo array com o tamanho especificado, preenchido com valores nulos

lista
  .map(function (item, index) { // Aplica a função de mapeamento na lista; item é o valor atual e index é a posição
    return index + 1; // Retorna o índice + 1 para cada item da lista
  })
  .reduce(function (acumulador, item) { // Aplica uma redução, acumulando os valores a partir do primeiro valor
    return acumulador * item; // Multiplica o acumulador pelo item da lista
  });

// A versão com arrow functions
new Array(tamanho) // Cria um novo array com o tamanho especificado
  .fill(null) // Preenche o array com valores nulos
  .map((item, index) => index + 1) // Mapeia a lista retornando index + 1
  .reduce((acumulador, item) => acumulador + item); // Reduz a lista somando todos os itens

/*
Semântica: O algoritmo cria uma lista de números de 1 até o valor inserido pelo usuário. 
Usa map() para preencher a lista e reduce() para calcular o produto ou a soma dos números da lista. 
A versão com Arrow Functions simplifica o código, mantendo a mesma lógica.
*/
