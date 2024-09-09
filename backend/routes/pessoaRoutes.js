const express = require('express');
const Pessoa = require('../models/pessoa');
const router = express.Router();

// Endpoint para criar uma nova pessoa
router.post('/pessoas', async (req, res) => {
  try {
    const { nome, cpf, telefone } = req.body;
    const pessoa = await Pessoa.create({ nome, cpf, telefone });
    res.status(201).json(pessoa);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
