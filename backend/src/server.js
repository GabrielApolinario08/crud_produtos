const express = require('express');
const cors = require('cors');
const app = express();
const produtoRoutes = require('./routes/produtoRoutes');
const sequelize = require('./config/database');

app.use(cors());
app.use(express.json());
app.use('/api/produtos', produtoRoutes);

sequelize.sync().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch(error => console.error('Erro ao conectar ao banco de dados:', error));
