const itens = ["Guarabira", "Belém", "Sapé"]; // Array contendo os nomes das cidades

// Constrói uma estrutura HTML para listar as cidades
const listaCidades = itens.map((cidade) => `<li>${cidade}</li>`).join(''); // Mapeia as cidades e cria os itens da lista, depois junta os itens em uma única string

// Cria uma string HTML que inclui a lista ordenada de cidades
const html = `<ul>${listaCidades}</ul>`; // Cria uma estrutura HTML de lista ordenada (ul) com os itens das cidades

/*
Semântica: O algoritmo cria uma lista ordenada de cidades, gerando uma string HTML. 
Utiliza map() para criar os itens da lista e o join() para juntar os itens em uma única string. 
O resultado final é um bloco HTML contendo a lista de cidades.
*/
