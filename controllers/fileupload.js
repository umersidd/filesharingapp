const multer = require('multer')
const path = require('path')
const File = require('../models/uploadfile')
const { v4: uuidv4 } = require('uuid')


let storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/') ,
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
              cb(null, uniqueName)
    } ,
});

let upload = multer({
    storage,
    limit : { fileSize: 1000000 * 100},
}).single('myfilenames')

const fileupload = async (req,res)=>{
    // res.send('hello')

    upload(req, res, async (err) => {
    // if (!req.file){
    //         throw new({error : 'All fields are required'})
    //     }
    if (err) {
      res.status(500).send({ error: err.message });
    }
      const file = new File({
          filename: req.file.filename,
          uuid: uuidv4(),
          path: req.file.path,
          size: req.file.size
      });
      const response = await file.save();
      res.json({ file: `${process.env.APP_BASE_URL}/files/${response.uuid}` });
    });
}



module.exports = fileupload