const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();
const port = 3000;

app.use(express.json());

// Conectar ao banco de dados
const sequelize = new Sequelize('postgres://user:password@localhost:5432/mydb');

// Testar conexão
sequelize.authenticate()
  .then(() => console.log('Conectado ao banco de dados'))
  .catch(err => console.error('Não foi possível conectar ao banco de dados', err));

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

const pessoaRoutes = require('./routes/pessoaRoutes');
app.use('/api', pessoaRoutes);

