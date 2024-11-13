const a = [1, 2, 3, 4, 5]; // Array contendo os números de 1 a 5
const b = [6, 7, 8, 9, 10]; // Array contendo os números de 6 a 10

// Soma os valores correspondentes das listas 'a' e 'b'
const soma = a.map((valor, index) => valor + b[index]); // Usa map() para somar os valores das duas listas na mesma posição

/*
Semântica: O algoritmo soma os valores das listas 'a' e 'b' index por index. 
Usa map() para percorrer os dois arrays, somando os valores correspondentes de cada posição e retornando um novo array com os resultados.
*/
