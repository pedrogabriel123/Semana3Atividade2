const estudantes = [
    { nome: 'Alice', notas: [100, 60, 92] }, // Objeto representando um estudante com nome e notas
    { nome: 'João', notas: [75, 30, 85] },
    { nome: 'Charles', notas: [90, 95, 85] },
    { nome: 'Paulo', notas: [100, 100, 100] },
  ];
  
  const estudantesMedias = estudantes.map((estudante) => { // Usa map() para iterar sobre os estudantes
    const total = estudante.notas.reduce((soma, nota) => soma + nota); // Calcula a soma das notas de cada estudante
    let { nome } = estudante; // Desestrutura o nome do estudante
    return { nome, media: total / estudante.notas.length }; // Retorna um objeto com o nome e a média das notas
  });
  
  const melhoresMedias = estudantesMedias.filter( // Usa filter() para filtrar os estudantes com média superior a 90
    (student) => student.media > 90 // Retorna true para estudantes com média maior que 90
  );
  
  /*
  Semântica: O algoritmo calcula a média das notas de cada estudante. 
  Usa map() para calcular a média de cada estudante e reduce() para somar as notas.
  Depois, filtra os estudantes com médias superiores a 90 usando filter().
  */
  