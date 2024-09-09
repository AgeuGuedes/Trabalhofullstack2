document.getElementById('pessoaForm').addEventListener('submit', async function (event) {
    event.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
  
    try {
      const response = await fetch('http://localhost:3000/api/pessoas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, cpf, telefone }),
      });
  
      if (!response.ok) {
        throw new Error('Erro ao cadastrar pessoa');
      }
  
      const data = await response.json();
      console.log('Pessoa cadastrada:', data);
    } catch (error) {
      console.error('Erro:', error);
    }
  });
  