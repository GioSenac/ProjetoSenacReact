// Módulo de configuração da webapi, módulo de aplicação

// Importar o pacote express (servidor)
const express = require('express');
// Responsável por lidar com requisições externas
const cors = require('cors');
// Importar as rotas para serem executadas na aplicação
const userRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter');
const router = require('./routes/routes.js');
const postsRouter = require('./routes/postsRouter.js');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
const dotenv = require('dotenv').config();

// Instanciar o express na variável app
const app = express();

// Habilitar o recebimento de requests em formato JSON
app.use(express.json());
// Habilitar o recebimento de requests em formato JSON
app.use(cors())

// Require the upload middleware
const upload = require('./config/multerConfig.js');

// Set up a route for file uploads

app.post('/upload', upload.single('file'), (req, res) => {
    
  // Handle the uploaded file
  res.json({ message: 'File uploaded successfully!' });
});

// Habilitar as rotas na aplicação

app.use('/api', userRouter);
app.use('/api/posts', postsRouter);
app.use('/api/auth', loginRouter);
app.use('/api', router);

// Setar a porta do servidor, a parir do arquivo .env

app.set('port', process.env.PORT || 3308);

module.exports = app;