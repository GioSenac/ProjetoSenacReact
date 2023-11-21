const connection = require('../config/db');
const upload = require('../config/multerConfig');

async function Posts(request, response) {

  const uploadMiddleware = upload.fields([
    { name: 'fundo', maxCount: 1 },
    { name: 'icone', maxCount: 1 },
    { name: 'ImagemPaginaPrincipal', maxCount: 1 },
  ]);

  uploadMiddleware(request, response, (err) => {
    if (err) {
      return response.status(500).json({
        success: false,
        message: 'Erro no upload de arquivos.',
      });
    }

    const query = 'INSERT INTO posts (titulo, notasADM, sinopse, fundo, icone, ImagemPaginaPrincipal) VALUES (?, ?, ?, ?, ?, ?)';

    const params = [
      request.body.titulo,
      request.body.notasADM,
      request.body.sinopse,
      request.files['fundo'][0].filename,
      request.files['icone'][0].filename,
      request.files['ImagemPaginaPrincipal'][0].filename,
    ];

    connection.query(query, params, (err, results) => {
      if (results) {
        response.status(201).json({
          success: true,
          message: 'Postagem Criada com Sucesso.',
        });
      } else {
        response.status(400).json({
          success: false,
          message: 'Não foi possível postar',
          query: err.sql,
          sqlMessage: err.sqlMessage,
        });
      }
    });
  });
}

module.exports = {
  Posts,
};