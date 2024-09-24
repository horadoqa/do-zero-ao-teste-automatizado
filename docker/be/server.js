const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 5000;

// Conexão com MongoDB
mongoose.connect('mongodb://mongo:27017/horadoqa-prod').then(() => {
    console.log("Conectado ao MongoDB");
})
.catch(err => {
    console.error("Erro ao conectar:", err);
});

app.use(cors());
app.use(bodyParser.json());

// Rota para salvar o usuário
app.post('/api/users', async (req, res) => {
    const { name, email, phone, country, framework, comments } = req.body;
    const newUser = new User({ name, email, phone, country, framework, comments });

    try {
        await newUser.save();
        res.status(201).send('Usuário salvo com sucesso!');
    } catch (error) {
        res.status(500).send('Erro ao salvar o usuário: ' + error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
