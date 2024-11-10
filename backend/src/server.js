const express = require('express');
const app = express();
const produtoRoutes = require('./routes/produtoRoutes');
const sequelize = require('./config/database');

app.use(express.json());
app.use('/api/produtos', produtoRoutes);

sequelize.sync().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch(error => console.error('Erro ao conectar ao banco de dados:', error));
