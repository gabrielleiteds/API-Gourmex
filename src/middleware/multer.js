const multer = require('multer')

module.exports = (multer({

    storage: multer.diskStorage({
      
        // Qual deve ser o destino deles?
        destination: (req, file, cb) => {
         
            // Setamos o destino como segundo paramêtro do callback
            cb(null, 'uploads/');
        },
         
        // E como devem se chamar?
        filename: (req, file, cb) => {
          
            // Setamos o nome do arquivo que vai ser salvado no segundo paramêtro
            // Apenas concatenei a data atual com o nome original do arquivo, que a biblioteca nos disponibiliza.
            cb(null, Date.now().toString() + '-' + file.originalname);

        }
    }),
})); 