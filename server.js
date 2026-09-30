const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// Rota de teste para ver se a API está online
app.get('/', (req, res) => {
    res.json({ mensagem: 'API do projeto de saúde rodando com sucesso!' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});