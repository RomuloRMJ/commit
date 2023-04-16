// Seleciona a tabela HTML
const table = document.querySelector('#my-table');

// Faz a chamada para o servidor usando a API Fetch
fetch('https://api.example.com/data')
  .then(response => response.json()) // Converte a resposta para JSON
  .then(data => {
    // Cria as linhas da tabela usando os dados recebidos
    data.forEach(item => {
      const row = table.insertRow();
      const cell1 = row.insertCell();
      const cell2 = row.insertCell();
      const cell3 = row.insertCell();
      cell1.innerHTML = item.id;
      cell2.innerHTML = item.name;
      cell3.innerHTML = item.price;
    });
  })
  .catch(error => {
    // Exibe uma mensagem de erro se houver algum problema na chamada
    console.error('Erro ao carregar dados:', error);
    const errorRow = table.insertRow();
    const errorCell = errorRow.insertCell();
    errorCell.colSpan = 3;
    errorCell.innerHTML = 'Ocorreu um erro ao carregar os dados.';
  });
