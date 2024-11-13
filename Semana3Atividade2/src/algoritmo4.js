const funcionarios = [
    { nome: 'João', salario: 30000, departamento: 'TI' }, // Objeto representando um funcionário com nome, salário e departamento
    { nome: 'Janete', salario: 70000, departamento: 'RH' },
    { nome: 'Sofia', salario: 100000, departamento: 'RH' },
  ];
  
  const funcionariosPorDepartamento = funcionarios.reduce( // Usa reduce() para agrupar os funcionários por departamento
    (acumulador, funcionario) => { 
      const departamento = funcionario.departamento; // Acessa o departamento do funcionário
      if (!acumulador[departamento]) { // Se o departamento não existir no acumulador
        acumulador[departamento] = []; // Cria um novo array para o departamento
      }
      acumulador[departamento].push(funcionario); // Adiciona o funcionário ao departamento
      return acumulador; // Retorna o objeto acumulador
    },
    {} // Inicializa o objeto vazio para acumular os departamentos
  );
  
  const mediasSalarioPorDepartamento = Object.keys( // Usa Object.keys() para obter os departamentos
    funcionariosPorDepartamento
  ).map((departamento) => { // Itera sobre cada departamento
    const total = funcionariosPorDepartamento[departamento].reduce( // Usa reduce() para somar os salários dos funcionários do departamento
      (acumulador, funcionario) => acumulador + funcionario.salario,
      0 // Inicializa o valor acumulador com 0
    );
    return { // Retorna um objeto com o nome do departamento e a média salarial
      departamento: departamento,
      media: total / funcionariosPorDepartamento[departamento].length,
    };
  });
  
  const maioresPagamentos = mediasSalarioPorDepartamento.filter( // Usa filter() para filtrar os departamentos com média salarial superior a 65.000
    (departamento) => departamento.media > 65000 // Retorna true para departamentos com média maior que 65.000
  );
  
  /*
  Semântica: O algoritmo agrupa os funcionários por departamento usando reduce().
  Depois, calcula a média salarial de cada departamento com a ajuda de map() e reduce().
  Por fim, filtra os departamentos onde a média salarial é superior a 65.000 utilizando filter().
  */
  