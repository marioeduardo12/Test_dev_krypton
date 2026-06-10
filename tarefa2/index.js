const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const atividades = require("../atividades.json");

app.post ('/atividade', (req, resultado) => {
        const { pagina } = req.body; 
        atividades.sort((a, b) => a.hora.localeCompare(b.hora));
        const inicio = (pagina - 1) * 5;
        const resultadoPagina = atividades.slice(inicio, inicio + 5);
        resultado.json(resultadoPagina);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

