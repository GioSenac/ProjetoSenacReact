const connection = require('../config/db');
const upload = require('../config/multerConfig');

async function Posts(request, response) {

  const query = 'INSERT INTO posts (fundo, icone, ImagemPaginaInicial, titulo, notasAntiConsumidoras, notasEmocional, sinopse, corHeader, corSinopse, corComentarios) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    let params = Array();
    console.log(request.body);
    request.files.map((file) => {
      params.push(file.filename);
    })

    const notasAntiConsumidoras = request.body.notasAntiConsumidoras === 'null' ? null : parseInt(request.body.notasAntiConsumidoras);
    const notasEmocionais = request.body.notasEmocionais === 'null' ? null : parseInt(request.body.notasEmocionais);

  //Colocar os params pushs dos textos e cores
    params.push(request.body.titulo);
    params.push(notasAntiConsumidoras);
    params.push(request.body.notasEmocionais);
    params.push(request.body.sinopse);
    params.push(request.body.corHeader);
    params.push(request.body.corSinopse);
    params.push(request.body.corComentarios);

    connection.query(query, params, (err, results) => {
      console.log(results)
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
}

module.exports = {
  Posts,
};