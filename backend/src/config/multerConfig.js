const express = require('express');
const path = require('path');
const multer = require('multer');

const app = express();
app.use(express.json());

const uploadFolder = path.resolve(__dirname, 'upload');

const configMulter = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {

      let destinationFolder = uploadFolder;

      if (file.fieldname === 'fundo') {
        destinationFolder = path.join(uploadFolder, 'fundo');
      } else if (file.fieldname === 'icone') {
        destinationFolder = path.join(uploadFolder, 'icone');
      } else if (file.fieldname === 'ImagemPaginaPrincipal') {
        destinationFolder = path.join(uploadFolder, 'ImagemPaginaPrincipal');
      }

      callback(null, destinationFolder);
    },
    filename: (request, file, callback) => {
      const filename = file.originalname;
      return callback(null, filename);
    },
  }),
});

const upload = multer({ storage: configMulter }).fields([
  { name: 'fundo', maxCount: 1 },
  { name: 'icone', maxCount: 1 },
  { name: 'ImagemPaginaPrincipal', maxCount: 1 },
]);

module.exports = {
  upload,
};
